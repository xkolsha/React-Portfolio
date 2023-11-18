import {
  Card,
  CardContent,
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
import beaconImage from "../assets/images/Beacon.jpg";

const projects = [
  {
    title: "FACT-V-Lounge: Interactive MERN Stack Application",
    description:
      "MERN stack application for booking events and order food and drinks using Stripe.",
    image: factvImage,
    deployedLink:
      "https://fact-v-tech-lounge-client-f58d96d137e5.herokuapp.com/",
    repoLink: "https://github.com/xkolsha/fact-v-tech-lounge",
  },
  {
    title: "Atlantic Glamping: Interactive Full-Stack Project",
    description:
      "A full-stack web application for booking glamping experiences.",
    image: atlanticImage,
    deployedLink: "https://atlantic-glamping-6972d1dfb7e3.herokuapp.com/",
    repoLink: "https://github.com/xkolsha/Atlantic-Glamping",
  },
  {
    title: "Fontastic Fusion: Typography Meets Color",
    description: "A project where typography and color schemes are explored.",
    image: fontasticImage,
    deployedLink:
      "https://xkolsha.github.io/Project-1-Interactive-Front-End-Application/index.html",
    repoLink:
      "https://github.com/xkolsha/Project-1-Interactive-Front-End-Application",
  },
  {
    title: "Branding for Education Transform",
    description: "A complete branding solution for educational institutions.",
    image: educationImage,
    deployedLink: "https://www.education-transform.com/",
  },
  {
    title: "Promotional video for G.M.S. Technology Ltd",
    description: "Professional video editing for promotional purposes.",
    image: gmsImage,
    videoLink: "https://www.youtube.com/watch?v=i2nGfu6W9mY",
  },
  {
    title: "Branding for Harmony Construction Consultant",
    description:
      "Branding solutions tailored for Harmony Construction Consultant.",
    image: harmonyImage,
    deployedLink:
      "https://uploads-ssl.webflow.com/62a8e0664d1b8a8f8fc19148/62b53b1e6971834c30ad5929_Harmony%20Brand%20Book%202.pdf",
  },
  {
    title: "Case Study for Beacon App",
    description: "An in-depth case study for the Beacon App project.",
    image: beaconImage,
    deployedLink: "https://beacon-app-casestudy.com",
    repoLink: "https://github.com/yourusername/beacon-app",
  },
];

const Portfolio = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
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
                      color="primary"
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
                      sx={{ ml: 1 }}
                    >
                      GitHub Repo
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
