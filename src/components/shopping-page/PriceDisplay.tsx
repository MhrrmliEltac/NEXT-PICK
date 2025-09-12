import { NEUTRAL_COLOR } from "@/constant";
import { Box, Typography } from "@mui/material";

const PriceDisplay = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
      }}
    >
      <Typography
        variant="overline"
        fontWeight={400}
        fontSize={{
          xs: "10px",
          md: "20px",
        }}
        color={NEUTRAL_COLOR.neutral400}
      >
        €1,299
      </Typography>
      <Typography
        variant="overline"
        fontWeight={400}
        fontSize={{
          xs: "10px",
          md: "20px",
        }}
        color="#C33104"
      >
        €1,104
      </Typography>
    </Box>
  );
};

export default PriceDisplay;
