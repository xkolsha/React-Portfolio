import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation
          heroRef={heroRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
        <div style={{ paddingTop: "64px" }}>
          <div ref={heroRef}>
            <Hero />
          </div>{" "}
          {/* Hero Section */}
          <div ref={servicesRef}>
            <Services />
          </div>{" "}
          {/* Services Section */}
          <div ref={aboutRef}>
            <About />
          </div>{" "}
          {/* About Section */}
          <div ref={portfolioRef}>
            <Portfolio />
          </div>{" "}
          {/* Portfolio Section */}
          <div ref={contactRef}>
            <Contact />
          </div>{" "}
          {/* Contact Section */}
        </div>
        <Footer /> {/* Footer Section */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
