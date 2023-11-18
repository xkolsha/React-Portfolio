import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#221f33", // primary-dark
      contrastText: "#fbf8ff", // white
    },
    secondary: {
      main: "#8f83ed", // secondary-highlight
    },
    background: {
      default: "#fdfffc", // white-accent
    },
    text: {
      primary: "#2d294a", // dark-accent
      secondary: "#534c8a", // grey
    },
  },
  typography: {
    fontFamily: "'Aileron', sans-serif",
    h1: {
      fontSize: "4.5em",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5em",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2em",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.125em",
      fontWeight: 300,
    },
    button: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
