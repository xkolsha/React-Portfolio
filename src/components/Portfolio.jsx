import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  Box,
  Button,
  CardMedia,
} from "@mui/material";

import factvImage from "../assets/images/factv.png";
import atlanticImage from "../assets/images/Atlantic.jpeg";
import fontasticImage from "../assets/images/Fontastic.jpeg";
import educationImage from "../assets/images/Education.jpg";
import gmsImage from "../assets/images/GMS.jpg";
import harmonyImage from "../assets/images/Harmony.png";
import guidesImage from "../assets/images/GuidesConnected.png";

const projects = [
  {
    title: "GuidesConnected: A Dynamic Educational Platform",
    description:
      "GuidesConnected is a dynamic web application designed to connect educational experts with learners and professionals globally. This platform facilitates knowledge sharing and professional development in an accessible online environment.",
    imageSrc: guidesImage,
    deployedLink: "https://guidesconnected.com/",
    repoLink: "https://github.com/xkolsha/Guides-Connected",
  },
  {
    title: "FACT-V-Lounge: Interactive MERN Stack Application",
    description:
      "MERN stack application for booking events and ordering food and drinks using Stripe.",
    imageSrc: factvImage,
    deployedLink: "https://main--fact-v.netlify.app/",
    repoLink: "https://github.com/xkolsha/fact-v-tech-lounge",
  },
  {
    title: "Atlantic Glamping: Interactive Full-Stack Project",
    description:
      "A full-stack web application for booking glamping experiences.",
    imageSrc: atlanticImage,
    deployedLink: "https://atlantic-glamping-1-32ab0f56f377.herokuapp.com/",
    repoLink: "https://github.com/xkolsha/Atlantic-Glamping",
  },
  {
    title: "Fontastic Fusion: Typography Meets Color",
    description: "A project where typography and color schemes are explored.",
    imageSrc: fontasticImage,
    deployedLink:
      "https://xkolsha.github.io/Project-1-Interactive-Front-End-Application/index.html",
    repoLink:
      "https://github.com/xkolsha/Project-1-Interactive-Front-End-Application",
  },
  {
    title: "Branding for Education Transform",
    description: "A complete branding solution for educational institutions.",
    imageSrc: educationImage,
    deployedLink: "https://www.education-transform.com/",
  },
  {
    title: "Promotional video for G.M.S. Technology Ltd",
    description: "Professional video editing for promotional purposes.",
    imageSrc: gmsImage,
    videoLink: "https://www.youtube.com/watch?v=i2nGfu6W9mY",
  },
  {
    title: "Branding for Harmony Construction Consultant",
    description:
      "Branding solutions tailored for Harmony Construction Consultant.",
    imageSrc: harmonyImage,
    deployedLink:
      "https://uploads-ssl.webflow.com/62a8e0664d1b8a8f8fc19148/62b53b1e6971834c30ad5929_Harmony%20Brand%20Book%202.pdf",
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: (theme) => theme.palette.primary.main,
            pb: 4,
          }}
        >
          Portfolio
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                raised
                sx={{
                  height: "100%",
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover" }}
                  image={project.imageSrc}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ marginTop: 2 }}>
                    {project.deployedLink && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          window.open(project.deployedLink, "_blank")
                        }
                      >
                        Deployed App
                      </Button>
                    )}
                    {project.repoLink && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(project.repoLink, "_blank")}
                        sx={{ ml: 3 }}
                      >
                        GitHub Repo
                      </Button>
                    )}
                    {project.videoLink && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => window.open(project.videoLink, "_blank")}
                        sx={{ ml: 1 }}
                      >
                        Watch Video
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
