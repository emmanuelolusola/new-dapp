import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./connectWallet.css";

//import all from "../../../assets/helium-hnt-logo.png";
import phantom from "../../../assets/phantom.png";
import trust from "../../../assets/trust.png";
import argent from "../../../assets/argent.png";
import metamask from "../../../assets/metamask.png";
import binance from "../../../assets/binance.png";
import safemoon from "../../../assets/safemoon.png";
import gnosis from "../../../assets/gnosis.png";
import defi from "../../../assets/defi.png";
import pillar from "../../../assets/pillar.png";
import im from "../../../assets/im.png";
import onto from "../../../assets/onto.png";
import token from "../../../assets/token.png";
import aave from "../../../assets/aave.png";
import digitex from "../../../assets/digitex.png";
import ledger from "../../../assets/ledger.png";
import coinbase from "../../../assets/coinbase.png";
import portis from "../../../assets/portis.png";
import formatic from "../../../assets/formatic.png";
import math from "../../../assets/math.png";
import bit from "../../../assets/bit.png";
import llive from "../../../assets/llive.png";
import wall from "../../../assets/wall.png";
import aut from "../../../assets/aut.png";
import dharma from "../../../assets/dharma.png";
import inch from "../../../assets/inch.png";
import huo from "../../../assets/huo.png";
import myk from "../../../assets/myk.png";
import loo from "../../../assets/loo.png";
import tvault from "../../../assets/tvault.png";
import ato from "../../../assets/ato.png";
import coi from "../../../assets/coi.png";
import tron from "../../../assets/tron.png";
import alice from "../../../assets/alice.png";
import eid from "../../../assets/eid.png";
import alp from "../../../assets/alp.png";
import wc from "../../../assets/wc.png";

const ConnectWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (showModal) {
      const timeout = setTimeout(() => {
        setShowError(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showModal]);

  const closeModal = () => {
    //console.log("closing modal...");
    setShowModal(false);
    setShowError(false);
  };

  return (
    <div className="connect-wallet-container">
      <h1 className="text-connect-wallet">Connect Wallet</h1>
      <p>
        Multiple iOS and Android wallets support this protocol. Your private
        keys are encrypted locally on your device with a secure enclave,
        protected by Biometric and 2-Factor Authentication.
      </p>

      <div className="wallets">
        <div onClick={() => setShowModal(true)} className="all">
          <img src={wc} alt="icon" className="icons" />
          <p className="icon-name">Wallet Connect</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="phantom">
          <img src={phantom} alt="icon" className="icons" />
          <p className="icon-name">Phantom Wallet</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="trust">
          <img src={trust} alt="icon" className="icons" />
          <p className="icon-name">Trust</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="argent">
          <img src={argent} alt="icon" className="icons" />
          <p className="icon-name">Argent</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="metamask">
          <img src={metamask} alt="icon" className="icons" />
          <p className="icon-name">Metamask</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="binance">
          <img src={binance} alt="icon" className="icons" />
          <p className="icon-name">Binance Chain</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="safemoon">
          <img src={safemoon} alt="icon" className="icons" />
          <p className="icon-name">Safemoon</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="gnosis">
          <img src={gnosis} alt="icon" className="icons" />
          <p className="icon-name">Gnosis Safe</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="defi">
          <img src={defi} alt="icon" className="icons" />
          <p className="icon-name">DeFi</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="pillar">
          <img src={pillar} alt="icon" className="icons" />
          <p className="icon-name">Pillar</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="im">
          <img src={im} alt="icon" className="icons" />
          <p className="icon-name">imToken</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="onto">
          <img src={onto} alt="icon" className="icons" />
          <p className="icon-name">ONTO</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="token">
          <img src={token} alt="icon" className="icons" />
          <p className="icon-name">TokenPocket</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="aave">
          <img src={aave} alt="icon" className="icons" />
          <p className="icon-name">Aave</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="digitex">
          <img src={digitex} alt="icon" className="icons" />
          <p className="icon-name">Digitex</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="ledger">
          <img src={ledger} alt="icon" className="icons" />
          <p className="icon-name">Ledger</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="coinbase">
          <img src={coinbase} alt="icon" className="icons" />
          <p className="icon-name">Coinbase</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="portis">
          <img src={portis} alt="icon" className="icons" />
          <p className="icon-name">Portis</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="formatic">
          <img src={formatic} alt="icon" className="icons" />
          <p className="icon-name">Formatic</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="math">
          <img src={math} alt="icon" className="icons" />
          <p className="icon-name">MathWallet</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="bit">
          <img src={bit} alt="icon" className="icons" />
          <p className="icon-name">Bitpay</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="llive">
          <img src={llive} alt="icon" className="icons" />
          <p className="icon-name">Ledger Live</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="wall">
          <img src={wall} alt="icon" className="icons" />
          <p className="icon-name">WallETH</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="aut">
          <img src={aut} alt="icon" className="icons" />
          <p className="icon-name">Authereum</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="dharma">
          <img src={dharma} alt="icon" className="icons" />
          <p className="icon-name">Dharma</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="inch">
          <img src={inch} alt="icon" className="icons" />
          <p className="icon-name">1inch Wallet</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="huo">
          <img src={huo} alt="icon" className="icons" />
          <p className="icon-name">Huobi</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="eid">
          <img src={eid} alt="icon" className="icons" />
          <p className="icon-name">Eidoo</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="myk">
          <img src={myk} alt="icon" className="icons" />
          <p className="icon-name">MYKEY</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="loo">
          <img src={loo} alt="icon" className="icons" />
          <p className="icon-name">Loopring</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="tvault">
          <img src={tvault} alt="icon" className="icons" />
          <p className="icon-name">TrustVault</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="ato">
          <img src={ato} alt="icon" className="icons" />
          <p className="icon-name">Atomic</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="coi">
          <img src={coi} alt="icon" className="icons" />
          <p className="icon-name">Coin96</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="tron">
          <img src={tron} alt="icon" className="icons" />
          <p className="icon-name">Tron</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="alice">
          <img src={alice} alt="icon" className="icons" />
          <p className="icon-name">Alice</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div onClick={() => setShowModal(true)} className="alp">
          <img src={alp} alt="icon" className="icons" />
          <p className="icon-name">AlphaWallet</p>
          {showModal && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <p className="initializing">Initializing...</p>
                {showError && <p className="errorText">Error connecting!</p>}
                <Link to="/form">
                  <button>Connect Manually</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-p">
          © 2022 Dapps Connect | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ConnectWallet;
