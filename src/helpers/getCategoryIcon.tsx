import { FaBox, FaCamera, FaComputer, FaHeadphones } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuHouse, LuMouse, LuTvMinimal } from "react-icons/lu";
import { MdOutlineKitchen } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";

export const getCategoryIcon = (title: string, size?: number) => {
  switch (title.toLowerCase()) {
    case "computer":
    case "laptop":
    case "pc":
      return <FaComputer size={size} />;
    case "smart phone":
      return <FiSmartphone size={size} />;
    case "headphones":
    case "audio":
      return <FaHeadphones size={size} />;
    case "tablet":
      return <FaTabletAlt size={size} />;
    case "tv":
    case "television":
      return <LuTvMinimal size={size} />;
    case "camera":
      return <FaCamera size={size} />;
    case "kitchen":
      return <MdOutlineKitchen size={size} />;
    case "gaming":
      return <GrGamepad size={size} />;
    case "smart watch":
      return <BsSmartwatch size={size} />;
    case "household":
      return <LuHouse size={size} />;
    case "accessories":
      return <LuMouse size={size} />;
    default:
      return <FaBox size={size} />;
  }
};
