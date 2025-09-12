import { NEUTRAL_COLOR } from "@/constant";
import { SelectValue, SortValue, SubCategoryProductType } from "@/types/types";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface RightSideHeaderPropsType extends SubCategoryProductType {
  sortValue: SortValue;
  handleSortChange: (e: SelectChangeEvent<string>) => void;
  sortValuesArray: SelectValue[];
  categoryName: string | null;
}

const RightSideHeader: React.FC<RightSideHeaderPropsType> = ({
  sortValue,
  handleSortChange,
  sortValuesArray,
  categoryName,
  products,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between max-md:hidden"
    >
      <div>
        <Typography
          variant="h5"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={20}
          component="span"
        >
          {categoryName}
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

      <div className="flex items-center gap-1 ">
        <Typography
          variant="body2"
          component="span"
          fontSize={14}
          color={NEUTRAL_COLOR.neutral800}
        >
          Sort by:
        </Typography>
        <Select
          value={sortValue.value}
          IconComponent={IoIosArrowDown}
          onChange={(e: SelectChangeEvent<string>) => handleSortChange(e)}
          sx={{
            width: "108px",
            height: "32px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
            fontSize: "12px",
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "32px",
            },
            "& fieldset": {
              border: "1px solid #939393",
            },
            "&:hover fieldset": {
              borderColor: "#4A73EA",
            },
            "& .MuiSelect-icon": {
              color: "#4B4B4B",
              fontSize: "20px",
            },
          }}
        >
          {sortValuesArray.map((value) => (
            <MenuItem
              sx={{
                mt: "10px",
                color: NEUTRAL_COLOR.neutral600,
                fontSize: "14px",
                lineHeight: "20px",
                "&.Mui-selected": {
                  backgroundColor: "#E6EEFF",
                  color: "#1A4DE1",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#D0E2FF",
                },
                "&.MuiMenuItem-root:hover": {
                  backgroundColor: NEUTRAL_COLOR.neutral150,
                },
              }}
              value={value}
              key={value}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </div>
    </motion.div>
  );
};

export default RightSideHeader;
