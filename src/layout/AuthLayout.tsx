import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/auth" || location.pathname === "/auth/") {
      navigate("/auth/login");
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <main>
        <Outlet />
        <Toaster />
      </main>
    </AnimatePresence>
  );
};

export default AuthLayout;
