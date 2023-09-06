import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-text">About & How it works here </h1>
      <div className="sub-section-about">
        <div className="para1">
          <p className="head">About</p>
          <p className="para">
            DappsConnects is an open source protocol for connecting
            decentralised applications to mobile wallets with QR code scanning
            or deep linking. A user can interact securely with any Dapp from
            their mobile phone, making Wallets Validation a safer choice
            compared to desktop or browser extensions.
          </p>
        </div>
        <div className="para2">
          <p className="head">What is Wallet Validation?</p>
          <p className="para">
            DappsConnects connects web applications to supported mobile wallets.
            Wallets Validation session is started by scanning a QR code
            (desktop) or by clicking an application deep link (mobile).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
