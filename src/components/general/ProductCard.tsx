import { NEUTRAL_COLOR } from "@/constant/colors";
import { Card, CardContent, Tooltip, Typography } from "@mui/material";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ProductDataType } from "@/types/types";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ data }: { data: ProductDataType }) => {
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "#CBCBCB",
        borderRadius: "8px",
        boxShadow: "none",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transition: "all 0.3s ease-in-out",
          borderColor: "#1A4DE1",
        },
      }}
      className="flex justify-center relative"
    >
      {data.discount && (
        <Badge className="absolute top-5 left-1 bg-[#FB5F2F] hover:bg-red-500 w-[44px] h-[22px] rounded-tr-[8px] rounded-br-[8px] rounded-tl-none rounded-bl-none">
          {data.discountPercent}%
        </Badge>
      )}
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "row",
            sm: "column",
          },
          gap: "20px",
        }}
      >
        <div className="w-full h-full max-sm:w-[30%] mx-auto flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={data.image}
            alt=""
            className="w-[288px] h-[170px] max-md:h-[250px] max-sm:h-[150px] max-xs:h-[80px] max-sm:w-full transition-all duration-300 object-contain"
          />
        </div>
        <div className="w-full max-sm:w-[80%] flex flex-col">
          <Tooltip title={data.productName}>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: {
                  lg: '"200px"',
                },
                display: "inline-block",
                mt: "16px",
              }}
            >
              {data.productName}
            </Typography>
          </Tooltip>
          <Tooltip title={data.productDescription}>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: {
                  xs: "550px",
                },
                display: "inline-block",
                mt: "16px",
              }}
            >
              {data.productDescription}
            </Typography>
          </Tooltip>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1">
              <Typography
                component="span"
                variant="caption"
                fontSize={14}
                fontWeight={600}
                color={
                  data.discount
                    ? NEUTRAL_COLOR.neutral400
                    : NEUTRAL_COLOR.neutral650
                }
                sx={{ textDecoration: data.discount ? "line-through" : "none" }}
              >
                €{data.price}
              </Typography>
              {data.discount && (
                <Typography
                  component="span"
                  variant="caption"
                  fontSize={14}
                  color="#C33104"
                  fontWeight={600}
                >
                  €{data.discountPrice}
                </Typography>
              )}
            </div>
            <div className="flex items-center gap-1">
              <FaStar size={12} />
              <Typography
                variant="body2"
                color={NEUTRAL_COLOR.neutral800}
                fontSize={12}
                lineHeight={0}
                sx={{ m: 0, p: 0 }}
              >
                {data.rating}
              </Typography>
              <Typography
                variant="body2"
                color={NEUTRAL_COLOR.neutral800}
                fontSize={12}
                lineHeight={0}
                sx={{ m: 0, p: 0 }}
              >
                ({data.comment && data.comment.length})
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
