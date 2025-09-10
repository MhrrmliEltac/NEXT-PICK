import { NEUTRAL_COLOR } from "@/constant/colors";
import { InfoDataType } from "@/types/types";
import { Typography } from "@mui/material";

const ContactInfo = ({
  info,
  index,
}: {
  info: InfoDataType;
  index: number;
}) => {
  return (
    <ul key={index}>
      <li>
        <Typography
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral500}
        >
          {info.address}
        </Typography>
      </li>
      <li>
        <Typography
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral500}
        >
          Phone: {info.phoneNumber}
        </Typography>
      </li>
      <li>
        <Typography
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral500}
        >
          Email: {info.email}
        </Typography>
      </li>
    </ul>
  );
};

export default ContactInfo;
