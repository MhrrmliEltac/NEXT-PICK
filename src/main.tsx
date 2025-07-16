import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import "./index.css";

// toCapitalize Prototype
import "./utils/toCapitalize.ts";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
