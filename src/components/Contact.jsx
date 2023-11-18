import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
import SocialLinks from "./SocialLinks"; // Assuming this component is also refactored with Material-UI

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const downloadResume = () => {
    const resumeURL =
      "https://1drv.ms/b/s!As0hKguCANy1u4xeQtHeKvbkccsPTw?e=4Dscen";
    window.open(resumeURL, "_blank");
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Uncomment and refactor this section if you want to use the contact form */}
      {/* <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Get in touch</Typography>
        <Typography>Contact Me. I'll be happy to help!</Typography>
        <Box component="form">
          <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            sx={{ mb: 2 }}
          />
          <TextField label="Phone" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Subject" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleForm}>
            Submit
          </Button>
        </Box>
      </Box> */}
      <Box>
        <Typography variant="h5">Reach me directly!</Typography>
        <Typography sx={{ mb: 2 }}>
          Email:{" "}
          <Link href="mailto:info@aviadkohn.com">info@aviadkohn.com</Link>
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <SocialLinks />
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={downloadResume}>
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
