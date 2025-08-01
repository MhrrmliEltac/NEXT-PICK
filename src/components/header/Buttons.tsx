import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { Badge } from "../ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { path } from "@/utils/paths";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";

const Buttons = () => {
  const navigate = useNavigate();
  const [count, _] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [language, setLanguage] = useState<string>("AZ");

  const productData = useAppSelector((state: RootState) => state.favorite);

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
        <div className="max-md:hidden">
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
            <IconButton
              disableTouchRipple
              sx={{ position: "relative" }}
              onClick={() => navigate("/wishlist")}
            >
              <Badge
                className="h-[18px] min-w-[18px] rounded-full px-1 text-[10px] font-mono tabular-nums absolute top-1 right-0 flex items-center justify-center"
                variant="destructive"
              >
                {productData.favoriteProduct.length ?? 0}
              </Badge>
              <AiOutlineHeart />
            </IconButton>
          </Tooltip>
          <Tooltip title="User" sx={{ color: "black" }}>
            <Link to={path.urlPaths.auth.login}>
              <IconButton disableTouchRipple>
                <LuUserRound />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Basket" sx={{ color: "black" }}>
            <IconButton disableTouchRipple sx={{ position: "relative" }}>
              <Badge
                className="h-[18px] min-w-[18px] rounded-full px-1 text-[10px] font-mono tabular-nums absolute top-1 right-0 flex items-center justify-center"
                variant="destructive"
              >
                {count}
              </Badge>
              <SlBasket />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Buttons;
