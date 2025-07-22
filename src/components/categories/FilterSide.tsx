import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Divider,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useState, type ChangeEvent } from "react";
import FilterAccordion from "../general/FilterAccordion";
import { motion } from "framer-motion";

const COLOR_DATA = [
  { color: "#000000" },
  { color: "#757575" },
  { color: "#F9F9F9" },
  { color: "#061132" },
];

const CLASSİFİCATİON_DATA = [
  "For streaming & media editing",
  "For gaming",
  "For video editing",
  "Industrial use",
  "For music production",
  "Ultra-lightweight",
];

const SCREEN_SIZE_DATA = [
  "11 inch",
  "12 inch",
  "13 inch",
  "14 inch",
  "15 inch",
];

const FilterSide = ({ show }: { show: boolean }) => {
  const [price, setPrice] = useState<{ min: string; max: string }>({
    min: "0",
    max: "5000",
  });

  const [value, setValue] = useState<number[]>([
    parseInt(price.min),
    parseInt(price.max),
  ]);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (Number(value) >= 0 && Number(value) <= 5000) {
      setPrice((prev) => {
        const updated = { ...prev, [name]: value };
        setValue([parseInt(updated.min), parseInt(updated.max)]);
        return updated;
      });
    }
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      setPrice({
        min: newValue[0].toString(),
        max: newValue[1].toString(),
      });
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${show ? "block" : "max-md:hidden"}`}
    >
      <form>
        <Card
          sx={{ boxShadow: "none" }}
          className="border-[#E5E5E5] border rounded-[8px] px-5"
        >
          {/* Color Filter */}
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
              <Typography component="span">Color</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ display: "flex", gap: "15px", p: 0 }}>
              {COLOR_DATA.map((color, index: number) => (
                <div
                  key={index}
                  style={{ backgroundColor: color.color }}
                  className="w-[24px] h-[24px] rounded-full border-[3px] border-[#E5EBFC]"
                ></div>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Divider */}
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

          {/* Price Filter */}
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
              <Typography component="span">Price</Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                p: 0,
              }}
            >
              {/* TextFields */}
              <div className="w-full flex items-center gap-2">
                <TextField
                  variant="outlined"
                  type="number"
                  name="min"
                  value={price.min}
                  InputProps={{
                    startAdornment: (
                      <span style={{ fontSize: "12px", color: "#757575" }}>
                        €
                      </span>
                    ),
                  }}
                  onChange={handlePriceChange}
                  sx={{
                    ".MuiOutlinedInput-root": {
                      height: "32px",
                      borderRadius: "8px",
                      input: {
                        py: "8px",
                        px: "4px",
                        color: NEUTRAL_COLOR.neutral500,
                        fontSize: "12px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid #000",
                        transition: "all 0.05s ease-in",
                      },
                    },
                  }}
                />
                <span>To</span>
                <TextField
                  variant="outlined"
                  type="number"
                  name="max"
                  value={price.max}
                  InputProps={{
                    startAdornment: (
                      <span style={{ fontSize: "12px", color: "#757575" }}>
                        €
                      </span>
                    ),
                  }}
                  onChange={handlePriceChange}
                  sx={{
                    ".MuiOutlinedInput-root": {
                      height: "32px",
                      borderRadius: "8px",
                      input: {
                        py: "8px",
                        px: "4px",
                        color: NEUTRAL_COLOR.neutral500,
                        fontSize: "12px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid #000",
                        transition: "all 0.05s ease-in",
                      },
                    },
                  }}
                />
              </div>

              {/* Slider */}
              <Slider
                value={value}
                min={0}
                max={5000}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                sx={{
                  color: "#000",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    height: 20,
                    width: 20,
                    backgroundColor: "#000",
                    border: "2px solid #E5EBFC",
                    "&:hover": {
                      boxShadow: "0 0 0 8px rgba(0, 0, 0, 0.16)",
                    },
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#000",
                    border: "none",
                  },
                  "& .MuiSlider-rail": {
                    color: "#E5EBFC",
                    opacity: 1,
                  },
                }}
              />
            </AccordionDetails>
          </Accordion>

          {/* Divider */}
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

          {/* Classification */}
          <FilterAccordion
            accordionData={CLASSİFİCATİON_DATA}
            accordionTitle="Classification"
          />

          {/* Divider */}
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

          {/* Screen size */}
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
          <FilterAccordion
            accordionData={SCREEN_SIZE_DATA}
            accordionTitle="Screen size"
          />

          {/* Divider */}
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
        </Card>
      </form>
    </motion.aside>
  );
};

export default FilterSide;
