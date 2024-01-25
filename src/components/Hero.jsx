import PropTypes from "prop-types";
import { Button, Typography, Box, Grid, Container } from "@mui/material";
import heroImg from "../assets/images/Linkedin Profile Image1.png";
import { useTheme } from "@mui/material/styles";
// import WaveBackground from "../assets/images/Background.webp";

const Hero = ({ portfolioRef, contactRef }) => {
  const theme = useTheme();
  // Function for smooth scrolling
  const handleScrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.main,
        position: "relative",
        // backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        py: { xs: 4, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid
          container
          spacing={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "4rem", sm: "5rem", md: "7rem" }, // font sizes for different breakpoints
              }}
            >
              {" "}
              Full Stack Developer
            </Typography>
            <Typography variant="h4" gutterBottom>
              From Concept to Completion - Let me Help You Turn Your Vision into
              a Reality!
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 3 }}
                onClick={() => handleScrollToRef(contactRef)}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleScrollToRef(portfolioRef)}
              >
                Portfolio
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={heroImg}
              alt="Profile of Full Stack Developer"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
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
