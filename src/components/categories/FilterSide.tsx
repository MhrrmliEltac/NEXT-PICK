import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const COLOR_DATA = [
  {
    color: "#000000",
  },
  {
    color: "#757575",
  },
  {
    color: "#F9F9F9",
  },
  {
    color: "#061132",
  },
];

const FilterSide = () => {
  return (
    <aside className="w-[288px]">
      <form>
        <Card
          sx={{ boxShadow: "none" }}
          className="border-[#E5E5E5] border rounded-[8px] px-1.5"
        >
          <CardContent
            sx={{
              m: 0,
              "&.MuiCardContent-root:last-child": {
                p: "6px",
              },
            }}
          >
            {/* Color accordion */}
            <Accordion
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                width: "100%",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: "transparent", padding: 0 }}
              >
                <Typography component="span">Color</Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ display: "flex", gap: "15px", p: 0 }}>
                {COLOR_DATA &&
                  COLOR_DATA.map((color) => (
                    <div
                      style={{ backgroundColor: `${color.color}` }}
                      className={`w-[24px] h-[24px] rounded-full border-[3px] border-[#E5EBFC]`}
                    ></div>
                  ))}
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </form>
    </aside>
  );
};

export default FilterSide;
