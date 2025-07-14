import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";

const Buttons = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [language, setLanguage] = useState<string>("AZ");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  {
    /* changed language */
  }
  const handleClose = (language: string) => {
    switch (language) {
      case "AZ":
        setLanguage("AZ");
        break;
      case "EN":
        setLanguage("EN");
        break;
      case "RU":
        setLanguage("RU");
        break;
    }

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <section className="pr-5">
      <div className="flex items-center">
        <div>
          <button onClick={handleClick} className="flex items-center gap-2">
            {language}
            <IoIosArrowDown size={20} />
          </button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              sx={{ fontSize: "12px" }}
              onClick={() => handleClose("AZ")}
            >
              AZ
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "12px" }}
              onClick={() => handleClose("EN")}
            >
              EN
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "12px" }}
              onClick={() => handleClose("RU")}
            >
              RU
            </MenuItem>
          </Menu>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip title="Favori" sx={{ color: "black" }}>
            <IconButton disableTouchRipple>
              <AiOutlineHeart />
            </IconButton>
          </Tooltip>
          <Tooltip title="User" sx={{ color: "black" }}>
            <IconButton disableTouchRipple>
              <LuUserRound />
            </IconButton>
          </Tooltip>
          <Tooltip title="Basket" sx={{ color: "black" }}>
            <IconButton disableTouchRipple>
              <SlBasket />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Buttons;
