import "../assets/css/templates/home.scss";
import Button from "../components/atoms/Button";
import { CarouselScreenshotSlider } from "../components/molecules/CarouselSlider";
import video from "./../assets/img/game-video.mp4";
import SpaceWormsLogo from "./../assets/img/20.png";
import homefirstimg5 from "./../assets/img/1.png";
import homebuttonimg1 from "./../assets/img/b_1.png";
import homebuttonimg2 from "./../assets/img/b2.png";
import homebuttonimg3 from "./../assets/img/b3.png";
import homesecondimg1 from "./../assets/img/5.png";
import roadmapH from "./../assets/img/ROADMAPHORIZONTAL.png";
import roadmapV from "./../assets/img/ROADMAPVERTICAL.png";
import Logo from "components/atoms/Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import { Link, useNavigate } from "react-router-dom";
import CrossIcon from "components/atoms/icons/cross";
import HamburguerIcon from "components/atoms/icons/hamburguer";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "assets/css/templates/header-home.scss";
import "assets/css/templates/footer-home.scss";

import teamMember1 from "assets/img/t1.png";
import teamMember2 from "assets/img/t2.png";
import teamMember3 from "assets/img/t3.png";
import footerimg4 from "assets/img/9.png";
import developersLogo from "assets/img/NT-Logo-med.png";
import awsLogo from "assets/img/awslogo.png";
import footerimg7 from "assets/img/12.png";
import footerimg8 from "assets/img/13.png";
import footerimg9 from "assets/img/21.png";
import dcBlack from "assets/img/dc_black.png";
import tgBlack from "assets/img/telegram_black.png";
import twBlack from "assets/img/tw_black.png";
import ytBlack from "assets/img/youtube_black.png";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

import sdLogo from "assets/img/sd.png";

import useWindowDimensions from "./../components/atoms/useWindowsDimensions";

