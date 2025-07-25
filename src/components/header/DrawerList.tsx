import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import type { CategoryType } from "@/types/types";
import { MdOutlineCancel, MdOutlineExpandMore } from "react-icons/md";
import Logo from "./Logo";
import { getCategoryIcon } from "@/helpers/getCategoryIcon";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { path } from "@/utils/paths";

const DrawerList = ({
  CATEGORY_DATA,
  onClose,
}: {
  CATEGORY_DATA: CategoryType[] | null;
  onClose: (newValue: boolean) => void;
}) => {
  return (
    <Box
      sx={{ width: "256px", px: "15px", position: "relative" }}
      role="presentation"
    >
      <Button
        sx={{
          position: "absolute",
          right: 0,
          top: 2,
          mb: "20px",
          "&:hover": {
            background: NEUTRAL_COLOR.neutral130,
          },
        }}
        onClick={() => onClose(false)}
      >
        <MdOutlineCancel size={25} />
      </Button>
      <div className="mt-[40px] px-4">
        <Logo />
      </div>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          width: "100%",
          mt: "25px",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore size={30} color="#1A4DE1" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" color="#1A4DE1" fontSize={18}>
            Products
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {CATEGORY_DATA &&
            CATEGORY_DATA.length > 0 &&
            CATEGORY_DATA.map((category: CategoryType, index: number) => (
              <List sx={{ py: "0px" }} key={category._id}>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    href={
                      typeof path.urlPaths.category.list === "function"
                        ? path.urlPaths.category.list(category.title)
                        : path.urlPaths.category.list
                    }
                    sx={{
                      "&:hover": {
                        background: NEUTRAL_COLOR.neutral150,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ px: "0px" }}>
                      {getCategoryIcon(category.title, 25)}
                    </ListItemIcon>
                    <ListItemText primary={category.title} />
                  </ListItemButton>
                </ListItem>
              </List>
            ))}
        </AccordionDetails>
      </Accordion>
      {/* <Divider /> */}
    </Box>
  );
};

export default DrawerList;
