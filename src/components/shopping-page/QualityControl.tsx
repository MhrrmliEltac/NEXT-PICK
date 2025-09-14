import { Box, Button, Typography } from "@mui/material";
import NumberFlow from "@number-flow/react";
import { ShoppingProductCardPropsType } from "./ShoppingProductCard";
import React from "react";

interface QualityControlPropsType
  extends Omit<ShoppingProductCardPropsType, "onRemove"> {}

const QualityControl: React.FC<QualityControlPropsType> = ({
  quantity,
  handleClick,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #272727",
        borderRadius: "8px",
        p: "8px",
        width: {
          xs: "68px",
          md: "96px",
        },
        height: {
          xs: "32px",
          md: "36px",
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        sx={{
          color: "#292D32",
          p: 0,
          m: 0,
          minWidth: 10,
          fontSize: "25px",
        }}
        onClick={() => handleClick("decrement")}
      >
        -
      </Button>
      <Typography component="span" variant="body2" sx={{ p: 0, m: 0 }}>
        <NumberFlow value={quantity} />
      </Typography>
      <Button
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        sx={{
          color: "#292D32",
          p: 0,
          m: 0,
          minWidth: 10,
          fontSize: "20px",
        }}
        onClick={() => handleClick("increment")}
      >
        +
      </Button>
    </Box>
  );
};

export default QualityControl;
