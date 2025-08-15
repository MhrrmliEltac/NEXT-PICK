import { useContext } from "react";
import { AuthContext } from "./context/authContext";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
