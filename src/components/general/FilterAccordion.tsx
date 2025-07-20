import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterAccordion = ({
  accordionData,
  accordionTitle,
}: {
  accordionData: any;
  accordionTitle: string;
}) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
        width: "100%",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ backgroundColor: "transparent", padding: 0 }}
      >
        <Typography component="span">{accordionTitle}</Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          p: 0,
        }}
      >
        <ul className="p-0 m-0">
          {accordionData &&
            accordionData.map((classification: any, index: number) => (
              <li className="p-0 m-0" key={index}>
                <input
                  type="checkbox"
                  name="checkbox"
                  className="my-2 mr-2 checkbox"
                />

                <span>{classification}</span>
              </li>
            ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
