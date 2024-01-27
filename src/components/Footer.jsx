import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  CardMedia,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import imageSrc from "../assets/images/V-Logo-white.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "background.default" }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
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
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ my: 2 }}>
              &copy; {currentYear} Aviad Kohn. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Link
                href="mailto:info@aviadkohn.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { color: "secondary.light" },
                }}
              >
                <EmailIcon />
              </Link>
              <Link
                href="https://github.com/xkolsha"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { color: "secondary.light" },
                }}
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aviadkohn"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { color: "secondary.light" },
                }}
              >
                <LinkedInIcon />
              </Link>
            </Stack>
            <Link
              href="#portfolio"
              color="inherit"
              sx={{ "&:hover": { color: "secondary.light" } }}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              color="inherit"
              sx={{ "&:hover": { color: "secondary.light" } }}
            >
              About
            </Link>
            <Link
              href="#contact"
              color="inherit"
              sx={{ "&:hover": { color: "secondary.light" } }}
            >
              Contact
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
