import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { Skeleton } from "../ui/skeleton";
import { itemVariants } from "@/utils/animateVariants";

const CustomSkeleton = () => {
  return (
    <Grid
      size={{ xs: 12, md: 4, lg: 3 }}
      component={motion.div}
      variants={itemVariants}
      sx={{ mb: "120px" }}
    >
      {/* <ProductCard data={item} /> */}
      <div className="w-full h-full max-sm:w-[30%] mx-auto flex justify-center items-center">
        <Skeleton className="w-[288px] h-[170px] max-md:h-[250px] max-sm:h-[150px] max-xs:h-[80px] max-sm:w-full transition-all duration-700 object-contain" />
      </div>
      <div className="w-full max-sm:w-[80%] flex flex-col">
        <Skeleton className="w-full h-[20px] mt-4" />
        <Skeleton className="w-full h-[16px] mt-4" />
        <div className="flex justify-between items-center w-full mt-4">
          <Skeleton className="w-[80px] h-[20px]" />
          <Skeleton className="w-[50px] h-[20px]" />
        </div>
      </div>
    </Grid>
  );
};

export default CustomSkeleton;
