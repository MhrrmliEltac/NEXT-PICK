import { useState, useEffect } from "react";
import Buttons from "../components/header/Buttons";
import Logo from "../components/header/Logo";
import SearchInput from "../components/header/SearchInput";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "@mui/material";
import DrawerList from "@/components/header/DrawerList";
import { useFetch } from "@/api/useFetch";
import type { CategoryType } from "@/types/types";
import { path } from "@/utils/paths";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = (newToggle: boolean) => {
    setOpen(newToggle);
  };

  const { data: CATEGORY_DATA } = useFetch<CategoryType[] | null>(
    path.endpoints.categories.list
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isScrolled ? 0 : 0, // hər zaman görünür, amma scroll effekti ilə translate dəyişir
        opacity: 1,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`mt-[12px] header h-[82px] rounded-[8px] custom-shadow custom-blur flex justify-between items-center max-w-[1524px] w-[90%] mx-auto z-50 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md"
          : "relative bg-transparent"
      }`}
      style={{
        transform: isScrolled
          ? "translateY(0)" // scroll ediləndə yuxarı qalxır
          : "translateY(10px)", // yuxarı-aşağı hərəkət effekti
        transition: "transform 0.5s ease-in-out", // smooth keçid
      }}
    >
      {/* Web nav */}
      <nav className="fixed max-md:hidden flex justify-between items-center mx-auto z-10 py-[22px] w-full">
        <Logo />
        <SearchInput />
        <Buttons />
      </nav>

      {/* Mobile nav */}
      <nav className="fixed md:hidden flex flex-col gap-2 justify-between items-center mx-auto z-10 w-full">
        <div className="flex justify-between items-center w-full">
          <Logo />
          <Buttons />
        </div>
        <div className="w-full flex items-center">
          <div className="h-[36px] w-[49px] flex items-center justify-center">
            <RxHamburgerMenu
              className="cursor-pointer"
              onClick={() => toggleDrawer(true)}
            />
          </div>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="I'm searching for..."
            className=" flex px-[16px] py-[6px] w-full outline-none h-full rounded-br-[8px]"
          />
        </div>
      </nav>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{ display: { md: "none" } }}
      >
        <DrawerList CATEGORY_DATA={CATEGORY_DATA} onClose={toggleDrawer} />
      </Drawer>
    </motion.header>
  );
};

export default Header;
