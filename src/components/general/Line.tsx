import { Divider } from "@mui/material";

const Line = () => {
  return (
    <Divider
      sx={{
        mt: 2,
        "&:after": {
          content: '""',
          display: "block",
          height: "2px",
          width: "100%",
          background:
            "linear-gradient(90deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
        },
      }}
    />
  );
};

export default Line;
