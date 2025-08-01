import { laptopMockData } from "@/_mock/laptopMockData";
import { NEUTRAL_COLOR } from "@/constant/colors";
import {
  listContainer,
  listItem,
  specRowVariants,
} from "@/utils/animateVariants";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { TfiArrowCircleDown } from "react-icons/tfi";

const Information = ({
  expanded,
  handleChange,
}: {
  expanded: boolean;
  handleChange: (value: number) => void;
}) => {
  function objectKeys(object: object, index: number) {
    const key = Object.keys(object)[index];
    return key.toCapitalize();
  }

  return (
    <section className="mb-[65px]">
      <Accordion
        onChange={() => handleChange(1)}
        expanded={expanded}
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
            Product information & specifications
          </Typography>
          <Box display="flex" gap={1}>
            <Typography
              component="span"
              fontSize="14px"
              color="#1A4DE1"
              sx={{ fontWeight: 500 }}
            >
              {expanded ? "Show less" : "Show more"}
            </Typography>
            <TfiArrowCircleDown
              color="#1A4DE1"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container mt="32px">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                animate="visible"
                className="list-disc flex flex-col gap-4 max-lg:mb-[40px]"
              >
                {laptopMockData.notes &&
                  laptopMockData.notes.map((note: string, index: number) => (
                    <motion.li variants={listItem} key={index}>
                      <Typography
                        component="span"
                        variant="body2"
                        fontSize={16}
                        lineHeight="150%"
                        color={NEUTRAL_COLOR.neutral800}
                      >
                        {note}
                      </Typography>
                    </motion.li>
                  ))}
              </motion.ul>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {objectKeys(laptopMockData, 0)}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {laptopMockData.display}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {objectKeys(laptopMockData, 1)}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {laptopMockData.processor}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {`Internal working memory (${objectKeys(
                      laptopMockData,
                      2
                    )})`}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {laptopMockData.ram}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {objectKeys(laptopMockData, 3)}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {laptopMockData.processor}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {`Internal working memory (${objectKeys(
                      laptopMockData,
                      4
                    )})`}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {laptopMockData.videoCard}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={5}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {objectKeys(laptopMockData, 10)}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#FDFDFD] px-3 py-4 w-full">
                  {laptopMockData.recommendedUsage.map(
                    (recom: string, index: number) => (
                      <span
                        key={index}
                        className=" max-md:text-[10px] transition-all duration-300 text-wrap"
                      >
                        {recom},
                      </span>
                    )
                  )}
                </div>
              </motion.div>
              <motion.div
                variants={specRowVariants}
                initial="hidden"
                animate="visible"
                custom={6}
                className="flex gap-0.5 mt-[5px]"
              >
                <div className="rounded-tl-[8px] rounded-bl-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  <span className=" max-md:text-[10px] transition-all duration-300">
                    {objectKeys(laptopMockData, 11)}
                  </span>
                </div>
                <div className="rounded-tr-[8px] rounded-br-[8px] bg-[#F3F3F3] px-3 py-4 w-full">
                  {laptopMockData.connectivity.map(
                    (connect: string, index: number) => (
                      <span
                        key={index}
                        className=" max-md:text-[10px] transition-all duration-300"
                      >
                        {connect},{" "}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default Information;
