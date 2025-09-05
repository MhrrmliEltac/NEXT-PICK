import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const signOut = async (
  endpoint: string
): Promise<{ success: boolean }> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      {},
      config
    );

    if (response.status === 200) {
      toast.success(response.data.message);
      // Redirect to home after successful sign out
      window.location.href = "/";
    }
    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.message);
    }
    return { success: false };
  }
};
