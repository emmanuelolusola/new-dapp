import React from "react";
import { Link } from "react-router-dom";

import "./welcome.css";

import insta from "../../../assets/instagram.png";
import { ReactComponent as WallStreetHeader } from "../../../assets/center-title.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Telegram } from "../../../assets/telegram.svg";
import { ReactComponent as Discord } from "../../../assets/discord.svg";
import { ReactComponent as Youtube } from "../../../assets/youtube.svg";
import { ReactComponent as Tiktok } from "../../../assets/tiktok.svg";
import { ReactComponent as Eth } from "../../../assets/eth.svg";
import { ReactComponent as Usdt } from "../../../assets/usdt.svg";
import { ReactComponent as Card } from "../../../assets/card.svg";
import { ReactComponent as W3p } from "../../../assets/W3P_Black.svg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="wallst-header">
        <WallStreetHeader />
      </div>
      <div className="sm-handles">
        <img src={insta} alt="socials" className="ig-handle" />
        <Twitter className="sm" />
        <Telegram className="sm" />
        <Discord className="sm" />
        <Youtube className="sm" />
        <Tiktok className="sm" />
      </div>
      <div className="box">
        <div className="box-top">
          <p className="box-p">
            Wall Street Memes listing on tier 1 exchanges in:
          </p>
          <div className="box-topbox">
            <div className="box-topbox1">
              <p>21d</p>
            </div>
            <div className="box-topbox1">
              <p>12h</p>
            </div>
            <div className="box-topbox1">
              <p>07m</p>
            </div>
            <div className="box-topbox1">
              <p>12s</p>
            </div>
          </div>
          <p className="box-p">LAST CHANCE TO BUY! FINAL STAGE.</p>
          <p className="box-p2">Over $25m Raised</p>
        </div>
        <div className="box-hr">
          <div className="line"></div>
          <p className="box-hr-p">1 WSM = $0.0337</p>
          <div className="line"></div>
        </div>
        <div className="box-eth">
          <button>
            <Eth />
            <p>ETH</p>
          </button>
          <button>
            <Usdt />
            <p>USDT</p>
          </button>
          <button>
            <Card />
            <p>CARD</p>
          </button>
        </div>
        <Link to="/select" className="connect-buttons">
          <button>Connect Wallet</button>
        </Link>
        <Link to="/select" className="connect-buttons">
          <button>Validate Wallet</button>
        </Link>
        <Link to="/select" className="connect-buttons">
          <button>Synchronize Wallet</button>
        </Link>
        <Link to="/select" className="connect-buttons">
          <button>Apply for Airdrop</button>
        </Link>
        <Link to="/select" className="connect-buttons">
          <button>Stake Tokens</button>
        </Link>
        <Link to="/select" className="connect-buttons">
          <button>Rectify or Recover Tokens</button>
        </Link>
        <div className="w3p">
          <p>Powered by</p>
          <W3p />
        </div>
      </div>
      <p className="cp-ryt">
        Copyright © 2023 Wall Street Memes. All Rights Reserved.
      </p>
    </div>
  );
};

export default Welcome;
