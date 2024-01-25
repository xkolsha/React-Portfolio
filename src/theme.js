// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    error: {
      main: "#FF3562",
      contrastText: "#fbf8ff",
    },
    background: {
      default: "#fbf8ff",
      paper: "#fbf8ff",
    },
    divider: "rgba(34,31,51,0.16)",
    text: {
      secondary: "#2d294a",
      primary: "#221F33",
    },
  },
  typography: {
    fontSize: 16,
    htmlFontSize: 18,
    fontFamily: "Open Sans, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
