import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { Badge } from "@/components/ui/badge";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { ProductDataType } from "@/types/types";
import { path } from "@/utils/paths";
import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useMemo } from "react";

const Favorite = () => {
  const navigate = useNavigate();
  const favoriteState = useAppSelector((state: RootState) => state.favorite);

  const total = useMemo(() => {
    return favoriteState.favoriteProduct.reduce(
      (acc: number, product: ProductDataType) => acc + product.price,
      0
    );
  }, [favoriteState]);

  const discountTotal = useMemo(() => {
    return favoriteState.favoriteProduct.reduce(
      (acc: number, product: ProductDataType) => acc + product.discountPrice,
      0
    );
  }, [favoriteState]);

  return (
    <section className="w-full mx-auto">
      <div className="relative min-h-[100px]">
        <CustomBreadcrumb
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Wishlist",
              href: path.urlPaths.wishlist,
            },
          ]}
        />
      </div>

      {/* Favorite products */}
      <div className="max-lg:w-[90%] w-[80%] mx-auto">
        <Typography
          variant="h3"
          fontSize={32}
          color={NEUTRAL_COLOR.neutral800}
          fontWeight={600}
          sx={{ mb: "32px" }}
        >
          Favourite product
        </Typography>

        {favoriteState.favoriteProduct.length > 0 ? (
          <Grid container spacing={2} sx={{ mb: "80px" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              {favoriteState.favoriteProduct &&
                favoriteState.favoriteProduct.length > 0 &&
                favoriteState.favoriteProduct.map(
                  (product: ProductDataType) => (
                    <Card
                      key={product._id}
                      sx={{
                        border: "1px solid",
                        borderColor: "#CBCBCB",
                        borderRadius: "8px",
                        boxShadow: "none",
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                        mb: "15px",
                        "&:hover": {
                          transition: "all 0.3s ease-in-out",
                          borderColor: "#1A4DE1",
                        },
                      }}
                      className="flex justify-center relative"
                      component="div"
                      onClick={() =>
                        navigate(
                          `/product/${product.productName
                            .replace(/\s+/g, "-")
                            .toLowerCase()}?id=${product._id}`
                        )
                      }
                    >
                      {product.discount && (
                        <Badge className="absolute top-5 left-1 bg-[#FB5F2F] hover:bg-red-500 w-[44px] h-[22px] rounded-tr-[8px] rounded-br-[8px] rounded-tl-none rounded-bl-none">
                          {product.discountPercent}%
                        </Badge>
                      )}

                      <CardContent
                        sx={{
                          width: "100%",
                          display: "flex",
                          gap: "20px",
                        }}
                      >
                        <div className="w-[30%] mx-auto flex justify-center items-center">
                          <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src={product.image}
                            alt="product_image"
                            className="h-[80px] max-sm:w-full transition-all duration-300 object-contain"
                          />
                        </div>
                        <div className="max-md:w-[250px] w-[60%] flex flex-col justify-between max-h-[120px]">
                          <div className="flex justify-between items-center">
                            <Tooltip title={product.productName}>
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
                                {product.productName}
                              </Typography>
                            </Tooltip>
                            <div className="flex gap-1">
                              <Typography
                                component="span"
                                variant="caption"
                                fontSize={14}
                                fontWeight={600}
                                color={
                                  product.discount
                                    ? NEUTRAL_COLOR.neutral400
                                    : NEUTRAL_COLOR.neutral650
                                }
                                sx={{
                                  textDecoration: product.discount
                                    ? "line-through"
                                    : "none",
                                }}
                              >
                                €{product.price}
                              </Typography>
                              {product.discount && (
                                <Typography
                                  component="span"
                                  variant="caption"
                                  fontSize={14}
                                  color="#C33104"
                                  fontWeight={600}
                                >
                                  €{product.discountPrice}
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
                                {product.rating}
                              </Typography>
                              <Typography
                                variant="body2"
                                color={NEUTRAL_COLOR.neutral800}
                                fontSize={12}
                                lineHeight={0}
                                sx={{ m: 0, p: 0 }}
                              >
                                ({product.comment && product.comment.length})
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  border: "1px solid",
                  borderColor: "#CBCBCB",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    borderColor: "#1A4DE1",
                  },
                }}
                component="div"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mb: 2, color: "#1A1A1A" }}
                  >
                    🛒 Wishlist Summary
                  </Typography>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">
                      Total Products:
                    </span>
                    <span className="font-semibold text-sm">
                      {favoriteState.favoriteProduct.length}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">
                      Original Price:
                    </span>
                    <span className="font-semibold text-sm text-gray-500 line-through">
                      €{total}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">
                      Discounted Price:
                    </span>
                    <span className="font-semibold text-sm text-red-500">
                      €{discountTotal}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm">You Save:</span>
                    <span className="font-semibold text-sm text-green-600">
                      €{(total - discountTotal).toFixed(2)}
                    </span>
                  </div>

                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => navigate("/shop")}
                      className="bg-[#1A4DE1] hover:bg-[#163dc2] text-white py-2 px-4 rounded-md text-sm transition duration-300"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <div className="mb-[20px]">
            <Typography
              component="span"
              fontSize={24}
              color={NEUTRAL_COLOR.neutral650}
            >
              Don't have favourite product
            </Typography>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorite;
