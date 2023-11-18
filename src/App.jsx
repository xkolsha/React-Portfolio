import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import theme from "./theme"; // Ensure the correct path to your theme file

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
          {/* Navigation bar component with refs passed for smooth scrolling */}
          <Navigation
            heroRef={heroRef}
            servicesRef={servicesRef}
            aboutRef={aboutRef}
            portfolioRef={portfolioRef}
            contactRef={contactRef}
          />

          {/* Main content area */}
          <div style={{ paddingTop: "64px" }}>
            {/* Hero section with refs for scrolling */}
            <Hero
              id="hero"
              portfolioRef={portfolioRef}
              contactRef={contactRef}
            />

            {/* Services section */}
            <div ref={servicesRef}>
              <Services />
            </div>

            {/* About section */}
            <div id="about" ref={aboutRef}>
              <About />
            </div>

            {/* Portfolio section */}
            <div id="portfolio" ref={portfolioRef}>
              <Portfolio />
            </div>

            {/* Contact section */}
            <div id="contact" ref={contactRef}>
              <Contact />
            </div>
          </div>

          {/* Footer component */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
