import { NEUTRAL_COLOR } from "@/constant/colors";
import { ProductDataType } from "@/types/types";
import {
  containerVariants,
  listContainer,
  listItem,
} from "@/utils/animateVariants";
import { Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { BsHeartFill } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ShadButton } from "../ui/button";
import { useAppDispatch } from "@/hook/hooks";
import { addFavoriteProduct } from "@/redux-toolkit/slice/favoriteSlice";
import { addBasketProduct } from "@/redux-toolkit/slice/basketSlice";
const MotionShadButton = motion.create(ShadButton);

const showBenefits: string[] = [
  "Order before 15:00 for same-day dispatch",
  "Easy returns: return within 30 days if you're not satisfied",
  "2-year warranty: peace of mind for your purchase",
];

const Hero = ({ PRODUCT_DATA }: { PRODUCT_DATA: ProductDataType | null }) => {
  const dispatch = useAppDispatch();

  const handleAddFavorite = async (productId: string) => {
    dispatch(addFavoriteProduct(productId));
  };

  const handleAddBasket = async (productId: string, quantity: number) => {
    dispatch(addBasketProduct({ productId, quantity }));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Grid container spacing={3} mb="80px">
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="flex items-center justify-center h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={PRODUCT_DATA?.image && PRODUCT_DATA.image}
              alt={PRODUCT_DATA?.productName && PRODUCT_DATA.productName}
              className="w-[500px] h-[300px] object-contain"
            />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="flex flex-col gap-4 items-start justify-start mb-[52px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "32px",
                  },
                }}
                color={NEUTRAL_COLOR.neutral600}
              >
                {PRODUCT_DATA?.productName}
              </Typography>
              <div className="flex gap-1 items-center">
                <FaStar size={12} className="mb-0.5" />
                <span className="txet-[#2B2B2B] font-bold font-roboto text-base">
                  {PRODUCT_DATA?.rating}
                </span>
                <span className="txet-[#2B2B2B] font-bold font-roboto text-base">
                  {`(${PRODUCT_DATA?.comment.length})`}
                </span>
              </div>
            </motion.div>
            <div className="flex gap-1">
              <Typography
                variant="h5"
                fontWeight={600}
                color={
                  PRODUCT_DATA?.discount
                    ? NEUTRAL_COLOR.neutral400
                    : NEUTRAL_COLOR.neutral650
                }
                sx={{
                  textDecoration: PRODUCT_DATA?.discount
                    ? "line-through"
                    : "none",
                }}
              >
                €{PRODUCT_DATA?.price}
              </Typography>
              {PRODUCT_DATA?.discount && (
                <Typography variant="h5" color="#C33104" fontWeight={600}>
                  €{PRODUCT_DATA.discountPrice}
                </Typography>
              )}
            </div>
            <Typography variant="h6" fontWeight={600} color="#FB5F2F">
              Delivered tomorrow
            </Typography>
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <MotionShadButton
              whileHover={{ scale: 1.03 }}
              variant="default"
              className="bg-[#1A4DE1] hover:bg-[#1A4DE1] cursor-pointer h-12 w-full flex items-center justify-center text-white text-base"
            >
              Buy now
            </MotionShadButton>
            <MotionShadButton
              onClick={() => {
                if (PRODUCT_DATA?._id)
                  handleAddBasket(PRODUCT_DATA._id, PRODUCT_DATA.quantity);
              }}
              whileHover={{ scale: 1.03 }}
              variant="outline"
              className="h-12 w-full cursor-pointer flex justify-center items-center border border-[#1A4DE1] font-roboto text-[#1A4DE1] hover:text-[#1A4DE1]"
            >
              Add to Cart
            </MotionShadButton>
            <MotionShadButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              variant="outline"
              className="border border-[#1A4DE1] cursor-pointer  h-12"
              onClick={() => {
                if (PRODUCT_DATA?._id) handleAddFavorite(PRODUCT_DATA._id);
              }}
            >
              <BsHeartFill color="#FB3748" />
            </MotionShadButton>
          </div>
          <motion.ul
            variants={listContainer}
            initial="hidden"
            animate="visible"
            className="w-full mt-8"
          >
            {showBenefits &&
              showBenefits.map((benefit: string, index: number) => (
                <motion.li
                  variants={listItem}
                  key={index}
                  className="flex items-center gap-2 mb-7"
                >
                  <CiCircleCheck size={25} color="#1FC16B" fontWeight={900} />
                  <span className="font-roboto font-normal  max-md:text-[10px] transition-all duration-300 text-[#272727]">
                    {benefit}
                  </span>
                </motion.li>
              ))}
          </motion.ul>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Hero;
