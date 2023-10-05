import React, { useRef } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const sectionStyle = { marginBottom: "8em" };

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Navigation
          heroRef={heroRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
        <div className="center-content">
          <div ref={heroRef} style={sectionStyle}>
            <Hero portfolioRef={portfolioRef} contactRef={contactRef} />
          </div>
          <div ref={servicesRef} style={sectionStyle}>
            <Services />
          </div>
          <div ref={aboutRef} style={sectionStyle}>
            <About />
          </div>
          <div ref={portfolioRef} style={sectionStyle}>
            <Portfolio />
          </div>
          <div ref={contactRef} style={sectionStyle}>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
