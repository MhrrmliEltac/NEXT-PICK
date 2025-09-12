import { Box } from "@mui/material";

const GradientDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background:
          "linear-gradient( 90deg, rgba(147, 147, 147, 0.2) 0%, #939393 50%, rgba(147, 147, 147, 0.2) 100% )",
      }}
    ></Box>
  );
};

export default GradientDivider;
