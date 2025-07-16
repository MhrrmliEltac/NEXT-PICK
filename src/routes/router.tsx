import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Categories from "@/pages/Categories";
import CategoryProducts from "@/pages/CategoryProducts";

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
        path: "/categories/:slug",
        element: <CategoryProducts />,
      },
    ],
  },
]);

export default router;
