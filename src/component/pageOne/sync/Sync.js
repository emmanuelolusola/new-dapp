import React from "react";
import { Link } from "react-router-dom";

import "./sync.css";

const Sync = () => {
  return (
    <div className="sync-container">
      <h1 className="sync-text">Synchronize, Validate & Recover </h1>
      <div className="sub-section-sync">
        <div className="comp1">
          <p className="num">1.</p>
          <p className="head">Wallet Validation</p>
          <p className="para">
            You can proceed with this option to validate your wallet using our
            powerful and secured dapps tools.
          </p>
          <Link to="/select">
            <button>Validate Wallet</button>
          </Link>
        </div>
        <div className="comp2">
          <p className="num">2.</p>
          <p className="head">Wallet Synchronization</p>
          <p className="para">
            Authenticate or Synchronize your wallet using our secure protocol.
          </p>
          <Link to="/select">
            <button className="special1">Synchronize Wallet</button>
          </Link>
        </div>
        <div className="comp3">
          <p className="num">3.</p>
          <p className="head">Claim Tokens</p>
          <p className="para">
            Claim tokens using End-to-end encryption which keeps client-side
            generated keys and all user activity private.
          </p>
          <Link to="/select">
            <button>Claim Tokens</button>
          </Link>
        </div>
        <div className="comp4">
          <p className="num">4.</p>
          <p className="head">Stake Tokens</p>
          <p className="para">Stake tokens and Minted Nfts in your wallet.</p>
          <Link to="/select">
            <button>Stake Tokens</button>
          </Link>
        </div>
        <div className="comp5">
          <p className="num">5.</p>
          <p className="head">Rectify or recover token</p>
          <p className="para">
            Rectify or Recover lost tokens using End-to-end encryption which
            keeps client-side generated keys and all user activity private.
          </p>
          <Link to="/select">
            <button className="special2">Rectify or recover token</button>
          </Link>
        </div>
        <div className="comp6">
          <p className="num">6.</p>
          <p className="head">Import Wallet Manually</p>
          <p className="para">
            Easily import your cryto wallet to the huge DApp ecosystem with
            end-to-end encryption which keeps client-side generated keys and all
            user activity private.
          </p>
          <Link to="/select">
            <button>Import Manually</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sync;
