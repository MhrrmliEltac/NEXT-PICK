import { NEUTRAL_COLOR } from "@/constant";
import { Services } from "@/types/types";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";



const ServiceList = ({ services }: { services: Services[] }) => {
  return (
    <List>
      {services.map((service: Services) => {
        const Icon = service.Icon;
        return (
          <ListItem
            key={service.id}
            sx={{ display: "flex", gap: "4px", m: 0, p: 0 }}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <Icon size={15} color={NEUTRAL_COLOR.neutral500} />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                  color: NEUTRAL_COLOR.neutral500,
                  fontWeight: 400,
                },
              }}
            >
              {service.description}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ServiceList;
