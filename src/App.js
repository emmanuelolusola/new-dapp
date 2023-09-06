import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/pageOne/Home";
import SelectWallet from "./component/pageTwo/SelectWallet";
import Form from "./component/pageThree/Form";
import Error from "./component/pageThree/Error";

import "./App.css";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";

const App = () => {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/select" element={<SelectWallet />} />
        <Route path="/form" element={<Form />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
