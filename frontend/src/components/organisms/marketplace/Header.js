import { useEffect, useState } from "react";
import Logo from "components/atoms/Logo";
import "assets/css/templates/header-market.scss";
import userAvatar from "assets/img/avatar_2.png";
import { Link } from "react-router-dom";
import Tooltip from "rc-tooltip";
function Header() {
  return (
    <>
      <header>
        <div className="header flex-wrapper">
          <div className="header-left flex-wrapper">
            <Logo alt="Space Worms" className="img-logo" />
            <nav>
              <ul>
                <li>
                  <Tooltip
                    placement="bottom"
                    trigger={["click"]}
                    overlay={<span>Marketplace Próximamente!</span>}
                  >
                    <a href="/#0">Marketplace</a>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="user-area">
              <Link to="/wallet">
                <button>
                  <img src={userAvatar} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
