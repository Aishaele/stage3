import React, { useState } from "react";
import logo from "../component/img/logo.svg";
import h1 from "../component/img/h1.png"
import Wallet from "./Wallet";
import arrow from "../component/img/arrow.png";
import metamusk from "../component/img/metamusk.png";
import Walletconnect from "../component/img/walletconnect.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWallet = () => {
    setIsOpen(!isOpen);
  };
  return (
    <body>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <img src={h1} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/place">Place to stay</a>
            </li>
            <li> NFTs</li>
            <li> Community</li>
          </ul>
        </nav>
        <button onClick={toggleWallet} id="connect">
          {" "}
          Connect wallets
        </button>
      </header>
      {isOpen && (
        <Wallet
          content={
            <div className="wallet">
              <div className="choose">
                <p>Choose your prefered wallet:</p>
                <div className="metamusk">
                  <img src={metamusk} alt="metamusk" />
                  <p>Metamusk</p>
                  <img src={arrow} id="musk" alt="arrow" />
                </div>
                <div className="Walletconnect">
                  <img src={Walletconnect} alt="arrow" />
                  <p>Wallet Connect</p>
                  <img src={arrow} id="wallet" alt="arrow" />
                </div>
              </div>
            </div>
          }
          handleClose={toggleWallet}
        />
      )}
    </body>
  );
};

export default Header;
