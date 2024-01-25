import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Slide,
  useScrollTrigger,
  Drawer,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/images/V-Logo-white.png";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};

const Navigation = ({ servicesRef, aboutRef, portfolioRef, contactRef }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: "Home", path: "/", ref: null },
    { label: "Services", path: "/services", ref: servicesRef },
    { label: "About", path: "/about", ref: aboutRef },
    { label: "Portfolio", path: "/portfolio", ref: portfolioRef },
    { label: "Contact Me", path: "/contact", ref: contactRef },
  ];

  // Social media links
  const socialLinks = [
    { icon: <GitHubIcon />, url: "https://github.com/xkolsha" },
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/aviadkohn/" },
  ];

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (ref === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {" "}
              <Link
                to="/"
                aria-label="Home"
                onClick={() => scrollToSection(null)}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "background.paper",
                      "&:hover": { color: "secondary.light" },
                    }}
                    onClick={() => scrollToSection(item.ref)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>{" "}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  marginLeft: "auto",
                }}
              >
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ "&:hover": { color: "secondary.light" } }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>{" "}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box pt={8} sx={{ width: 250 }} role="presentation">
          <List>
            {navItems.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  handleDrawerToggle();
                  scrollToSection(item.ref);
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            {/* Social Links in Drawer */}
            {socialLinks.map((link, index) => (
              <ListItemButton
                key={index}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

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
