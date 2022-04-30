// import "../assets/css/templates/mmlogin.scss";
import Button from "components/atoms/Button";
import { useEffect, useState } from "react";
import "assets/css/templates/components/modal.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SocialMedia from "components/molecules/SocialMedia";
import eggNFT from "assets/img/huevo-gusano.png";
import Logo from "components/atoms/Logo";
import LoadingWorm from "components/organisms/LoadingWorm";
import alien from "assets/img/alien.png";
import soldierWorm from "assets/img/gusano-guerrero.png";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import api from "../util/api.js";
const Web3 = require("web3");

function MarketPlacePage() {
  // const mainnetAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"actualBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  // const mainnetContract = '0x6BDb553bd2BeE492C8a278705F0041137181edc8'

  // const mainnetAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"actualBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  // const mainnetContract = '0x61a9F541F0D3A10400e1feC8b79a1a65bed059Fb';

  const [modalOpen, setModalOpen] = useState(true);
  const [currentModal, setCurrentModal] = useState("init");

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  // we create an initial state for the current eggs available by user
  const [currentMintedNfts, setCurrentMintedNfts] = useState();
  const [wholeMintedNfts, setWholeMintedNfts] = useState(0);
  const [nftImgPath, setNftImgPath] = useState();

  // we inform the user about mm status on model info
  const [MMStatusInfo, setMMStatusInfo] = useState("Esperando a Metamask");

  const mainnetAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "actualBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "to", type: "address" }],
      name: "mint",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "recipient", type: "address" },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  // contract address
  // const mainnetContract = "0x4f54DBCF6852cc5386f72210B3587B1975637386";
  const mainnetContract = "0x5dbe62d89c20fed696580a046b82520e9f7830ad";

  const rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
  const web3 = new Web3(rpcURL);

  const account1 = walletAddress;
  let tokenId;

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    // setStatus(status);
    addWalletListener();
  }, []);

  useEffect(() => {
    if (walletAddress) {
      calculateMintedEggs();
    }
  }, [walletAddress]);

  useEffect(() => {
    imgURI(wholeMintedNfts + 1);
  }, [wholeMintedNfts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  }, []);

  function imgURI(tokenId) {
    let base_URI = "https://negociosytecnologias.net/erc721/" + tokenId;
    try {
      api.get(base_URI).then(function (response) {
        var str = response.data;
        var str1 = str.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "");
        var arr = str1.split('"');
        var res = arr[arr.length - 2];

        setNftImgPath(res);
      });
    } catch (error) {
      console.log("Something went wrong: " + error.message);
    }
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          // setWallet(accounts[0]);
          // setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          // setWallet("");
          // setStatus("🦊 Connect to Metamask using the top right button.");

          localStorage.removeItem("uuid");
          navigate("/login");
        }
      });
    }
  }

  function calculateMintedEggs() {
    window.contract = new web3.eth.Contract(mainnetAbi, mainnetContract);
    window.contract.methods.tokenId().call((err, result) => {
      setWholeMintedNfts(parseInt(result));
    });
    window.contract.methods.balanceOf(walletAddress).call((err, result) => {
      setCurrentMintedNfts(parseInt(result));
    });
  }
  //mintNFT
  const mint_NFT = async (values) => {
    // set loading modal while order process is on
    setCurrentModal("loading-screen");
    setModalOpen(true);

    window.contract = await new web3.eth.Contract(mainnetAbi, mainnetContract);

    const transactionParameters = {
      to: mainnetContract,
      from: account1,
      value: web3.utils.toHex(10e16),
      data: window.contract.methods.mint(walletAddress).encodeABI(),
    };

    if (values.length > 0) {
      try {
        for (var i = 1; i <= values; i++) {
          const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
          api
            .post("/registerNFT", {
              params: { address: account1, id: currentMintedNfts + i },
            })
            .then(function (response) {})
            .catch(function (error) {
              console.log("stories error response :: ", error);
              setModalOpen(false);
            });
          setCurrentMintedNfts(currentMintedNfts + i);
          setWholeMintedNfts(wholeMintedNfts + i);
          setCurrentModal("bienvenido a la aventura!");
          setTimeout(() => {
            setModalOpen(false);
            setMMStatusInfo("Esperando a Metamask");
          }, 1000);
        }
      } catch (error) {
        setModalOpen(false);

        console.log("Something went wrong: " + error.message);
      }
    }
  };

  async function registerNFT(address, id) {
    await api
      .post("/registerNFT", { params: { address: address, id: id } })
      .then(function (response) {
        return response.data.Success;
      })
      .catch(function (error) {
        console.log("stories error response :: ", error);
      });
  }

  // handler to open ShowBuyEgg
  const handleBuyEgg = () => {
    setCurrentModal("buy-egg");
    setModalOpen(true);
  };

  // form component
  const BuyEggForm = ({ onMintNFT }) => {
    const {
      handleSubmit,
      register,
      watch,
      formState: { errors },
    } = useForm({
      defaultValues: {
        nftquantity: "1",
      },
    });
    const onSubmit = (values) => {
      console.log(values.nftquantity);
      // console.log(formState);
      onMintNFT(values.nftquantity);
    };
    // const onInputChange = (event) => {
    //   console.log(event.target.value);
    //   setInputValue(event.target.value);
    // };
    const inputValue = watch(["nftquantity", "number"]);
    const eggPrice=100;
    const handleChange = (event) => {
      document.getElementById("totalPrice").innerHTML=eggPrice*event.target.value+" BUSD";      
    };
    return (
      <>
        <form className="buy-egg-form mt-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="buy-egg-form-label flex-wrapper">
            <div>Costo de huevo</div>
            <div>{eggPrice} BUSD</div>
          </div>
          <div className="buy-egg-form-quantity flex-wrapper">
            <div>Cantidad</div>
            <div>
              <input
                type="number"
                className="number-input"
                min="1"
                max="2"
                {...register("nftquantity")}
                onChange={handleChange} //added by tuktuk
              />
            </div>
          </div>
          <div className="buy-egg-form-label flex-wrapper">
            <div>Precio total</div>
            <div id="totalPrice">100 BUSD</div>
          </div>
          <div className="buy-egg-form-terms">
            * máximo de compra por wallet (2)
          </div>
          <div className="buy-egg-form-actions flex-wrapper mt-1">
            <button className="button create-acc-button">Comprar</button>
          </div>
        </form>

        <div className="absolute mintegg-cancel-button">
          <button
            className="button cancel create-acc-button"
            onClick={() => setModalOpen(false)}
          >
            cancelar
          </button>
        </div>
      </>
    );
  };

  // the Modal
  const ShowBuyEgg = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            {/* {/ {2}/}
            {/ form starts /} */}
            {currentModal === "buy-egg" ? (
              <>
                <div className="create-account-modal">
                  <h1>Compra</h1>
                  <p className="my-1">
                    Estas a punto de comprar un huevo en Space Worms
                  </p>
                  <BuyEggForm
                    onCancel={() => {
                      setModalOpen(false);
                    }}
                    onMintNFT={(values) => {
                      mint_NFT(values);
                    }}
                    currentMintedNfts={currentMintedNfts}
                  />
                </div>
              </>
            ) : currentModal === "loading-screen" ? (
              <>
                <div className="loading-screen-container">
                  <h1>{MMStatusInfo}</h1>
                  <div>
                    <LoadingWorm />
                  </div>
                </div>
              </>
            ) : currentModal === "init" ? (
              <>
                {() => {
                  setModalOpen(false);
                }}
                <div className="flex-wrapper">
                  <div>
                    <LoadingWorm />
                  </div>
                  <h1>Cargando...</h1>
                </div>
              </>
            ) : (
              <>
                {() => {
                  setModalOpen(false);
                }}
                <div className="absolute img-loading">
                  <img src={soldierWorm} alt="" />
                </div>
                <div className="flex-wrapper">
                  <img src={alien} alt="" />
                  <h1>Bienvenido a la aventura</h1>
                </div>
              </>
            )}
            {/* {/ {2}/} */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowBuyEgg /> : ""}

      <div className="vh-100 mm-mint grid">
        <div className="">
          <h1 className="mmtitle">Egg Worms</h1>
          <div>
            <div className="NFT-status-container">
              <div className="NFT-status-box">
                <div>Cantidad Disponible</div>
                <div>{1000 - wholeMintedNfts} / 1000</div>
              </div>
              <div className="NFT-status-box">
                <div>Tiempo disponible</div>
                <div>2 días / 48Hrs</div>
              </div>
              {/* <div className="NFT-status-box">
                <div>Egg comprados</div>
                <div>{currentMintedNfts}</div>
              </div> */}
              <div className="NFT-status-box">
                <div>Eggs minted</div>
                {/* {
                  / on the first boolean, first string should display the current number of eggs bought, it will always be > 0 so... yeah. setting on first string a number just for visualizing the useState. /
                }
                {
                  / two booleans inserted probably first one wouldn't be needed once backend and MM actually works here /
                } */}
                <div>{currentMintedNfts} </div>
              </div>
            </div>
            <div className="NFT-view-container">
              <div className="image-container">
                <img src={nftImgPath} alt="" />
              </div>
              <div className="NFT-view-info-price">
                <div className="NFT-view-info-name">Minteo NFT</div>
                <div>100 BUSD</div>
              </div>
              <div className="NFT-view-info-stats">
                <div className="NFT-rare">Raro 5%</div>
                <div className="NFT-common">Común 12%</div>
                <div className="NFT-legendary">Legendario 8%</div>
                <div className="NFT-uncommon">Poco común 3%</div>
              </div>
              <div className="mt-1">
                {currentMintedNfts >= 2 ? (
                  " "
                ) : (
                  <button onClick={handleBuyEgg} className="button">
                    Comprar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default MarketPlacePage;
