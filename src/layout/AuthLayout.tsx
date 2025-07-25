import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
      <Outlet />
    </AnimatePresence>
  );
};

export default AuthLayout;
