import { LoadingScreen } from "@/components/ui/loading";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { getProfileData } from "@/redux-toolkit/slice/userSlice";
import { RootState } from "@/redux-toolkit/store";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state: RootState) => state.user);

  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    dispatch(getProfileData()).finally(() => setCheckedAuth(true));
  }, [dispatch]);

  useEffect(() => {
    if (!checkedAuth) return;

    if (profile.isAuth) {
      if (
        location.pathname === "/auth" ||
        location.pathname === "/auth/" ||
        location.pathname === "/auth/login" ||
        location.pathname === "/auth/register"
      ) {
        navigate("/auth/profile");
      }
    } else {
      if (
        location.pathname === "/auth" ||
        location.pathname === "/auth/" ||
        location.pathname === "/auth/profile"
      ) {
        navigate("/auth/login");
      }
    }
  }, [checkedAuth, profile.isAuth, location.pathname, navigate]);

  if (!checkedAuth || profile.isLoading) {
    return (
      <section className="min-h-screen flex mx-auto">
        <LoadingScreen />
      </section>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <main>
        {profile.isAuth && <Header />}
        <Outlet />
        <Toaster />
        {profile.isAuth && <Footer />}
      </main>
    </AnimatePresence>
  );
};

export default AuthLayout;
