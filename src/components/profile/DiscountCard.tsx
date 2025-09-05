import { NEUTRAL_COLOR } from "@/constant/colors";
import { ShadButton } from "../ui/button";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { DiscountDataType } from "@/_mock/discountData";

const DiscountCard = ({ discountData }: { discountData: DiscountDataType }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%.",
        minHeight: "210px",
        backgroundImage: `url(${discountData.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "32px 28px",
        mb: "32px",
      }}
      className="!shadow-none"
    >
      <CardContent className="flex flex-col gap-1 !border-b-0 !border-none !shadow-none w-full max-w-[273px] h-full min-h-[144px] bg-[#FFFFFF33] backdrop-blur-[20px] rounded">
        <Typography
          component="h5"
          fontWeight={500}
          fontSize={20}
          color="#FECABA"
        >
          {discountData.header}
        </Typography>
        <Typography
          component="span"
          fontWeight={400}
          fontSize={12}
          color={NEUTRAL_COLOR.neutral800}
        >
          {discountData.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShadButton
            variant="default"
            color="primary"
            className="cursor-pointer"
          >
            Redeem
          </ShadButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiscountCard;
