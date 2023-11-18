import React from "react";
import { Link, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: 2,
      }}
    >
      <Link
        href="https://github.com/xkolsha"
        target="_blank"
        rel="noreferrer"
        color="inherit"
        sx={{ display: "flex", alignItems: "center", mb: 1 }}
      >
        <GitHubIcon sx={{ mr: 1 }} /> GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/aviadkohn/"
        target="_blank"
        rel="noreferrer"
        color="inherit"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
      </Link>
    </Box>
  );
};

export default SocialLinks;
