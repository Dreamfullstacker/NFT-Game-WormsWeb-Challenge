import "../assets/css/templates/mmlogin.scss";
import Button from "../components/atoms/Button";
import metaLogo from "./../assets/img/zorro.png";
import SocialMedia from "../components/molecules/SocialMedia";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import api from "../util/api.js";
import "assets/css/templates/components/modal.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import MmHeader from "components/organisms/login/MmHeader";

function MmLoginPage() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("almost-there");
  // const [ip, setIP] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    // setModalOpen(true);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          // once connected, open modal with create account form
          setModalOpen(true);
        } else {
          setWallet("");
          setModalOpen(false);
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  // the Modal
  const ShowCreateAccountModal = () => {
    // the ip getter note this needs some cors header sent from backend
    const getData = async () => {
      // const res = await axios.get("https://geolocation-db.com/json/");
      // console.log(res.data);
      // setIP(res.data.IPv4);
      // setIP("fake.ip.address.development");
    };

    useEffect(() => {
      getData();
    }, []);

    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            <div className="create-account-modal">
              <button
                className="close-modal-button"
                onClick={() => {
                  // setModalOpen(false);
                }}
              >
                X
              </button>
              {/*  */}
              {/* form starts */}
              {currentModal !== "show-form" ? (
                <>
                  <h1>Ya Casi has llegado</h1>
                  <p className="my-1">
                    Conecta tu cuenta de juego para continuar en el mercado
                  </p>
                  <button
                    className="button"
                    onClick={() => {
                      setCurrentModal("show-form");
                    }}
                  >
                    Crear una nueva cuenta
                  </button>
                </>
              ) : (
                <>
                  <h1>Crear Cuenta</h1>
                  <p className="my-1">
                    Conecta tu cuenta de juego para continuar en el mercado
                  </p>
                  <CreateAccountForm address={walletAddress} />
                </>
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowCreateAccountModal /> : ""}
      <div className="vh-100 mm-login">
        <MmHeader />
        <div className="mmlogincenterdiv container grid place-center">
          <h4 className="mmtitle">Conectar Cartera</h4>
          <p className="mmfirstp">
            Conéctese con su billetera disponible o cree una nueva billetera
            para unirse a nuestro mercado
          </p>
          <Button
            onClick={() => {
              if (walletAddress === "") {
                // setModalOpen(false);
                connectWalletPressed();
              } else {
                 setModalOpen(true); // modified by tuktuk
              }
            }}
          >
            <img
              src={metaLogo}
              alt="Ingresar con MetaMask"
              width="60"
              className="logo-img"
            />
            <span className="logo-text">
              Iniciar Sesión con <br /> Meta Mask
            </span>
          </Button>
          <p className="mmsecondp">
            No somos propietarios de sus claves privadas y no podemos acceder a
            sus fondos sin su confirmación. Ver término de uso
          </p>
          <div className="mediadiv">
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

// form component

const CreateAccountForm = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  const [email, setEmail] = useState("");
  const [mailcode, setMailcode] = useState("");
  const navigate = useNavigate();

  const createMailcode = async () => {
    if (email !== "") {
      await api
        .post("/createmailcode", {
          params: { email: email, address: props.address },
        })
        .then(function (response) {
          // console.log(response.data.Success);
          if (response.data.Success === "verified") {
            alert(
              "You are already registered! Please click Crear Cuenta button"
            );
          }

          if (response.data.Success === "unverified") {
            alert(
              "Check your mailbox, If there is no email, please check your email verification"
            );
          }

          if (response.data.Success === "emailerror") {
            alert("Check your email verification please.");
          }

          if (response.data.Success === "emailsent") {
            alert("Check your mailbox please.");
          }
        })
        .catch(function (error) {
          console.log("stories error response :: ", error);
        });
    }
  };
  const registerEmail = async () => {
    if (email !== "") {
      await api
        .post("/register", { params: { email: email, mailcode: mailcode } })
        .then(function (response) {
          if (response.data.Success === "verified") {
            // alert("You are already registered!");
            localStorage.setItem("uuid", response.data.uuid);
            navigate("/marketplace");
          }
          if (response.data.Success === "nomatchemail") {
            alert("No email matched");
          }
          if (response.data.Success === "unverified") {
            alert("No mailcode matched");
          }
        })
        .catch(function (error) {
          console.log("stories error response :: ", error);
        });
    }
  };

  return (
    <form
      className="create-account-form mt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="email"
        placeholder="Email"
        onInput={(event) => setEmail(event.target.value)}
        {...register("email", {
          required: "INGRESE SU CORREO ELECTRONICO",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Correo invalido",
          },
        })}
      />
      {errors.email && errors.email.message}
      <div className="flex-wrapper justify-center gap-1 my-1">
        <div className="mw-50">
          <input
            type="text"
            placeholder="Ingresa el código"
            onInput={(event) => setMailcode(event.target.value)}
            {...register("mailcode", {
              required: "Inserte el codigo recibido en la casilla de correo",
            })}
          />
        </div>
        <div>
          <button className="button" onClick={createMailcode}>
            Enviar código vía email
          </button>
        </div>
      </div>
      <button className="button create-acc-button " onClick={registerEmail}>
        Crear Cuenta
      </button>
      <div className="form-terms mt-1">
        Al continuar, acepta los términos de servicio y confirma que ha leído la
        política de privacidad
      </div>
    </form>
  );
};

export default MmLoginPage;
