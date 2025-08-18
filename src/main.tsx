import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";

// toCapitalize Prototype
import "./utils/toCapitalize.ts";
import { store } from "./redux-toolkit/store.ts";
import { AuthProvider } from "./auth/context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);
