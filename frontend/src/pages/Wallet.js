import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cryptoCoinLogo from "assets/img/gusano.png";
import userAvatar from "assets/img/avatar_2.png";
import inventoryIcon from "assets/img/icono_inventario.png";
import walletIcon from "assets/img/icono_wallet.png";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import "../assets/css/templates/wallet.scss";

export default function WalletPage() {
  const [modalOpen, setModalOpen] = useState(true);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

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

  // the Modal
  const ShowWallet = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid wallet-layout">
            {/*  */}
            {/* wallet starts */}
            <div>
              <div className="wallet-blue-box">
                <div className="wallet-user-info">
                  <div>
                    {" "}
                    <img src={userAvatar} alt="" />
                  </div>
                  <div>JhonWick</div>
                  <div className="walletAddress">{walletAddress}</div>
                </div>
                <div className="wallet-user-info-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/inventory">
                          <span>
                            <img src={inventoryIcon} alt="" />
                          </span>
                          Inventario
                        </Link>
                      </li>
                      <li>
                        <Link to="/wallet">
                          <span>
                            <img src={walletIcon} alt="" />
                          </span>
                          Wallet
                        </Link>
                      </li>

                      <li>
                        <Link to="/marketplace">
                          <span>⤺</span>Volver
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div>
              <div className="h1">Wallet</div>
              <div className="div">{walletAddress}</div>
              <div className="flex-wrapper">
                <div className="wallet-blue-box">
                  <h7>Coin</h7>
                  <div className="value">
                    0 BNB
                    <legend>0 USD</legend>
                  </div>
                  <div className="value">
                    0 BUSD
                    <legend>0 USD</legend>
                  </div>
                </div>
                <div className="wallet-blue-box">
                  <h7>WormsCoin</h7>
                  <div className="value">
                    0 WC
                    <legend>0 USD</legend>
                  </div>
                  <div className="grid mt-2">
                    <button className="button">Depositar</button>
                  </div>
                </div>
              </div>
              <div className="h1">Ingame Currency</div>
              <div className="wallet-blue-box">
                <div>WormsCoin</div>
                <div className="wallet-blue-box-image">
                  <img src={cryptoCoinLogo} alt="" />
                </div>
                <div className="crypto-value">
                  0<legend>0 USD</legend>
                </div>
                <div className="grid mt-2">
                  <button className="button">Retirar</button>
                </div>
              </div>
            </div>

            {/* <div className="create-account-modal">
                <h1>Compra</h1>
                <p className="my-1">
                  Estas a punto de comprar un huevo en Space Worms
                </p>
              </div> */}
            {/*  */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowWallet /> : ""}

      <div className="mm-wallet">
        <div className="">{` `}</div>
      </div>
    </>
  );
}
