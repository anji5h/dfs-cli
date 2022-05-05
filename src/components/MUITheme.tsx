import Container from "@mui/material/Container";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { MUICustomTheme } from "../utils/MUICustomTheme";

const MUITheme: ReactFCWithChildren = ({ children }) => {
  return (
    <ThemeProvider theme={MUICustomTheme()}>
      <Container maxWidth="xl" style={{ height: "100%" }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default MUITheme;
