import React from "react";
import { Link, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import "../styles/Navigation.css";
import logo from "../assets/images/nav-logo.png";

const Navigation = ({
  heroRef,
  servicesRef,
  aboutRef,
  portfolioRef,
  contactRef,
}) => {
  const location = useLocation();

  // Dynamic navigation items
  const navItems = [
    { name: "Home", path: "/", ref: heroRef },
    { name: "Services", path: "/services", ref: servicesRef },
    { name: "About", path: "/about", ref: aboutRef },
    { name: "Portfolio", path: "/portfolio", ref: portfolioRef },
    { name: "Resume", path: "/contact", ref: contactRef },
  ];

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="nav-main" role="banner">
      <div className="nav-wrapper">
        <div className="header-left">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </div>
        <nav className="navbar-links" role="navigation">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={isActive(item.path)}>
                <Link to={item.path} onClick={() => scrollToSection(item.ref)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <CTAButton
            label="Contact Me"
            action={handleContactClick}
            type="btn-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
