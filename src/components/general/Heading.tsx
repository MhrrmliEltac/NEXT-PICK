import { Button } from "@mui/material";
import { IconType } from "react-icons/lib";

const Heading = ({
  title,
  btnTitle,
  Icon,
}: {
  title: string;
  btnTitle: string;
  Icon: IconType;
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h4 className="md:text-[24px] max-sm:text-sm font-roboto font-medium transition-all duration-300">
        {title}
      </h4>
      <Button
        variant="text"
        endIcon={<Icon />}
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
        {btnTitle}
      </Button>
    </div>
  );
};

export default Heading;
