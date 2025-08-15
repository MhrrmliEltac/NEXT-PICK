import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const resetPassword = async (
  endpoint: string,
  password: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      { password },
      config
    );

    if (response.status === 200) {
      toast.success(response.data.message);
      return { success: true, message: response.data.message };
    }
    return { success: false, message: "Failed to reset password" };
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message);
      return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: "Failed to reset password" };
  }
};
