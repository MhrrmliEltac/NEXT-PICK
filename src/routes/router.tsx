import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/CategoriesPage";
import SubCategoryProducts from "@/pages/SubCategoryProducts";
import AuthLayout from "@/layout/AuthLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ProductDetail from "@/pages/ProductDetail";
import Favorite from "@/pages/Favorite";
import Profile from "@/pages/Profile";
import ForgotPassLayout from "@/layout/ForgotPassLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/subcategories",
        element: <SubCategoryProducts />,
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
        element: <ForgotPassLayout />
      }
    ],
  },
]);

export default router;
