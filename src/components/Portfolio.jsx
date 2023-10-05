import React from "react";
import ContentCard from "./ContentCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Branding for Education Transform",
      description: "A complete branding solution for educational institutions.",
      image: "path/to/education-transform-image.jpg",
      deployedLink: "https://education-transform.com",
      repoLink: "https://github.com/yourusername/education-transform",
    },
    {
      title: "Promotional video for G.M.S. Technology Ltd",
      description:
        "A promotional video showcasing the products of G.M.S. Technology Ltd.",
      image: "path/to/gms-technology-image.jpg",
      deployedLink: "https://gms-promo-video.com",
      repoLink: "https://github.com/yourusername/gms-promo-video",
    },
    {
      title: "Case Study for Beacon App",
      description: "An in-depth case study for the Beacon App project.",
      image: "path/to/beacon-app-image.jpg",
      deployedLink: "https://beacon-app-casestudy.com",
      repoLink: "https://github.com/yourusername/beacon-app",
    },
    {
      title: "Branding for Harmony Construction Consultant",
      description:
        "Branding solutions tailored for Harmony Construction Consultant.",
      image: "path/to/harmony-construction-image.jpg",
      deployedLink: "https://harmony-construction.com",
      repoLink: "https://github.com/yourusername/harmony-construction",
    },
    {
      title: "Fontastic Fusion: Typography Meets Color",
      description: "A project where typography and color schemes are explored.",
      image: "path/to/fontastic-fusion-image.jpg",
      deployedLink: "https://fontastic-fusion.com",
      repoLink: "https://github.com/yourusername/fontastic-fusion",
    },
    {
      title: "Atlantic Glamping: Interactive Full-Stack Project",
      description:
        "A full-stack web application for booking glamping experiences.",
      image: "path/to/atlantic-glamping-image.jpg",
      deployedLink: "https://atlantic-glamping.com",
      repoLink: "https://github.com/yourusername/atlantic-glamping",
    },
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <ContentCard
          key={index}
          title={project.title}
          description={project.description}
          content={
            <>
              <img src={project.image} alt={project.title} />
              <div>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App
                </a>
              </div>
              <div>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </>
          }
        />
      ))}
    </section>
  );
};

export default Portfolio;
