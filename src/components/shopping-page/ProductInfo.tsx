import { NEUTRAL_COLOR } from "@/constant";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ProductInfoProps {
  productName: string;
  productDescription: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  productName,
  productDescription,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        gap: "5px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="caption"
          fontWeight={500}
          color={NEUTRAL_COLOR.neutral600}
          fontSize={{
            xs: 12,
            md: 16,
          }}
        >
          {productName}
        </Typography>
        <Typography
          variant="overline"
          fontWeight={400}
          color={NEUTRAL_COLOR.neutral600}
          fontSize={{
            xs: 10,
            md: 14,
          }}
        >
          {productDescription}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfo;
