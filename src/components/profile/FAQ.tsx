import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "@/_mock/faqData";
import { NEUTRAL_COLOR } from "@/constant/colors";

const accordionStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
  width: "100%",
  "&:before": { display: "none" },
};

const FAQ = () => {
  return (
    <section className="mt-20">
      <Typography
        component="h5"
        fontWeight={500}
        fontSize="20px"
        color={NEUTRAL_COLOR.neutral600}
      >
        FAQ
      </Typography>

      {/* Divider */}
      <Divider
        sx={{
          mt: 1,
          "&:after": {
            content: '""',
            display: "block",
            height: "2px",
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
          },
        }}
      />

      {faqData.map((faq) => (
        <div key={faq.id}>
          {/* Accordion */}
          <Accordion sx={accordionStyle}>
            {/* Accordion Headers */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "transparent", padding: 0 }}
            >
              <Typography component="span">{faq.question}</Typography>
            </AccordionSummary>

            {/* Accordion Details */}
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                p: 0,
              }}
            >
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, voluptate?
                </span>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Divider */}
          <Divider
            sx={{
              mt: 1,
              "&:after": {
                content: '""',
                display: "block",
                height: "2px",
                width: "100%",
                background:
                  "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
              },
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default FAQ;
