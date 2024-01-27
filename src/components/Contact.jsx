import { Box, Typography, Link, Container, Grid, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoSrc from "../assets/images/3DLogo.png";

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
          >
            Let&apos;s Connect
          </Typography>
          <Stack direction="column" spacing={2}>
            <Link
              href="mailto:info@aviadkohn.com"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "underline",
                  color: "secondary.light",
                },
              }}
            >
              <EmailIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              <Typography variant="body1" component="span">
                info@aviadkohn.com
              </Typography>
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
                "&:hover": {
                  textDecoration: "underline",
                  color: "secondary.light",
                },
              }}
            >
              <GitHubIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              <Typography variant="body1" component="span">
                github.com/xkolsha
              </Typography>
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
                "&:hover": {
                  textDecoration: "underline",
                  color: "secondary.light",
                },
              }}
            >
              <LinkedInIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              <Typography variant="body1" component="span">
                linkedin.com/in/aviadkohn
              </Typography>
            </Link>{" "}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt="3D Logo"
            sx={{ maxWidth: { xs: "80%", md: "50%" }, height: "auto" }} // Adjusted for responsiveness
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
