import { Button, IconButton } from "@mui/material";
import { FaBox, FaCamera, FaComputer, FaHeadphones } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuHouse, LuMouse, LuTvMinimal } from "react-icons/lu";
import { MdOutlineKitchen } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import { useFetch } from "../../api/useFetch";

const Hero = () => {
  const { data: CATEGORY_DATA } = useFetch("/category/list");
  console.log(CATEGORY_DATA);

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
      <img
        src="/1615486-beautiful-middle-aged-woman-list.webp"
        alt="bg-image"
        className="w-full h-full object-cover"
      />

      {/* hero description */}
      <div className="absolute top-1/2 md:left-0 z-10 translate-x-3/4 -translate-y-1/2 max-md:translate-x-0 max-md:right-0 text-white text-left">
        <h1 className="font-bold duration-300 transition-all md:text-[#424242] text-[44px] max-md:text-[14px] mb-4 text-[#CBCBCB]">
          Introducing the <br /> Next Generation of <br /> Sound
        </h1>
        <p className="md:text-[20px] md:text-[#424242] transition-all duration-300 text-[12px] leading-[18px] mb-10 text-[#AEAEAE] text-wrap w-[70%]">
          Experience pure, immersive sound like never before
        </p>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Discover more
        </Button>
      </div>

      {/* category */}
      <section className="max-w-[1224px] w-[90%] mx-auto relative">
        <div className="header px-[32px] w-full rounded-[8px] mb-[32px] custom-shadow custom-blur py-[22px] flex justify-between items-center z-10 absolute bottom-0 max-lg:hidden">
          {CATEGORY_DATA &&
            CATEGORY_DATA.length > 0 &&
            CATEGORY_DATA.map((item: any) => (
              <IconButton
                key={item.id}
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
            ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
