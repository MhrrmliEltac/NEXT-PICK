import { FavoriteItem } from "@/types/types";
import { motion } from "framer-motion";
import { ShadButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { listItem } from "@/utils/animateVariants";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hook/hooks";
import {
  getFavoriteProducts,
  removeFavoriteProduct,
} from "@/redux-toolkit/slice/favoriteSlice";

const FavoriteProduct = ({ favorite }: { favorite: FavoriteItem }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRemoveFavorite = (productId: string) => {
    dispatch(removeFavoriteProduct(productId));
    dispatch(getFavoriteProducts());
  };

  return (
    <motion.div key={favorite._id} variants={listItem}>
      <Card
        sx={{
          border: "1px solid",
          borderColor: "#CBCBCB",
          borderRadius: "8px",
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          mb: "15px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          "&:hover": {
            transition: "all 0.3s ease-in-out",
            borderColor: "#1A4DE1",
          },
        }}
        component="div"
      >
        {favorite.product.discount && (
          <Badge className="absolute top-5 left-1 bg-[#FB5F2F] hover:bg-red-500 w-[44px] h-[22px] rounded-tr-[8px] rounded-br-[8px] rounded-tl-none rounded-bl-none">
            {favorite.product.discountPercent}%
          </Badge>
        )}

        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div className="w-[30%] max-[340px]:w-full mx-auto flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              src={favorite.product.image}
              alt="product_image"
              className="h-[80px] max-sm:w-full transition-all duration-300 object-contain "
            />
          </div>
          <div className="max-md:w-[250px] w-[60%] flex flex-col justify-between max-h-[120px]">
            <div className="flex flex-wrap justify-between items-center">
              <Tooltip title={favorite.product.productName}>
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: {
                      lg: '"200px"',
                    },
                    display: "inline-block",
                  }}
                >
                  {favorite.product.productName}
                </Typography>
              </Tooltip>
              <div className="flex gap-1">
                <Typography
                  component="span"
                  variant="caption"
                  fontSize={14}
                  fontWeight={600}
                  color={
                    favorite.product.discount
                      ? NEUTRAL_COLOR.neutral400
                      : NEUTRAL_COLOR.neutral650
                  }
                  sx={{
                    textDecoration: favorite.product.discount
                      ? "line-through"
                      : "none",
                  }}
                >
                  €{favorite.product.price}
                </Typography>
                {favorite.product.discount && (
                  <Typography
                    component="span"
                    variant="caption"
                    fontSize={14}
                    color="#C33104"
                    fontWeight={600}
                  >
                    €{favorite.product.discountPrice}
                  </Typography>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1">
                <FaStar size={12} />
                <Typography
                  variant="body2"
                  color={NEUTRAL_COLOR.neutral800}
                  fontSize={12}
                  lineHeight={0}
                  sx={{ m: 0, p: 0 }}
                >
                  {favorite.product.rating}
                </Typography>
                <Typography
                  variant="body2"
                  color={NEUTRAL_COLOR.neutral800}
                  fontSize={12}
                  lineHeight={0}
                  sx={{ m: 0, p: 0 }}
                >
                  ({favorite.product.comment && favorite.product.comment.length}
                  )
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <ShadButton
                  className="group cursor-pointer h-8 p-2 bg-[#1A4DE1] hover:bg-[#163dc2] text-white"
                  onClick={() =>
                    navigate(
                      `/product/${favorite.product.productName
                        .replace(/\s+/g, "-")
                        .toLowerCase()}?id=${favorite.product._id}`
                    )
                  }
                >
                  <span>View Product</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </ShadButton>
                <Tooltip title="Remove from wishlist">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFavorite(favorite.product._id);
                    }}
                    sx={{
                      border: "1px solid",
                      borderColor: "#CBCBCB",
                      "&:hover": {
                        borderColor: "#1A4DE1",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <MdDeleteOutline size={16} color="#FB3748" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FavoriteProduct;
