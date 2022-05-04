import { Button, ButtonGroup, Typography } from "@mui/material";
import { useContext, useState } from "react";
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
      <Button disabled={order_count >= quantity} onClick={() => increaseOrder(row, col)}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default FoodQuantity;
