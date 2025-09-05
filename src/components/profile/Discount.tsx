import { DiscountDataType, discountInfoData } from "@/_mock/discountData";
import FAQ from "./FAQ";
import Wrapper from "./Wrapper";
import DiscountCard from "./DiscountCard";
import { Typography } from "@mui/material";
import { NEUTRAL_COLOR } from "@/constant/colors";

const Discount = () => {
  return (
    <Wrapper title="Discount">
      {discountInfoData && discountInfoData.length > 0 ? (
        discountInfoData.map((discount: DiscountDataType) => (
          <DiscountCard key={discount.id} discountData={discount} />
        ))
      ) : (
        <div className="max-h-[242px] min-h-[136px] h-full flex items-center justify-center">
          <Typography
            fontWeight={400}
            fontSize={16}
            color={NEUTRAL_COLOR.neutral600}
          >
            You don't have any personal discounts at the moment.{" "}
          </Typography>
        </div>
      )}

      <FAQ />
    </Wrapper>
  );
};

export default Discount;
