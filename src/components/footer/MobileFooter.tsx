import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";
import { FooterListType, InfoDataType } from "@/types/types";
import { NEUTRAL_COLOR } from "@/constant";
import ContactInfo from "./ContactInfo";
import SubscribeForm from "./SubscribeForm";
import AccordionItem from "./AccordionItem";
import { FooterListItem } from "@/_mock/footerListItem";

const MobileFooter = ({ INFO_DATA }: { INFO_DATA: InfoDataType[] }) => {
  return (
    <section className="flex flex-col justify-between md:hidden items-center flex-wrap gap-4 max-w-[1680px] md:px-[61px] px-5 py-[55px] mx-auto transition-all duration-300">
      {/* E-commerce support */}
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
            height: "2px", // border qalınlığı
            width: "100%",
            background:
              "linear-gradient(180deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
            mt: 1, // accordion ilə xətt arasında məsafə
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
            E-commerce support
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
          }}
        >
          {INFO_DATA &&
            INFO_DATA.length > 0 &&
            INFO_DATA.map((info: InfoDataType, index: number) => (
              <ContactInfo info={info} index={index} key={index} />
            ))}
        </AccordionDetails>
      </Accordion>

      {FooterListItem.map((footerList: FooterListType) => (
        <AccordionItem
          heading={footerList.heading}
          list={footerList.list}
          key={footerList.id}
        />
      ))}

      {/* Subscribe */}
      <SubscribeForm />
    </section>
  );
};

export default MobileFooter;
