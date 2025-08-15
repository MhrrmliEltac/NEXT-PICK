import { LoadingScreen } from "@/components/ui/loading";
import { useAuthContext } from "@/auth/useAuthContext";
import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { path } from "@/utils/paths";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthContext();

  useEffect(() => {
    const isAuthRoute = location.pathname.startsWith('/auth');
    const isLoginRoute = location.pathname === "/auth/login" || location.pathname === "/auth/register";
    const isProfileRoute = location.pathname === "/auth/profile";

    if (isAuthenticated) {
      if (isAuthRoute && (isLoginRoute || location.pathname === "/auth" || location.pathname === "/auth/")) {
        navigate(path.urlPaths.auth.profile);
      }
    } else {
      if (isProfileRoute || (isAuthRoute && location.pathname === "/auth" || location.pathname === "/auth/")) {
        navigate(path.urlPaths.auth.login);
      }
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex mx-auto">
        <LoadingScreen />
      </section>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <main>
        {isAuthenticated && <Header />}
        <Outlet />
        <Toaster />
        {isAuthenticated && <Footer />}
      </main>
    </AnimatePresence>
  );
};

export default AuthLayout;
