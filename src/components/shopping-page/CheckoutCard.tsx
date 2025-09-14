import { formatPrice } from "@/helpers/formatPrice";
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { HeadphonesIcon, Wallet } from "lucide-react";
import { FaRotateLeft } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import GradientDivider from "../general/GradientDivider";
import { ProductDataType, Services } from "@/types/types";
import ServiceList from "./ServiceList";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { useMemo } from "react";

const services: Services[] = [
  {
    id: 1,
    Icon: HeadphonesIcon,
    description: "Free shipping for all orders over €50",
  },
  {
    id: 2,
    Icon: FaRotateLeft,
    description: "30 days returns for on exchange product",
  },
  {
    id: 3,
    Icon: IoGiftOutline,
    description: "Free with select orders.",
  },
  {
    id: 4,
    Icon: Wallet,
    description: "Support 24/7",
  },
];

const CheckoutCard = ({ onContinueOrder }: { onContinueOrder: () => void }) => {
  const basketState = useAppSelector((state: RootState) => state.basket);

  const { total, originalTotal, discountAmount } = useMemo(() => {
    const items = basketState.basketProduct?.basket?.items || [];

    let originalTotal = 0;
    let total = 0;

    items.forEach(
      ({
        product,
        quantity,
      }: {
        product: ProductDataType;
        quantity: number;
      }) => {
        const productTotal = product.price * quantity;
        const discountedTotal =
          (product.discount ? product.discountPrice : product.price) * quantity;

        originalTotal += productTotal;
        total += discountedTotal;
      }
    );

    const discountAmount = originalTotal - total;

    return { total, originalTotal, discountAmount };
  }, [basketState.basketProduct]);

  return (
    <Card className=" gap-4 xl:sticky static top-[120px] !border border-[#E5E5E5] !shadow-sm transition-all duration-300 lg:max-w-[392px] w-full">
      <CardContent>
        <List sx={{ mb: "32px" }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText>Subtotal</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "end" }}>
              {formatPrice(originalTotal)}
            </ListItemText>
          </ListItem>
          <GradientDivider />
          <ListItem sx={{ px: 0 }}>
            <ListItemText>Shipping cost</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "end" }}>
              Free
            </ListItemText>
          </ListItem>
          <GradientDivider />
          <ListItem sx={{ px: 0 }}>
            <ListItemText>Discount amount</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "end" }}>
              (25%)€{discountAmount}
            </ListItemText>
          </ListItem>
          <GradientDivider />
          <ListItem sx={{ px: 0 }}>
            <ListItemText>Total</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "end" }}>
              {formatPrice(total)}
            </ListItemText>
          </ListItem>
        </List>
        <Button
          disableTouchRipple
          variant="contained"
          sx={{
            width: "100%",
            background: "#1A4DE1",
            py: "8px",
            px: "16px",
            borderRadius: "8px",
            maxWidth: "344px",
            maxHeight: "48px",
            mb: "32px",
          }}
          onClick={onContinueOrder}
        >
          <Typography
            variant="button"
            fontSize={{
              xs: "12px",
              md: "16px",
            }}
            fontWeight={400}
            color="white"
            component="span"
            sx={{ textTransform: "none" }}
          >
            Continue to order
          </Typography>
        </Button>

        {/* Service List */}
        <ServiceList services={services} />
      </CardContent>
    </Card>
  );
};

export default CheckoutCard;