function HomePage() {
  const Video = () => {
    return (
      <>
        <video
          style={{ width: width - 120 }}
          autoPlay
          playsInline
          muted
          src={video}
        />
      </>
    );
  };

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const [isOnCorrectArea, setOnCorrectArea] = useState(false);

  const { height, width } = useWindowDimensions();

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
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
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    console.log(walletAddress);
    navigate(walletAddress.length > 0 ? "/marketplace" : "/login");
  };
  return (
    <>
      <>
        <div
          className={`mobile-only overlayDivMenuMobile ${
            navbarOpen ? " showOverlay" : ""
          } `}
        >
          <nav>
            <ul>
              <li>
                <AnchorLink href="/" rel="author">
                  Inicio
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#intro" rel="author">
                  Introduccion
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#trailer" rel="author">
                  Trailer
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#roadmap" rel="author">
                  Roadmap
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#screenshots" rel="author">
                  Screenshots
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#team" rel="author">
                  Equipo
                </AnchorLink>
              </li>
              <li>
                <a href="https://docs.spaceworms.app/" rel="author">
                  Whitepaper
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
      {/* social media */}
      <div className={`fix-social fixed-social-media-div desktop-only`}>
        <a href="https://discord.com/invite/spaceworms">
          <img src={dcBlack} className="homefourthimgs" alt="unete a discord" />
        </a>
        <a href="https://t.me/spaceworms">
          <img
            src={tgBlack}
            className="homefourthimgs"
            alt="unete a telegram"
          />
        </a>
        <a href="https://twitter.com/spacewormsnft">
          <img src={twBlack} className="homefourthimgs" alt="unete a twitter" />
        </a>
        <a href="https://www.youtube.com/c/TioDiamond">
          <img
            src={ytBlack}
            className="homefourthimgs"
            alt="suscribete a nuestro canal"
          />
        </a>
      </div>

      {/*  */}
      <main className="">
        {/* inicio */}
        <div className="hero">
          <header>
            <div className="header-container">
              <div className="header flex-wrapper">
                <div className="header-left">
                  <Logo alt="SPACE WORMS" className="img-logo" />
                </div>
                <div className="header-right flex-wrapper direction-column">
                  <div className="ml-auto mr-2 topnav-area">
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Próximamente</span>}
                    >
                      <Link to="/#0" className="topnav-button">
                        Marketplace
                      </Link>
                    </Tooltip>
                  </div>
                  <nav>
                    <ul>
                      <li className="desktop-only header-link">
                        <AnchorLink href="/" rel="author">
                          Inicio
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#intro" rel="author">
                          Introduccion
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#trailer" rel="author">
                          Trailer
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#roadmap" rel="author">
                          Roadmap
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#screenshots" rel="author">
                          Screenshots
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#team" rel="author">
                          Equipo
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <a href="https://docs.spaceworms.app/" rel="author">
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <Tooltip
                          placement="bottom"
                          trigger={["click"]}
                          overlay={<span>Juego Próximamente!</span>}
                        >
                          <Button>
                            JUGAR AHORA <BsFillArrowRightCircleFill />
                          </Button>
                        </Tooltip>
                      </li>
                      <li className="mobile-only">
                        <Button
                          onClick={handleToggle}
                          className="buttonHamburguerStyles"
                        >
                          {navbarOpen ? <CrossIcon /> : <HamburguerIcon />}
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div className="left-right-flex ">
            <div className="left">
              <div className="leftrightinnerdiv">
                <img
                  src={SpaceWormsLogo}
                  className="home-img"
                  alt="spaceworms"
                  style={{ width: height - 150 }}
                />
                <p className="homeparag1">
                  Videojuego blockchain inspirado en slither.io
                </p>
                <p>Conviertete en el gusano Nº1 y obten grandes recompensas</p>
                <div className="homefirstbuttondiv">
                  <div className="mx-auto devices-container">
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg1} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg2} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg3} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className="right homesecondarea">
              <div className="leftrightinnerdiv">
                <img
                  src={homefirstimg5}
                  className="home-img"
                  alt=""
                  style={{ width: height - 150 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* intro */}
        <div className={`box-with-borders2 grid place-center intro`}>
          {/*  */}
          <div className="container second-section">
            <div className="left-right-flex" id="intro">
              <div className="left">
                <img src={homesecondimg1} className="homesecondimg1" alt="" />
              </div>
              <div className="right">
                <h2 className="hidden">Introduccion</h2>
                <p>
                  Una peligrosa raza Alienígena amenaza con destruir todo a su
                  paso para controlar la Fuerza Cósmica y la última esperanza
                  para enfrentarlos son los Gusanos Espaciales.
                </p>
                <p className="mt-2">
                  En Space Worms podrás ser parte de esta Guerra Espacial contra
                  los Loriks en un videojuego que te brindará horas
                  interminables de diversión además de generar ingresos
                  ilimitados. No te pierdas la oportunidad de unirte a esta
                  lucha para salvar al Universo usando la fuerza del Sol y las
                  Estrellas, mejorando a tu gusano, resolviendo misiones
                  diarias, o sencillamente enfréntate a otros.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* trailer */}
        <div className="homethirdarea grid place-center trailer" id="trailer">
          <div className="container third-area">
            <div className="left-right-flex small-container-for-mobiles">
              <div className="left">
                <h2 className="hidden">Trailer</h2>
                <p className="thirdareatitle">
                  Salva el universo y obten grandes recompensas
                </p>
              </div>
              <div className="right video-right">
                <Video />
              </div>
            </div>
          </div>
        </div>
        {/* roadmap */}
        <div className="homefourtharea roadmap" id="roadmap">
          <div className="container ">
            <div
              className="small-container-for-mobiles"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2 className="text-shadow">ROAD MAP</h2>
              <div className="m-auto px-1 roadmap-mobile-flex">
                <div className="">
                  <div className="roadmapqinfo-top large-devices">
                    <div>
                      <ul>
                        <li>Idea y economía del juego</li>
                        <li>Contratación de equipo</li>
                        <li>Diseño e ilustración</li>
                        <li className="h2 mt-1">2021</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Staking</li>
                        <li>Marketplace</li>
                        <li>Sistema de clanes o gremios</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>Minijuegos</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="roadmapqinfo-left small-and-medium-devices">
                    <div>
                      <ul>
                        <li>Lanzamiento sitio web</li>
                        <li>Preventa de NFT</li>
                        <li>Auditorías</li>
                        <li>Preventa de token</li>
                        <li>Alpha del juego</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Salas personalizadas</li>
                        <li>Eventos</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>Alquiler de NFT</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src={roadmapH}
                    alt="roadmap"
                    className=" img-fluid large-devices"
                  />
                  <img
                    src={roadmapV}
                    alt="roadmap"
                    className="small-and-medium-devices roadmap-vertical-img"
                  />
                  <div className="roadmapqinfo-right small-and-medium-devices">
                    <div>
                      <ul>
                        <li>Idea y economía del juego</li>
                        <li>Contratación de equipo</li>
                        <li>Diseño e ilustración</li>
                        <li className="h2 mt-1">2021</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Staking</li>
                        <li>Marketplace</li>
                        <li>Sistema de clanes o gremios</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Minijuegos</li>
                        <li className="h2 mt-1">2022</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                  <div className="roadmapqinfo-bottom large-devices">
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Lanzamiento sitio web</li>
                        <li>Preventa de NFT</li>
                        <li>Auditorías</li>
                        <li>Preventa de token</li>
                        <li>Alpha del juego</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Salas personalizadas</li>
                        <li>Eventos</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Alquiler de NFT</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* screenshots */}
        <div className="  homefiftharea screenshots" id="screenshots">
          <div className="container">
            <div className="">
              <h2 className="hidden">Screenshots</h2>
              <div className="text-shadow">Screenshots</div>
              <div className="slider-two">
                <CarouselScreenshotSlider />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </main>
      <footer className="">
        {/*  */}
        <div className="footerfirstarea container team" id="team">
          <span className=" text-shadow">Equipo</span>
          <div className="footerimgsdiv my-3">
            <div className="footerimgs">
              <img src={teamMember2} alt="john doe" />
              <div>Brayan Suniaga</div>
              <div>Inversor y creador de contenido</div>
            </div>
            <div className="footerimgs sm-my-3">
              <img src={teamMember1} alt="john doe" />
              <div>Abraham Leon</div>
              <div>Empresario y entusiasta de las criptomonedas</div>
            </div>
            <div className="footerimgs">
              <img src={teamMember3} alt="john doe" />
              <div>Neydua Sierra</div>
              <div>Ingeniero e inversor de NFT</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footersecondarea">
          <div className="container">
            <div className="footersecondchilddivs">
              <p>Partners</p>
              <img src={sdLogo} alt="partner" style={{ maxWidth: "100px" }} />
            </div>
            <div className="footersecondchilddivs">
              <p>Developers</p>
              <img src={developersLogo} alt="N&T Negocios y Tecnologías" />
              <div>Desarrollado por N&T Negocios y Tecnologías s.r.l.</div>
            </div>
          </div>
        </div>
        <div className="footerthirdarea">
          <div className="footerthirdimgs1 ">
            <div className="mx-auto">
              <img src={awsLogo} alt="Amazon Web Store" />
              <img src={footerimg7} alt="partner" />
              <img src={footerimg8} className="thirdimg" alt="partner" />
              <img src={footerimg9} alt="partner" />
            </div>
          </div>
          <div className="footerthirdimgs2">
            <a href="https://discord.com/invite/spaceworms">
              <img src={dcBlack} alt="discord" />
            </a>
            <a href="https://t.me/spaceworms">
              <img src={tgBlack} alt="telegram" />
            </a>
            <a href="https://twitter.com/spacewormsnft">
              <img src={twBlack} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/c/TioDiamond">
              <img src={ytBlack} alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="legal">
          <a href="/condiciones" alt="terms">
            Condiciones de uso
          </a>{" "}
          /{" "}
          <a href="/privacidad" alt="terms">
            Política de privacidad
          </a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
