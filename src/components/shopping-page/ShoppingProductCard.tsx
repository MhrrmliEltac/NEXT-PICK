import { Box, Card, CardContent } from "@mui/material";
import React, { memo } from "react";
import { Operation } from "@/types/types";
import ProductInfo from "./ProductInfo";
import PriceDisplay from "./PriceDisplay";
import DeliveryInfo from "./DeliveryInfo";
import QualityControl from "./QualityControl";

export interface ShoppingProductCardPropsType {
  quantity: number;
  handleClick: (operation: Operation) => void;
}

const ShoppingProductCard: React.FC<ShoppingProductCardPropsType> = ({
  quantity,
  handleClick,
}) => {
  return (
    <Card className="gap-4 mb-5 !border border-[#E5E5E5] !shadow-sm transition-all duration-300">
      <CardContent className="max-w-[765px]">
        <Box
          sx={{
            display: "flex",
            gap: {
              xs: "24px",
              md: "40px",
            },
            justifyContent: "space-evenly",
            flexWrap: {
              xs: "wrap",
              sm: "nowrap",
            },
          }}
        >
          <img
            src="/9cca1d209dc53dbb7e63ba1b557818275169ed87.png"
            alt="product_img"
            className="w-[350px] h-[200px] max-sm:w-full max-md:h-full transition-all duration-300"
          />

          {/* Product Detail */}
          <Box sx={{ transition: "0.3s all ease" }}>
            {/* Product Info */}
            <ProductInfo />

            {/* Price Display */}
            <PriceDisplay />

            {/* Delivery Info */}
            <DeliveryInfo />

            {/* Quality control */}
            <QualityControl quantity={quantity} handleClick={handleClick} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default memo(ShoppingProductCard);
