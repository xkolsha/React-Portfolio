import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/nav-logo.png";

const Navigation = ({
  heroRef,
  servicesRef,
  aboutRef,
  portfolioRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", ref: heroRef },
    { name: "Services", path: "/services", ref: servicesRef },
    { name: "About", path: "/about", ref: aboutRef },
    { name: "Portfolio", path: "/portfolio", ref: portfolioRef },
    { name: "Contact", path: "/contact", ref: contactRef },
  ];

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the drawer when a menu item is clicked
  };

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
          </Link>
        </Typography>

        {/* Hamburger Menu Icon */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {navItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Center Links for Large Screens */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => scrollToSection(item.ref)}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
