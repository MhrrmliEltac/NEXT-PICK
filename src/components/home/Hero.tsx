import { Button, IconButton } from "@mui/material";
import { FaBox, FaCamera, FaComputer, FaHeadphones } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuHouse, LuMouse, LuTvMinimal } from "react-icons/lu";
import { MdOutlineKitchen } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import type { CategoryType } from "../../types/types";
import { motion } from "framer-motion";

const Hero = ({ CATEGORY_DATA }: { CATEGORY_DATA: CategoryType[] | null }) => {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "computer":
      case "laptop":
      case "pc":
        return <FaComputer />;
      case "smart phone":
        return <FiSmartphone />;
      case "headphones":
      case "audio":
        return <FaHeadphones />;
      case "tablet":
        return <FaTabletAlt />;
      case "tv":
      case "television":
        return <LuTvMinimal />;
      case "camera":
        return <FaCamera />;
      case "kitchen":
        return <MdOutlineKitchen />;
      case "gaming":
        return <GrGamepad />;
      case "smart watch":
        return <BsSmartwatch />;
      case "household":
        return <LuHouse />;
      case "accessories":
        return <LuMouse />;
      default:
        return <FaBox />;
    }
  };

  return (
    <section className="z-0 absolute -top-24 aspect-square w-full h-[800px] overflow-hidden rounded-b-[12px]">
      <motion.img
        initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        src="/1615486-beautiful-middle-aged-woman-list.webp"
        alt="bg-image"
        className="w-full h-full object-cover"
      />

      {/* hero description */}
      <motion.div className="absolute top-1/2 md:left-0 z-10 translate-x-3/4 -translate-y-1/2 max-md:translate-x-0 max-md:right-0 text-white text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-bold duration-300 transition-all md:text-[#424242] text-[44px] max-md:text-[14px] mb-4 text-[#CBCBCB]"
        >
          Introducing the <br /> Next Generation of <br /> Sound
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="md:text-[20px] md:text-[#424242] transition-all duration-300 text-[12px] leading-[18px] mb-10 text-[#AEAEAE] text-wrap w-[70%]"
        >
          Experience pure, immersive sound like never before
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Discover more
          </Button>
        </motion.div>
      </motion.div>

      {/* category */}
      <section className="max-w-[1224px] w-[90%] mx-auto relative">
        <div className="header px-[32px] w-full rounded-[8px] mb-[32px] custom-shadow custom-blur py-[22px] flex justify-between items-center z-10 absolute bottom-0 max-lg:hidden">
          {CATEGORY_DATA &&
            CATEGORY_DATA.length > 0 &&
            CATEGORY_DATA.map((item: CategoryType, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                key={index}
              >
                <IconButton
                  className="flex flex-col cursor-pointer gap-2"
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                >
                  {getCategoryIcon(item.title)}
                  <p className="text-[12px] font-medium text-[#4B4B4B] font-roboto">
                    {item.title}
                  </p>
                </IconButton>
              </motion.div>
            ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
