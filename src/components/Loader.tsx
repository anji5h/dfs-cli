import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Loader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <CircularProgress size="40px" />
      <Typography variant="body1" align="center" style={{ marginTop: "15px" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
