import { Button } from "@mui/material";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h4 className="md:text-[24px] max-sm:text-sm font-roboto font-medium transition-all duration-300">
        {title}
      </h4>
      <Button
        variant="text"
        endIcon={<TfiArrowCircleRight />}
        sx={{
          textTransform: "none",
          fontSize: {
            xs: "12px",
            md: "14px",
            lg: "16px",
          },
          transition: "all 0.3s",
        }}
        disableFocusRipple
        disableRipple
        disableTouchRipple
      >
        View all
      </Button>
    </div>
  );
};

export default Heading;
