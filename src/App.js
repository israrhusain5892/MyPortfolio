// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from "react";
import Header from "./components/Header";
// import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Project from "./components/Project";
function App() {
  return (
    <div>
        <Header />
      <Banner />
      <About />
      <Services />
      <Project/>
      <Expertise />
      <Footer />
    </div>
  );
}

export default App;
