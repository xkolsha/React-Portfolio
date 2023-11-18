import { createTheme } from "@mui/material/styles";

// Updated theme options
export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#221f33",
      contrastText: "#fbf8ff",
    },
    secondary: {
      main: "#8f83ed",
      contrastText: "#fbf8ff",
    },
    divider: "rgba(34,31,51,0.16)",
    text: {
      secondary: "#2d294a",
      primary: "#221F33",
    },
    error: {
      main: "#FF3562",
      contrastText: "#fbf8ff",
    },
    background: {
      default: "#fbf8ff",
      paper: "#fbf8ff",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Noto Sans Display", "Helvetica", "Arial", sans-serif',
  },
};

// Create a theme instance using the updated themeOptions
const theme = createTheme(themeOptions);

export default theme;
