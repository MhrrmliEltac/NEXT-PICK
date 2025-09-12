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

  const toggleDrawer = (newToggle: boolean) => setOpen(newToggle);

  const {
    data: CATEGORY_DATA,
    loading,
    error,
  } = useFetch<CategoryType[] | null>(path.endpoints.categories.list);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`mt-[12px] header h-20 rounded-lg custom-shadow custom-blur flex justify-between items-center max-w-[1524px] w-[90%] mx-auto z-[100] ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md"
          : "relative bg-transparent"
      }`}
      style={{
        transform: isScrolled ? "translateY(0)" : "translateY(10px)",
        transition: "transform 0.5s ease-in-out",
      }}
      role="banner"
      aria-label="Main site header"
    >
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex justify-between items-center w-full py-5"
        role="navigation"
        aria-label="Desktop navigation"
      >
        <Logo />
        <SearchInput />
        <Buttons />
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden flex flex-col gap-2 justify-between items-center w-full"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center w-full px-2">
          <Logo />
          <Buttons />
        </div>
        <div className="w-full flex items-center px-2">
          <button
            aria-label="Open menu"
            className="h-9 w-12 flex items-center justify-center"
            onClick={() => toggleDrawer(true)}
          >
            <RxHamburgerMenu className="text-xl" />
          </button>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="I'm searching for..."
            className="flex px-4 py-2 w-full outline-none rounded-md border border-gray-300"
            aria-label="Search products"
            autoComplete="off"
          />
        </div>
      </nav>

      {/* Drawer for Mobile Menu */}
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{ display: { md: "none" } }}
        aria-label="Mobile category drawer"
      >
        {loading ? (
          <div className="p-4 text-center text-gray-500">
            Loading categories...
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">
            Failed to load categories
          </div>
        ) : (
          CATEGORY_DATA && (
            <DrawerList CATEGORY_DATA={CATEGORY_DATA} onClose={toggleDrawer} />
          )
        )}
      </Drawer>
    </motion.header>
  );
};

export default Header;
