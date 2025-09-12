import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ActionButtons from "@/components/shopping-page/ActionButtons";
import BasketProductCard from "@/components/shopping-page/BasketProductCard";
import { Grid } from "@mui/material";

const ShoppingProcess = () => {
  const handleViewCart = () => {
    // TODO: implement view cart logic
  };
  const handleContinue = () => {
    // TODO: implement continue logic
  };

  return (
    <section>
      <CustomBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Shopping cart",
            href: "/shopping-cart",
          },
          {
            label: "Shopping process",
          },
        ]}
        title="Make Your Order Complete"
      />

      <Grid
        container
        sx={{
          mt: "32px",
          mb: "80px",
          maxWidth: "1524px",
          width: "90%",
          mx: "auto",
        }}
      >
        {/* Basket Product Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <BasketProductCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Action Buttons */}
          <ActionButtons
            onViewCart={handleViewCart}
            onContinue={handleContinue}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default ShoppingProcess;
