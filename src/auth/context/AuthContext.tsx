import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import { getProfileData } from "@/redux-toolkit/slice/userSlice";
import { RootState } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
