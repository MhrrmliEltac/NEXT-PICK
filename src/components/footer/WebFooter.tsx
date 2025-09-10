import { Typography } from "@mui/material";
import { NEUTRAL_COLOR } from "../../constant/colors";
import { FooterListType, InfoDataType } from "@/types/types";
import ContactInfo from "./ContactInfo";
import FooterSection from "./FooterSection";
import SubscribeForm from "./SubscribeForm";
import { FooterListItem } from "@/_mock/footerListItem";

const WebFooter = ({ INFO_DATA }: { INFO_DATA: InfoDataType[] }) => {
  return (
    <section className="flex justify-between max-md:hidden items-start flex-wrap max-w-[1680px] md:px-[61px] px-5 py-[55px] mx-auto transition-all duration-300">
      {/* E-commerce support */}
      <div className="flex flex-col gap-2">
        <Typography
          variant="caption"
          color={NEUTRAL_COLOR.neutral800}
          fontSize={14}
          fontWeight="600"
        >
          E-commerce support
        </Typography>

        {INFO_DATA &&
          INFO_DATA.length > 0 &&
          INFO_DATA.map((info: InfoDataType, index: number) => (
            <ContactInfo info={info} index={index} key={index} />
          ))}
      </div>

      {/* Footer List */}
      {FooterListItem.map((footerList: FooterListType) => (
        <FooterSection
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

export default WebFooter;
