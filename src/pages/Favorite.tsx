import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { FavoriteItem, ProductDataType } from "@/types/types";
import { path } from "@/utils/paths";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { getFavoriteProducts } from "@/redux-toolkit/slice/favoriteSlice";
import { LoadingScreen } from "@/components/ui/loading";
import { listContainer } from "@/utils/animateVariants";
import FavoriteProduct from "@/components/favorite/FavoriteProduct";
import { useAuthContext } from "@/auth/useAuthContext";
import FavoriteSummary from "@/components/favorite/FavoriteSummary";
import EmptyState from "@/components/favorite/EmptyState";

const Favorite = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuthContext();
  const favoriteState = useAppSelector((state: RootState) => state.favorite);

  const favorites = useMemo(() => {
    return favoriteState.favoriteProduct.favorites || [];
  }, [favoriteState.favoriteProduct]);

  //? --> Calculate total and discountTotal using useMemo for optimization

  const total = useMemo(() => {
    return favorites.reduce(
      (acc: number, { product }: { product: ProductDataType }) =>
        acc + product.price,
      0
    );
  }, [favorites]);

  const discountTotal = useMemo(() => {
    return favorites.reduce(
      (acc: number, { product }: { product: ProductDataType }) =>
        acc + (product.discount ? product.discountPrice : product.price),
      0
    );
  }, [favorites]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getFavoriteProducts());
    }
  }, [dispatch, isAuthenticated]);

  if (favoriteState.loading) {
    return (
      <section className="min-h-screen flex mx-auto">
        <LoadingScreen />
      </section>
    );
  }

  return (
    <section className="w-full mx-auto">
      <CustomBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Wishlist",
            href: path.urlPaths.wishlist,
          },
        ]}
      />

      {/* Favorite products */}
      <div className="max-lg:w-[90%] w-[80%] mx-auto">
        <Typography
          variant="h3"
          fontSize={32}
          color={NEUTRAL_COLOR.neutral800}
          fontWeight={600}
          sx={{ mb: "32px" }}
        >
          Favourite product
        </Typography>

        {favorites.length > 0 ? (
          <Grid
            container
            spacing={2}
            sx={{ mb: "80px" }}
            component={motion.div}
            variants={listContainer}
            initial="hidden"
            animate="visible"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              {favorites &&
                favorites.map((favorite: FavoriteItem) => (
                  <FavoriteProduct favorite={favorite} key={favorite._id} />
                ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FavoriteSummary
                key="summary"
                discountTotal={discountTotal}
                length={favorites.length}
                total={total}
              />
            </Grid>
          </Grid>
        ) : (
          <div className="mb-[20px]">
            <EmptyState
              image={isAuthenticated ? "/empty-wishlist.png" : "/error404.png"}
              message={
                isAuthenticated
                  ? "Your wishlist is empty!"
                  : "Please log in to view your wishlist."
              }
              buttonText={isAuthenticated ? "Start Shopping" : "Go to Login"}
              buttonLink={isAuthenticated ? "/shop" : "/auth/login"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorite;
