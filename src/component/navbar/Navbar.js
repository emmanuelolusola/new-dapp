import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as WallStreet } from "../../assets/wall-street.svg";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <Link to="/">
          <WallStreet />
        </Link>
      </div>
      <ul>
        <li>Staking</li>
        <li>Community</li>
        <li>How To Buy</li>
        <li>Tokenomics</li>
        <li>Airdrop</li>
        <li>Media</li>
      </ul>
      <Link to="/select">
        <button>Stake Now</button>
      </Link>
    </div>
  );
};

export default Navbar;
