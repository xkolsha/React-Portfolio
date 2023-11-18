import React from "react";
import { Button, Typography, Box, Grid, Container } from "@mui/material";
import heroImg from "../assets/images/Linkedin Profile Image1.png";

const Hero = ({ portfolioRef, contactRef }) => {
  const goToPortfolio = () => {
    console.log("Go to Portfolio clicked", portfolioRef); // Debugging line
    if (portfolioRef && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactMe = () => {
    console.log("Contact Me clicked", contactRef); // Debugging line
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    { label: "Portfolio", action: goToPortfolio, type: "btn-primary" },
    { label: "Contact Me", action: contactMe, type: "btn-primary" },
  ];

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 8 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Full Stack Developer
          </Typography>
          <Typography variant="h5" gutterBottom>
            From Concept to Completion - Let me Help You Turn Your Vision into a
            Reality!
          </Typography>
          <Box sx={{ "& > button": { m: 1 } }}>
            <Button variant="contained" color="primary" onClick={goToPortfolio}>
              Portfolio
            </Button>
            <Button variant="contained" color="primary" onClick={contactMe}>
              Contact Me
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={heroImg}
            alt="Hero"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
