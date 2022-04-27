import { createTheme } from "@mui/material";

export const MUICustomTheme = () =>
  createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: {
        fontSize: "64px",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: "40px",
        letterSpacing: "-2%",
      },
      h3: {
        fontSize: "24px",
        letterSpacing: "-2%",
      },
      subtitle1: {
        fontSize: "24px",
      },
      body1: {
        fontSize: "16px",
        lineHeight: "140%",
      },
      overline: {
        fontSize: "10px",
        fontWeight: "bold",
        letterSpacing: "3%",
      },
      button: {
        fontSize: "13px",
        fontWeight: "bold",
        letterSpacing: "3%",
      },
    },
  });
