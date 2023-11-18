import PropTypes from "prop-types";
import { Button, Typography, Box, Grid, Container } from "@mui/material";
import heroImg from "../assets/images/Linkedin Profile Image1.png";

const Hero = ({ portfolioRef, contactRef }) => {
  const handleScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleScrollToRef(portfolioRef)}
            >
              Portfolio
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleScrollToRef(contactRef)}
            >
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

Hero.propTypes = {
  portfolioRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Hero;
