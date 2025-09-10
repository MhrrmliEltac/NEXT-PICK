import { NEUTRAL_COLOR } from "@/constant";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";

type ListType = string[];

type AccordionItemType = {
  heading: string;
  list: ListType;
};

const AccordionItem: React.FC<AccordionItemType> = ({ heading, list }) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
        width: "100%",
        "&:before": {
          display: "none",
        },
        "&:after": {
          content: '""',
          display: "block",
          height: "2px",
          width: "100%",
          background:
            "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
          mt: 1,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<MdOutlineExpandMore size={30} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          backgroundColor: "transparent",
          padding: 0,
        }}
      >
        <Typography
          component="span"
          variant="body2"
          fontSize={18}
          fontWeight={300}
          color={NEUTRAL_COLOR.neutral800}
        >
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "transparent",
          border: "none",
          paddingLeft: 0,
        }}
      >
        <ul>
          {list &&
            list.length > 0 &&
            list.map((info: string, index: number) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  fontSize={12}
                  color={NEUTRAL_COLOR.neutral500}
                >
                  {info}
                </Typography>
              </li>
            ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
