import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/CategoriesPage";
import SubCategoryProducts from "@/pages/SubCategoryProducts";

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
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
