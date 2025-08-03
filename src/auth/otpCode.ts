import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const sendOtp = async (
  endpoint: string,
  email: string
): Promise<{ proceedToSignUp: boolean; success: boolean }> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      { email },
      config
    );

    if (response.status === 200) {
      toast.success(response.data.message);
    }

    if (response.data.proceedToSignUp) {
      return {
        proceedToSignUp: response.data.proceedToSignUp,
        success: false,
      };
    }

    return {
      proceedToSignUp: false,
      success: true,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message);
    }
    return {
      proceedToSignUp: false,
      success: false,
    };
  }
};

export const verifyOtp = async (
  endpoint: string,
  email: string,
  otpCode: string
): Promise<void> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      {
        email,
        otpCode,
      },
      config
    );

    if (response.status === 200) {
      toast.success(response.data.message);
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message);
    }
  }
};
