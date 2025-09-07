import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { FavoriteItem } from "@/types/types";
import { path } from "@/utils/paths";
import { Grid, Typography } from "@mui/material";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { getFavoriteProducts } from "@/redux-toolkit/slice/favoriteSlice";
import { LoadingScreen } from "@/components/ui/loading";
import { listContainer } from "@/utils/animateVariants";
import FavoriteProduct from "@/components/favorite/FavoriteProduct";
import { useAuthContext } from "@/auth/useAuthContext";
import FavoriteSummary from "@/components/favorite/FavoriteSummary";

const Favorite = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuthContext();
  const favoriteState = useAppSelector((state: RootState) => state.favorite);

  const favorites = useMemo(() => {
    return favoriteState.favoriteProduct.favorites || [];
  }, [favoriteState.favoriteProduct]);

  //? --> Calculate total and discountTotal using useMemo for optimization

  const total = useMemo(() => {
    return favorites.reduce(
      (acc: number, favorite: FavoriteItem) => acc + favorite.product.price,
      0
    );
  }, [favorites]);

  const discountTotal = useMemo(() => {
    return favorites.reduce(
      (acc: number, favorite: FavoriteItem) =>
        acc +
        (favorite.product.discount
          ? favorite.product.discountPrice
          : favorite.product.price),
      0
    );
  }, [favorites]);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);

  if (favoriteState.loading) {
    return (
      <section className="min-h-screen flex mx-auto">
        <LoadingScreen />
      </section>
    );
  }

  return (
    <section className="w-full mx-auto">
      <div className="relative min-h-[100px]">
        <CustomBreadcrumb
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Wishlist",
              href: path.urlPaths.wishlist,
            },
          ]}
        />
      </div>

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
                favorites.length > 0 &&
                favorites.map((favorite: FavoriteItem) => (
                  <FavoriteProduct favorite={favorite} key={favorite._id} />
                ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FavoriteSummary
                key={favorites._id}
                discountTotal={discountTotal}
                length={favorites.length}
                total={total}
              />
            </Grid>
          </Grid>
        ) : (
          <div className="mb-[20px]">
            {isAuthenticated ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <img
                  src="/empty-wishlist.png"
                  alt="Empty Wishlist"
                  className="w-48 h-48 mb-4"
                />
                <Typography
                  variant="h6"
                  color={NEUTRAL_COLOR.neutral800}
                  sx={{ mb: 2 }}
                >
                  Your wishlist is empty!
                </Typography>
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-[#1A4DE1] hover:bg-[#163dc2] text-white py-2 px-4 rounded-md text-sm transition duration-300"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <img
                  src="/error404.png"
                  alt="Login to Wishlist"
                  className="w-48 h-48 mb-4"
                />
                <Typography
                  variant="h6"
                  color={NEUTRAL_COLOR.neutral800}
                  sx={{ mb: 2 }}
                >
                  Please log in to view your wishlist.
                </Typography>
                <button
                  onClick={() => navigate("/auth/login")}
                  className="bg-[#1A4DE1] hover:bg-[#163dc2] text-white py-2 px-4 rounded-md text-sm transition duration-300"
                >
                  Go to Login
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorite;
