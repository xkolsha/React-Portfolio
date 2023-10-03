import React from "react";
import ServiceCard from "./ServiceCard";
import "../styles/Services.css";
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
    title: "Graphic Design",
    description:
      "Every business has a unique identity. I will work closely with you to create a visual identity that perfectly represents your brand. I design original logos, business cards, envelopes, catalogues, labels, brochures, posters, calendars, and more. From concept to completion, I will ensure that your design stands out and effectively showcases your brand. Don't settle for generic designs. Contact me today to create your business's unique and memorable visual identity.",
    animationData: animationData2,
  },
  {
    title: "Branding",
    description:
      "Investing in your business branding is how you outperform and outlast your competitors. The goal is to attract and retain loyal customers by delivering a product that always aligns with the brand's promises. Keep your competition from getting ahead - Contact me today and let me help you create a solid and consistent brand that will set you apart from the rest.",
    animationData: animationData3,
  },
  {
    title: "Video Editing",
    description:
      "Elevate your visual content with my professional video editing services. I'll collaborate with you to bring your film or corporate video ideas to life, offering services such as colour correction, sound design, motion graphics, and more. Contact me to deliver engaging, high-quality videos that will leave a lasting impression on your audience.",
    animationData: animationData4,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          animationData={service.animationData}
        />
      ))}
    </div>
  );
};

export default Services;
