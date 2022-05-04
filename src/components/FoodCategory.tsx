import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { FoodContext } from "../providers/FoodProvider";
import { httpGet } from "../utils/httpRequest";
import Loader from "./Loader";
import FoodItem from "./FoodItem";
import { filterOrder, getTotalAmount } from "../utils/order";

const FoodCategory: React.FC = () => {
  const {
    state: { loading, error, categories },
    setFood,
    setFoodError,
    resetOrder,
  } = useContext(FoodContext);

  const getFood = async () => {
    try {
      const res = await httpGet("/admin/food/fetch", true);
      setFood(res.data.foods);
    } catch (err: any) {
      setFoodError(err.response?.data?.message || err.message);
    }
  };

  const orderFood = () => {
    console.log(filterOrder(categories));
    resetOrder();
  };

  useEffect(() => {
    getFood();
  }, []);
  return (
    <>
      {loading ? (
        <Loader text="Loading . . ." />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <TableContainer sx={{ width: "850px" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: "5px" }} />
                <TableCell sx={{ width: "100%" }}>
                  <Typography variant="h6" align="center">
                    Today's Menu
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, row) => (
                <FoodItem key={category.id} row={row} category={category} />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                      <Typography fontWeight="bold">Total: {getTotalAmount(categories)}</Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" onClick={orderFood}>
                        Order
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default FoodCategory;
