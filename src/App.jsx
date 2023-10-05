import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
// import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const sectionStyle = { marginBottom: "18.9em" };

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="center-content">
          <div style={sectionStyle}>
            <Hero />
          </div>
          {/* <div style={sectionStyle}><Clients /></div> */}
          <div style={sectionStyle}>
            <Services />
          </div>
          <div style={sectionStyle}>
            <About />
          </div>
          <div style={sectionStyle}>
            <Portfolio />
          </div>
          <div style={sectionStyle}>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
