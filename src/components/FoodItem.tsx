import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
//-----------------------------------------------------------------------
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
//-----------------------------------------------------------------------
import React, { useState } from "react";
import { getAvailableTime } from "../utils/formatTime";
import FoodQuantity from "./FoodQuantity";

const FoodItem: React.FC<FoodItem.IProps> = ({ category, row }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography fontWeight="bold" textTransform="capitalize">
            {category.name}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingTop: 0, paddingBottom: 0 }} colSpan={4}>
          <Collapse in={open} unmountOnExit>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "4%" }} />
                  <TableCell sx={{ width: "10%", fontWeight: "bold" }}>Item</TableCell>
                  <TableCell sx={{ width: "14%", fontWeight: "bold" }}>Available Time</TableCell>
                  <TableCell sx={{ width: "3%", fontWeight: "bold" }}>Rate</TableCell>
                  <TableCell sx={{ width: "3%", fontWeight: "bold" }}>Avail Qty</TableCell>
                  <TableCell sx={{ width: "5%", fontWeight: "bold" }}>Quantity</TableCell>
                  <TableCell sx={{ width: "6%", fontWeight: "bold" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.foods.map((food, col) => (
                  <TableRow key={food.id}>
                    <TableCell />
                    <TableCell>{food.name}</TableCell>
                    <TableCell>{getAvailableTime(food.start_time, food.end_time)}</TableCell>
                    <TableCell>{food.rate}</TableCell>
                    <TableCell>{food.quantity}</TableCell>
                    <TableCell>
                      <FoodQuantity
                        order_count={food.order_count || 0}
                        quantity={food.quantity}
                        row={row}
                        col={col}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ width: "40px" }}>
                        {(food.order_count || 0) * food.rate}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default FoodItem;
