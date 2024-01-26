import { Typography, Box, CardMedia, Container, Grid } from "@mui/material";
import imageSrc from "../assets/images/about-image.jpg";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                color: (theme) => theme.palette.primary.main,
                pb: 4,
                textAlign: { fontWeight: "bold", xs: "center", md: "left" },
              }}
            >
              My Journey
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              After careers in the security and defence industries, I followed
              my passion for IT and creative services. I&apos;ve helped
              businesses reach their goals through IT support, management, and
              design projects. I&apos;m focused on overseeing projects from
              concept through final delivery. Throughout my career, I have
              contributed to positive business results through effective
              organization, prioritization, and execution of critical projects.
              My experience as a defence veteran gave me a broad vision of
              others&apos; needs while respecting and valuing cultural
              diversity.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              maxHeight: { md: "500px" },
            }}
          >
            <CardMedia
              component="img"
              image={imageSrc}
              alt="silhouette of a girl gazing towards the horizon"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
