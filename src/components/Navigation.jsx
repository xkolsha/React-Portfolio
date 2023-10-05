import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CTAButton from "./CTAButton";
import "../styles/Navigation.css";
import logo from "../assets/images/nav-logo.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
  ];

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleContactClick = () => {
    navigate("/contact");
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
                <Link to={item.path}>{item.name}</Link>
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
