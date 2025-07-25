import { NEUTRAL_COLOR } from "@/constant/colors";
import { containerVariants } from "@/utils/animateVariants";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { TfiArrowCircleDown } from "react-icons/tfi";

const Description = ({
  expanded1,
  handleChange,
}: {
  expanded1: boolean;
  handleChange: (value: number) => void;
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      className="mb-[65px]"
    >
      <Accordion
        onChange={() => handleChange(2)}
        expanded={expanded1}
        sx={{
          "&:before": { display: "none" },
          borderTop: "none",
          boxShadow: "none",
          borderRadius: "0px",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
            },
            padding: "0px",
            width: "100%",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(to right, #9393934D 0%, #9393934D 100%, #93939300 0%)",
            },
          }}
        >
          <Typography
            component="span"
            variant="h4"
            fontSize={24}
            fontWeight={600}
            color={NEUTRAL_COLOR.neutral800}
          >
            Product description
          </Typography>
          <Box display="flex">
            <Typography
              component="span"
              fontSize="14px"
              color="#1A4DE1"
              sx={{ fontWeight: 500 }}
            >
              {expanded1 ? "Show less" : "Show more"}
            </Typography>
            <TfiArrowCircleDown
              color="#1A4DE1"
              style={{
                transform: expanded1 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            With the 15 inch HP Pavilion 15-eg2959nd you can edit photos and
            multitask between light programs. The 12th generation Intel Core i5
            processor and the 16 gigabyte DDR4 RAM are powerful enough for this.
            Do you want to enjoy relaxing music in the meantime? The Bang &
            Olufsen speakers make the sound clearer and purer than with standard
            laptop speakers. In the evening you can also continue working,
            because the illuminated keyboard allows you to find the keys well in
            the dark. Is your laptop empty, but do you want to get back to work
            quickly? With HP Fast Charge you can charge your laptop up to 50
            percent in about 45 minutes, so you can quickly continue wirelessly.
            You store your photos, documents and other files on the 512 gigabyte
            M.2 SSD. You don't have to worry about the security of your
            creations. You can log in easily and quickly via the fingerprint
            scanner. Do you find sustainability important? The materials in the
            speaker housing are made from recycled plastic, making this laptop
            more sustainable.  In addition, you can quickly recharge the laptop
            with the HP Fast Charge technology, so you can get back on the road
            quickly.
          </motion.span>
        </AccordionDetails>
      </Accordion>
    </motion.section>
  );
};

export default Description;
