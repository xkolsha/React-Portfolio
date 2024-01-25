import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
} from "@mui/material";
import Lottie from "lottie-react";
import animationData1 from "../assets/animations/Website-Design.json";
import animationData2 from "../assets/animations/Graphic-Design.json";
import animationData3 from "../assets/animations/Branding.json";
import animationData4 from "../assets/animations/Video.json";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Web Design & Development is the perfect way to give your business the digital presence it deserves. You can expect personalized and customized designs and development solutions that cater to your needs. Get an edge over your competitors with my innovative and creative web design and development approaches. Let me help you make a lasting impression online with a fantastic website!",
    animationData: animationData1,
  },
  {
    title: "Graphic Design & Visual Identity",
    description:
      "Every business has a unique identity. I will work closely with you to create a visual identity that perfectly represents your brand. I design original logos, business cards, envelopes, catalogues, labels, brochures, posters, calendars, and more. From concept to completion, I will ensure that your design stands out and effectively showcases your brand. Don't settle for generic designs. Contact me today to create your business's unique and memorable visual identity.",
    animationData: animationData2,
  },
  {
    title: "Branding & Strategy",
    description:
      "Investing in your business branding is how you outperform and outlast your competitors. The goal is to attract and retain loyal customers by delivering a product that always aligns with the brand's promises. Keep your competition from getting ahead - Contact me today and let me help you create a solid and consistent brand that will set you apart from the rest.",
    animationData: animationData3,
  },
  {
    title: "Video Editing & Visual Storytelling",
    description:
      "Elevate your visual content with my professional video editing services. I'll collaborate with you to bring your film or corporate video ideas to life, offering services such as colour correction, sound design, motion graphics, and more. Contact me to deliver engaging, high-quality videos that will leave a lasting impression on your audience.",
    animationData: animationData4,
  },
];

const lottieStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  width: "auto",
  minHeight: "100%",
  minWidth: "100%",
};

const Services = () => {
  const theme = useTheme(); // Get the theme
  const cardBorderRadius = theme.shape.borderRadius; // Get the border radius from the theme

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ flexGrow: 1, padding: 8 }}>
        <Grid container spacing={8}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={6} key={service.title}>
              <Card
                raised
                sx={{ height: "100%", borderRadius: cardBorderRadius }}
              >
                {" "}
                {/* Apply the border radius */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      marginTop: 2,
                      height: "30vh",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Lottie
                      animationData={service.animationData}
                      style={lottieStyle}
                    />
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

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      animationData: PropTypes.object.isRequired,
    })
  ),
};

export default Services;
