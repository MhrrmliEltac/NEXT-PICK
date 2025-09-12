import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ShoppingProductCard from "@/components/shopping-page/ShoppingProductCard";
import CheckoutCard from "@/components/shopping-page/CheckoutCard";
import { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { Operation } from "@/types/types";
import { useNavigate } from "react-router-dom";

const ShoppingPage = () => {
  const navigate = useNavigate();
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
    [quantity]
  );

  const handleContinueOrder = () => {
    navigate("/shopping-process");
  };

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
