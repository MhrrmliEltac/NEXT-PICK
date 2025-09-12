import { NEUTRAL_COLOR } from "@/constant";
import { Box, Typography } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";

const ProductInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        gap: "5px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="caption"
          fontWeight={500}
          color={NEUTRAL_COLOR.neutral600}
          fontSize={{
            xs: 12,
            md: 16,
          }}
        >
          HP Laptop with Intel Core i7
        </Typography>
        <Typography
          variant="overline"
          fontWeight={400}
          color={NEUTRAL_COLOR.neutral600}
          fontSize={{
            xs: 10,
            md: 14,
          }}
        >
          Intel Core i7 | 16GB RAM | 1TB SSD | 14” WQXGA Display
        </Typography>
      </Box>
      <MdDeleteOutline size={25} color={NEUTRAL_COLOR.neutral800} />
    </Box>
  );
};

export default ProductInfo;
