import { NEUTRAL_COLOR } from "@/constant";
import { formatPrice } from "@/helpers/formatPrice";
import { Box, Card, CardContent, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";

const BasketProductCard = () => {
  return (
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
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Product image */}
        <div className="w-[30%] max-[340px]:w-full mx-auto flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="https://bestel.az/storage/28762/conversions/media-libraryj2KJee-lg.jpg"
            alt="product_image"
            className="h-[80px] max-sm:w-full transition-all duration-300 object-contain "
          />
        </div>

        <div className="max-md:w-[250px] w-[60%] flex flex-col justify-between max-h-[120px]">
          <div className="flex flex-wrap justify-between items-center">
            <Tooltip title="HP Laptop with Intel Core i7">
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
                color={NEUTRAL_COLOR.neutral600}
              >
                HP Laptop with Intel Core i7
              </Typography>
            </Tooltip>
            <div className="flex gap-1">
              <Typography
                component="span"
                variant="caption"
                fontSize={14}
                fontWeight={600}
                color={
                  true ? NEUTRAL_COLOR.neutral400 : NEUTRAL_COLOR.neutral650
                }
                sx={{
                  textDecoration: true ? "line-through" : "none",
                }}
              >
                {formatPrice(1104)}
              </Typography>
              {true && (
                <Typography
                  component="span"
                  variant="caption"
                  fontSize={14}
                  color="#C33104"
                  fontWeight={600}
                >
                  {formatPrice(1104)}
                </Typography>
              )}
            </div>
          </div>

          <Typography
            variant="caption"
            fontWeight={500}
            fontSize={{
              xs: "12px",
              md: "14px",
            }}
            color="#717171"
          >
            x1
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="overline"
              color="#717171"
              fontSize={{
                xs: "10px",
                md: "12px",
              }}
              lineHeight={0}
              sx={{ m: 0, p: 0, textTransform: "none" }}
            >
              Gray
            </Typography>
            <Typography
              variant="overline"
              color="#717171"
              fontSize={{
                xs: "10px",
                md: "12px",
              }}
              lineHeight={0}
              sx={{ m: 0, p: 0, textTransform: "none" }}
            >
              Free shipping
            </Typography>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasketProductCard;
