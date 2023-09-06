import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Welcome from "../pageOne/welcome/Welcome";
import "./home.css";
// import About from "../pageOne/about/About";
// import Sync from "../pageOne/sync/Sync";
// import Footer from "../pageOne/footer/Footer";
const home = () => {
  return (
    <div className="home-style">
      <Navbar />
      <Welcome />
      {/* <About />
      <Sync />
      <Footer /> */}
    </div>
  );
};

export default home;
