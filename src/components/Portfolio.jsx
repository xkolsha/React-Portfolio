import React from "react";
import CTAButton from "./CTAButton";
import ContentCard from "./ContentCard";
import "../styles/Portfolio.css";
import atlanticImage from "../assets/images/Atlantic.jpeg";
import fontasticImage from "../assets/images/Fontastic.jpeg";
import educationImage from "../assets/images/Education.jpg";
import gmsImage from "../assets/images/GMS.jpg";
import harmonyImage from "../assets/images/harmony.png";
import beaconImage from "../assets/images/beacon.jpg";

const Portfolio = () => {
  const projects = [
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
      description:
        "A promotional video showcasing the products of G.M.S. Technology Ltd.",
      image: gmsImage,
      deployedLink: "https://www.youtube.com/watch?v=i2nGfu6W9mY",
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

  return (
    <section id="portfolio" className="section-container">
      {projects.map((project, index) => (
        <ContentCard
          key={index}
          title={project.title}
          description={project.description}
          content={
            <>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-links">
                {[
                  {
                    label: "Deployed App",
                    link: project.deployedLink,
                    type: "btn-primary",
                  },
                  {
                    label: "GitHub Repo",
                    link: project.repoLink,
                    type: "btn-primary",
                  },
                ].map(
                  (button, idx) =>
                    button.link && (
                      <CTAButton
                        key={idx}
                        label={button.label}
                        action={() => window.open(button.link, "_blank")}
                        type={button.type}
                      />
                    )
                )}
              </div>
            </>
          }
        />
      ))}
    </section>
  );
};

export default Portfolio;
