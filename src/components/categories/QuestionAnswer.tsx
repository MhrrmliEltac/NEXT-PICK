import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NEUTRAL_COLOR } from "@/constant/colors";

const QUESTION_DATA = [
  {
    id: 123,
    title: "Which operating system do I need?",
    subtitle: `The choice of an operating system depends on your specific requirements. For example: Windows: Ideal for users who need specific software or gaming applications.macOS: Preferred by those involved in graphic design, video editing, and other creative tasks. Linux: Best suited for users requiring more technical control, such as programming, server management, or security-focused tasks.`,
  },
  {
    id: 123,
    title: "Which operating system do I need?",
    subtitle: `The choice of an operating system depends on your specific requirements. For example: Windows: Ideal for users who need specific software or gaming applications.macOS: Preferred by those involved in graphic design, video editing, and other creative tasks. Linux: Best suited for users requiring more technical control, such as programming, server management, or security-focused tasks.`,
  },
  {
    id: 123,
    title: "Which operating system do I need?",
    subtitle: `The choice of an operating system depends on your specific requirements. For example: Windows: Ideal for users who need specific software or gaming applications.macOS: Preferred by those involved in graphic design, video editing, and other creative tasks. Linux: Best suited for users requiring more technical control, such as programming, server management, or security-focused tasks.`,
  },
  {
    id: 123,
    title: "Which operating system do I need?",
    subtitle: `The choice of an operating system depends on your specific requirements. For example: Windows: Ideal for users who need specific software or gaming applications.macOS: Preferred by those involved in graphic design, video editing, and other creative tasks. Linux: Best suited for users requiring more technical control, such as programming, server management, or security-focused tasks.`,
  },
];

const QuestionAnswer = () => {
  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[40px] mt-[40px]">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ transition: "all 0.1s ease" }}>
          <Typography
            variant="h5"
            fontSize={20}
            color={NEUTRAL_COLOR.neutral600}
            sx={{
              textAlign: "center",
            }}
          >
            Frequently Asked Questions About Laptops
          </Typography>
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
          {QUESTION_DATA &&
            QUESTION_DATA.length > 0 &&
            QUESTION_DATA.map((question) => (
              <>
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
                    sx={{
                      backgroundColor: "transparent",
                      padding: 0,
                    }}
                  >
                    <Typography component="span">{question.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{question.subtitle}</AccordionDetails>
                </Accordion>
                <Divider
                  sx={{
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
              </>
            ))}
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }} sx={{ transition: "all 0.1s ease" }}>
          <Card
            sx={{
              background:
                "linear-gradient(180deg, rgba(249, 249, 249, 1) 0%,  rgba(203, 215, 249, 1) 100%)",
              maxHeight: "484px",
              width: "100%",
            }}
            className="flex items-center justify-center w-full p-4"
          >
            <CardContent className="flex items-center justify-center flex-col lg:w-[60%] md:w-[70%]">
              <Typography
                variant="h4"
                fontSize={24}
                color="#1A4DE1"
                sx={{ mb: "24px", textAlign: "center" }}
                fontFamily="Roboto"
              >
                Got questions? We've got answers!
              </Typography>
              <Typography
                variant="body2"
                fontSize={16}
                color={NEUTRAL_COLOR.neutral650}
                sx={{ mb: "58px", textAlign: "center" }}
              >
                Chat with our tech expert for personalized advice and make
                informed decisions on your next digital purchase.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  height: "48px",
                  width: "100%",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                Get help now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default QuestionAnswer;
