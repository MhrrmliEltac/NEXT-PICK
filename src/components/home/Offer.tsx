import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { OfferType } from "../../types/types";

const OFFER_DATA: OfferType[] = [
  {
    id: 1,
    title: "Free shipping",
    subtitle: "On orders over $50",
    icon: "/truck-fast-icon.svg",
  },
  {
    id: 2,
    title: "Easy returns",
    subtitle: "Free within 30 days",
    icon: "/rotate-left.svg",
  },
  {
    id: 3,
    title: "Special gifts",
    subtitle: "Free with select orders.",
    icon: "/gift.svg",
  },
  {
    id: 4,
    title: "Support 24/7",
    subtitle: "Help when you need it.",
    icon: "/support.svg",
  },
  {
    id: 5,
    title: "Secured payment",
    subtitle: "100% safe.",
    icon: "/wallet-check.svg",
  },
];

const Offer = () => {
  return (
    <Card className="max-w-[1524px] w-[90%] max-lg:hidden mx-auto flex justify-between items-center mb-[40px]">
      {OFFER_DATA.map((offer, index) => (
        <motion.div
          key={offer.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src={offer.icon} alt="icon" />
              <Box>
                <Typography variant="h6" className="font-semibold text-[#444]">
                  {offer.title}
                </Typography>
                <Typography variant="subtitle1" className="text-sm text-[#777]">
                  {offer.subtitle}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </motion.div>
      ))}
    </Card>
  );
};

export default Offer;
