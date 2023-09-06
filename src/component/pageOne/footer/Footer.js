import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="get-started">
        <h1>
          Get started with DApps Connect <br /> today
        </h1>
        <Link to="/select">
          <button className="revert-button">Synchronize Wallet</button>
        </Link>
      </div>
      <div className="copyright">
        <p className="copyright-p">
          © 2022 Dapps Connect | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
