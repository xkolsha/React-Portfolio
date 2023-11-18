import { Box, Typography, Link, Grid, CardMedia } from "@mui/material";
import SocialLinks from "./SocialLinks";
import imageSrc from "../assets/images/V-Logo-white.png";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", py: 4, px: 2 }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Logo"
              sx={{ width: 100, mb: 2 }}
            />
            <Typography variant="body2">
              Full Stack Developer. <br />
              From Concept to Completion - Let me Help You Turn Your Vision into
              a Reality!
            </Typography>
            <SocialLinks />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Link href="#portfolio" color="inherit" sx={{ mb: 1 }}>
              Portfolio
            </Link>
            <Link href="#about" color="inherit" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="#contact" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
