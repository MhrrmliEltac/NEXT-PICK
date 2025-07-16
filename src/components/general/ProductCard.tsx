import { NEUTRAL_COLOR } from "@/constant/colors";
import { Card, CardContent, Typography } from "@mui/material";
import { Badge } from "../ui/badge";

const ProductCard = ({
  mock,
  discount,
}: {
  mock: any;
  discount: boolean | undefined;
}) => {
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "#CBCBCB",
        borderRadius: "8px",
        boxShadow: "none",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transition: "all 0.3s ease-in-out",
          borderColor: "#1A4DE1",
        },
      }}
      className="flex justify-center items-center relative"
    >
      {discount && (
        <Badge className="absolute top-5 left-1 bg-[#FB5F2F] w-[44px] h-[22px] rounded-tr-[8px] rounded-br-[8px] rounded-tl-none rounded-bl-none">
          {mock.discountPercent}%
        </Badge>
      )}
      <CardContent>
        <img src={mock.productImage} alt="" className="w-[288px] h-[202px]" />
        <Typography sx={{ mb: "33px", mt: "16px" }}>
          {mock.productName}
        </Typography>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Typography
              component="span"
              variant="caption"
              fontSize={14}
              color={NEUTRAL_COLOR.neutral400}
              sx={{ textDecoration: "line-through" }}
            >
              €{mock.price}
            </Typography>
            <Typography
              component="span"
              variant="caption"
              fontSize={14}
              color="#C33104"
            >
              €{mock.discountPrice}
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              variant="body2"
              color={NEUTRAL_COLOR.neutral800}
              fontSize={12}
            >
              {mock.rating}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              color={NEUTRAL_COLOR.neutral800}
              fontSize={12}
            >
              ({mock.commentCount})
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
