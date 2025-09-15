import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ShoppingProductCard from "@/components/shopping-page/ShoppingProductCard";
import CheckoutCard from "@/components/shopping-page/CheckoutCard";
import { useCallback, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Operation, ProductDataType } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import {
  deleteBasketProduct,
  getBasketProduct,
} from "@/redux-toolkit/slice/basketSlice";
import { toast } from "sonner";
import { RootState } from "@/redux-toolkit/store";
import { LoadingScreen } from "@/components/ui/loading";
import { NEUTRAL_COLOR } from "@/constant";

const ShoppingPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { basketProduct, loading } = useAppSelector(
    (state: RootState) => state.basket
  );
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = useCallback(
    (operation: Operation) => {
      switch (operation) {
        case "increment":
          setQuantity((prev: number) => prev + 1);
          return;
        case "decrement":
          if (quantity > 0) setQuantity((prev: number) => prev - 1);
          return;
      }
    },
    [quantity, setQuantity]
  );

  const handleRemoveProductFromBasket = (productId: ProductDataType["_id"]) => {
    dispatch(deleteBasketProduct(productId))
      .unwrap()
      .then(() => {
        toast.success("Məhsul uğurla silindi");
        dispatch(getBasketProduct());
      })
      .catch((error) => {
        console.error("Silinmə zamanı xəta baş verdi:", error);
      });
  };

  const handleContinueOrder = useCallback(() => {
    navigate("/shopping-process");
  }, [navigate]);

  useEffect(() => {
    dispatch(getBasketProduct());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="min-h-screen flex mx-auto">
        <LoadingScreen />
      </section>
    );
  }

  if (basketProduct.basket && basketProduct.basket.items.length === 0) {
    return (
      <section className="min-h-screen flex mx-auto items-center justify-center">
        <Typography
          variant="h3"
          color={NEUTRAL_COLOR.neutral650}
          fontSize={{
            xs: "15px",
            md: "24px",
          }}
        >
          Səbətiniz boşdur
        </Typography>
      </section>
    );
  }

  return (
    <section>
      <CustomBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Shopping cart",
          },
        ]}
        title="Shopping cart"
      />

      <div className="max-w-[1524px] w-[90%]  mx-auto mb-[80px] mt-[80px] transition-all duration-300">
        <Grid container justifyContent="space-between">
          {/* Shopping Card */}
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
            sx={{ transition: "all 0.3s ease" }}
          >
            <ShoppingProductCard
              quantity={quantity}
              handleClick={handleClick}
              onRemove={handleRemoveProductFromBasket}
            />
          </Grid>

          {/* Checkout Card */}
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
            sx={{ transition: "all 0.3s ease" }}
            justifyItems="flex-end"
            position="relative"
          >
            <CheckoutCard onContinueOrder={handleContinueOrder} />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ShoppingPage;
