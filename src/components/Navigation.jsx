import { useState } from "react";
import { Link /* useLocation */ } from "react-router-dom";
import PropTypes from "prop-types";
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

// Navigation component with props for different section refs
const Navigation = ({ servicesRef, aboutRef, portfolioRef, contactRef }) => {
  // State for managing mobile menu drawer open/close
  const [menuOpen, setMenuOpen] = useState(false);
  //TODO - Getting the current location for active link styling
  // const location = useLocation();

  // Define navigation items, each with a name, path, and ref
  const navItems = [
    { name: "Home", path: "/", ref: null },
    { name: "Services", path: "/services", ref: servicesRef },
    { name: "About", path: "/about", ref: aboutRef },
    { name: "Portfolio", path: "/portfolio", ref: portfolioRef },
    { name: "Contact", path: "/contact", ref: contactRef },
  ];

  //TODO - Function to determine if a nav item is active
  // const isActive = (path) => (location.pathname === path ? "active" : "");

  // Function to handle scrolling to a section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (ref === null) {
      // For Home button, scroll to top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false); // Close the drawer when a menu item is clicked
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ bgcolor: "background.default" }}
    >
      <Toolbar>
        {/*Logo with onClick handler */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" aria-label="Home" onClick={() => scrollToSection(null)}>
            <img src={logo} alt="logo" style={{ height: "40px" }} />
          </Link>
        </Typography>
        {/* Hamburger Menu Icon for Mobile Navigation */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Component for Mobile Navigation */}
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {navItems.map((item, index) => (
                <ListItem key={index} onClick={() => scrollToSection(item.ref)}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Navigation Links for Larger Screens */}
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

// PropType validation for all refs passed to the component
Navigation.propTypes = {
  servicesRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  portfolioRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Navigation;
