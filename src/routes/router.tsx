import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "@/pages/NotFound";
import AuthLayout from "@/layout/AuthLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Favorite from "@/pages/Favorite";
import ForgotPassLayout from "@/layout/ForgotPassLayout";
import ContactUs from "@/pages/ContactUs";
import About from "@/pages/About";
import { lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/ui/loading";
import { ErrorBoundary } from "./ErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const Categories = lazy(() => import("@/pages/CategoriesPage"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const SubCategoryProducts = lazy(() => import("@/pages/SubCategoryProducts"));
const Profile = lazy(() => import("@/pages/Profile"));
const ShoppingPage = lazy(() => import("@/pages/ShoppingPage"));
const ShoppingProcess = lazy(() => import("@/pages/ShoppingProcess"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <section className="min-h-screen flex mx-auto">
                <LoadingScreen />
              </section>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense
            fallback={
              <section className="min-h-screen flex mx-auto">
                <LoadingScreen />
              </section>
            }
          >
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/subcategories",
        element: (
          <Suspense
            fallback={
              <section className="min-h-screen flex mx-auto">
                <LoadingScreen />
              </section>
            }
          >
            <SubCategoryProducts />
          </Suspense>
        ),
      },
      {
        path: "/product/:productName",
        element: <ProductDetail />,
      },
      {
        path: "/wishlist",
        element: <Favorite />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/shopping-cart",
        element: (
          <Suspense
            fallback={
              <section className="min-h-screen flex mx-auto">
                <LoadingScreen />
              </section>
            }
          >
            <ShoppingPage />
          </Suspense>
        ),
      },
      {
        path: "/shopping-process",
        element: (
          <Suspense
            fallback={
              <section className="min-h-screen flex mx-auto">
                <LoadingScreen />
              </section>
            }
          >
            <ShoppingProcess />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassLayout />,
      },
    ],
  },
]);

export default router;
