import { Box, Card, CardContent } from "@mui/material";
import React, { memo } from "react";
import { Operation, ProductDataType } from "@/types/types";
import ProductInfo from "./ProductInfo";
import PriceDisplay from "./PriceDisplay";
import DeliveryInfo from "./DeliveryInfo";
import QualityControl from "./QualityControl";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { MdDeleteOutline } from "react-icons/md";
import { NEUTRAL_COLOR } from "@/constant";
import { motion } from "framer-motion";

export interface ShoppingProductCardPropsType {
  quantity: number;
  handleClick: (operation: Operation) => void;
  onRemove: (productId: ProductDataType["_id"]) => void;
}

interface Basket {
  product: ProductDataType;
  quantity: number;
}

const ShoppingProductCard: React.FC<ShoppingProductCardPropsType> = ({
  quantity,
  handleClick,
  onRemove,
}) => {
  const basketState = useAppSelector((state: RootState) => state.basket);

  return (
    <>
      {basketState.basketProduct.basket &&
        basketState.basketProduct.basket.items.length > 0 &&
        basketState.basketProduct.basket.items.map(
          (basket: Basket, key: number) => {
            const product = basket.product;
            return (
              <Card
                key={key}
                className="gap-4 mb-5 !border border-[#E5E5E5] !shadow-sm transition-all duration-300"
              >
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
                      src={product.image}
                      alt="product_img"
                      className="w-[350px] h-[200px] max-sm:w-full max-md:h-full transition-all duration-300"
                      loading="lazy"
                    />

                    {/* Product Detail */}
                    <Box
                      sx={{ transition: "0.3s all ease", position: "relative" }}
                    >
                      {/* Product Info */}
                      <ProductInfo
                        productName={product.productName}
                        productDescription={product.productDescription}
                      />

                      {/* Price Display */}
                      <PriceDisplay
                        discount={product.discount}
                        discountPrice={product.discountPrice}
                        price={product.price}
                      />

                      {/* Delivery Info */}
                      <DeliveryInfo />

                      {/* Quality control */}
                      <QualityControl
                        quantity={quantity}
                        handleClick={handleClick}
                      />

                      {/* Delete button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-0 right-0 cursor-pointer"
                        onClick={() => onRemove(product._id)}
                      >
                        <MdDeleteOutline
                          size={25}
                          color={NEUTRAL_COLOR.neutral800}
                        />
                      </motion.button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          }
        )}
    </>
  );
};

export default memo(ShoppingProductCard);
