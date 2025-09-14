import { NEUTRAL_COLOR } from "@/constant";
import { formatPrice } from "@/helpers/formatPrice";
import { Box, Typography } from "@mui/material";
import React from "react";

interface PriceDisplayProps {
  price: number;
  discountPrice: number;
  discount: boolean;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  discount,
  discountPrice,
  price,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
      }}
    >
      <Typography
        variant="overline"
        fontWeight={400}
        fontSize={{
          xs: "10px",
          md: "20px",
        }}
        color={NEUTRAL_COLOR.neutral400}
        sx={{
          textDecoration: discount ? "line-through" : "none",
        }}
      >
        {formatPrice(price)}
      </Typography>
      {discount && (
        <Typography
          variant="overline"
          fontWeight={400}
          fontSize={{
            xs: "10px",
            md: "20px",
          }}
          color="#C33104"
        >
          {formatPrice(discountPrice)}
        </Typography>
      )}
    </Box>
  );
};

export default PriceDisplay;
