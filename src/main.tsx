import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import "./index.css";
import { Provider } from "react-redux";

// toCapitalize Prototype
import "./utils/toCapitalize.ts";
import { store } from "./redux-toolkit/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
