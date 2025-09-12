import { NEUTRAL_COLOR } from "@/constant";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const DeliveryInfo = () => {
  return (
    <List>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 0,
        }}
      >
        <Box
          sx={{
            width: "5px",
            height: "5px",
            backgroundColor: "#0C68F4",
            borderRadius: "50%",
            mr: "8px",
          }}
        ></Box>
        <ListItemText
          sx={{
            m: 0,
            "& .MuiTypography-root": {
              fontSize: {
                xs: "10px",
                md: "14px",
              },
              color: NEUTRAL_COLOR.neutral800,
              fontWeight: 500,
            },
          }}
        >
          Home delivery
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default DeliveryInfo;
