import Grid from "@mui/material/Grid";
import FoodCategory from "../components/FoodCategory";
import FoodProvider from "../providers/FoodProvider";

const HomePage: React.FC = () => {
  return (
    <FoodProvider>
      <Grid container height="100%">
        <Grid item flexGrow={1}>
          <FoodCategory />
        </Grid>
        <Grid item flexGrow={1}></Grid>
      </Grid>
    </FoodProvider>
  );
};

export default HomePage;
