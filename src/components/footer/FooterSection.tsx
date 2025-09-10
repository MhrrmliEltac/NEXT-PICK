import { NEUTRAL_COLOR } from "@/constant/colors";
import { Typography } from "@mui/material";
import React from "react";

type FooterSectionProps = {
  heading: string;
  list: string[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ heading, list }) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography
        variant="caption"
        color={NEUTRAL_COLOR.neutral800}
        fontSize={14}
        fontWeight="600"
      >
        {heading}
      </Typography>

      <ul>
        {list.map((listItem: string, index: number) => (
          <li key={index}>
            <Typography
              variant="body2"
              fontSize={12}
              color={NEUTRAL_COLOR.neutral500}
            >
              {listItem}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
