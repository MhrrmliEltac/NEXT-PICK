import type { CategoryType } from "../../types/types";
import { motion } from "framer-motion";
import { getCategoryIcon } from "@/helpers/getCategoryIcon";
import { Link } from "react-router-dom";
import { path } from "@/utils/paths";

const Hero = ({ CATEGORY_DATA }: { CATEGORY_DATA: CategoryType[] | null }) => {
  return (
    <section className="z-0 absolute -top-24 aspect-square w-full max-h-[800px] overflow-hidden rounded-b-[12px]">
      <motion.img
        initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover max-sm:h-[302px]"
        src="/banner-image-mobile.jpg"
        alt="banner-image"
      />

      {/* hero description */}
      {/* <motion.div className="absolute top-1/2 md:left-0 z-10 2xl:translate-x-3/4  translate-x-1/4 -translate-y-1/2 max-md:translate-x-0 max-md:right-0 text-white text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-bold w-max duration-300 transition-all text-white text-[44px] max-md:text-[24px] mb-4 text-[#CBCBCB]"
        >
          Introducing the <br /> Next Generation of <br /> Sound
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="md:text-[20px] md:text-[#424242] transition-all duration-300 text-[18px] leading-[18px] mb-10 text-[#AEAEAE] text-wrap w-[70%]"
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
      </motion.div> */}

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
                <Link
                  to={
                    typeof path.urlPaths.category.list === "function"
                      ? path.urlPaths.category.list(item.title)
                      : path.urlPaths.category.list
                  }
                  className="flex flex-col items-center cursor-pointer gap-2"
                >
                  {getCategoryIcon(item.title, 25)}
                  <p className="text-[12px] font-medium text-[#4B4B4B] font-roboto">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
