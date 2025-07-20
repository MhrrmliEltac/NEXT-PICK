import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryProducts from "@/pages/CategoryProducts";
import NotFound from "@/pages/NotFound";
import Categories from "@/pages/Categories";

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
        element: <CategoryProducts />,
      },
    ],
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
