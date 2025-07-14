import Buttons from "../components/header/Buttons";
import Logo from "../components/header/Logo";
import SearchInput from "../components/header/SearchInput";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-[32px] header h-[62px] rounded-[8px] custom-shadow custom-blur py-[22px] flex justify-between items-center max-w-[1240px] w-[90%] mx-auto z-10 relative"
    >
      <nav className="fixed flex justify-between items-center mx-auto z-10 py-[22px] w-full">
        <Logo />
        <SearchInput />
        <Buttons />
      </nav>
    </motion.header>
  );
};

export default Header;
