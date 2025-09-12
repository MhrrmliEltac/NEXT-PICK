import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface ShoppingActionButtonsProps {
  onViewCart: () => void;
  onContinue: () => void;
}

const ActionButtons: React.FC<ShoppingActionButtonsProps> = ({
  onViewCart,
  onContinue,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Button
        disableTouchRipple
        variant="outlined"
        sx={{ px: "16px", py: "8px", borderRadius: "8px" }}
        onClick={onViewCart}
      >
        <Typography
          component="span"
          variant="button"
          fontWeight={400}
          fontSize={{
            xs: "10px",
            md: "16px",
          }}
          color="#1A4DE1"
          textTransform="none"
        >
          View shopping cart
        </Typography>
      </Button>
      <Button
        disableTouchRipple
        variant="contained"
        sx={{
          px: "16px",
          py: "8px",
          borderRadius: "8px",
          background: "#1A4DE1",
        }}
        onClick={onContinue}
      >
        <Typography
          component="span"
          variant="button"
          fontWeight={400}
          fontSize={{
            xs: "10px",
            md: "16px",
          }}
          color="white"
          textTransform="none"
        >
          Continue
        </Typography>
      </Button>
    </Box>
  );
};

export default ActionButtons;
