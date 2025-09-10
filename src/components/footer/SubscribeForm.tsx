import { FormControl, TextField, Typography } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { NEUTRAL_COLOR } from "../../constant/colors";
import SocialLinks from "./SocialLinks";

const SubscribeForm = () => (
  <div className="flex flex-col gap-4">
    <Typography
      variant="caption"
      color={NEUTRAL_COLOR.neutral600}
      fontSize={14}
      fontWeight="600"
    >
      Sign up for exclusive offers and the latest news!
    </Typography>
    <FormControl
      fullWidth
      sx={{
        borderRadius: "12px",
        border: "1px solid",
        borderColor: NEUTRAL_COLOR.neutral400,
        position: "relative",
        padding: "4px 8px",
      }}
    >
      <HiOutlineMail
        size={20}
        color={NEUTRAL_COLOR.neutral600}
        style={{
          position: "absolute",
          left: "8px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <TextField
        type="email"
        name="email"
        placeholder="Your email..."
        variant="standard"
        slotProps={{ input: { disableUnderline: true } }}
        sx={{
          border: "none",
          "& fieldset": { border: "none" },
          paddingLeft: "28px",
        }}
      />
    </FormControl>
    <SocialLinks />
  </div>
);

export default SubscribeForm;
