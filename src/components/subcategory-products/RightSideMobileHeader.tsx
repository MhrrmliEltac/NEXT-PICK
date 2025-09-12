import { NEUTRAL_COLOR } from "@/constant";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BsFilterLeft } from "react-icons/bs";
import Line from "../general/Line";
import React, { Dispatch, SetStateAction } from "react";
import { SubCategoryProductType } from "@/types/types";

interface RightSideMobileHeaderPropsType extends SubCategoryProductType {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RightSideMobileHeader: React.FC<RightSideMobileHeaderPropsType> = ({
  products,
  setOpen,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="md:hidden transition-all duration-300"
    >
      <div className="flex items-center gap-3 transition-all duration-300">
        <Button
          variant="outlined"
          sx={{
            border: "0.5px solid #757575",
            borderRadius: "8px",
            color: NEUTRAL_COLOR.neutral650,
          }}
          startIcon={<BsFilterLeft />}
          onClick={() => setOpen(true)}
        >
          Filter
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "0.5px solid #757575",
            borderRadius: "8px",
            color: NEUTRAL_COLOR.neutral650,
          }}
          startIcon={<BsFilterLeft />}
        >
          Sort By
        </Button>
      </div>

      {/* Divider */}
      <Line />

      <div className="flex items-center justify-between mt-4">
        <Typography
          variant="h5"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={20}
          component="span"
        >
          Laptops
        </Typography>
        <Typography
          variant="body2"
          component="span"
          fontSize={14}
          color={NEUTRAL_COLOR.neutral400}
          sx={{ ml: "8px" }}
        >
          {products.length} products
        </Typography>
      </div>
    </motion.div>
  );
};

export default RightSideMobileHeader;
