import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useContext } from "react";
import { FoodContext } from "../providers/FoodProvider";

const FoodQuantity: React.FC<FoodQty.IProps> = ({ order_count, quantity, row, col }) => {
  const { increaseOrder, decreaseOrder } = useContext(FoodContext);
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        color="error"
        disabled={order_count <= 0}
        onClick={() => decreaseOrder(row, col)}
        sx={{ borderRight: 0 }}
      >
        -
      </Button>
      <Typography className="fd-qty">{order_count}</Typography>
      <Button color="success" disabled={quantity <= 0} onClick={() => increaseOrder(row, col)}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default FoodQuantity;
