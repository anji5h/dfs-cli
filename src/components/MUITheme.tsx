import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { MUICustomTheme } from "../utils/MUICustomTheme";

const MUITheme: ReactFCWithChildren = ({ children }) => {
  return (
    <ThemeProvider theme={MUICustomTheme()}>
      <CssBaseline />
      <Container maxWidth="xl" style={{ height: "100%" }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default MUITheme;
