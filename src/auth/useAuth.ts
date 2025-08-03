import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const useSignIn = <T>(
  endpoint: string
): {
  data: T | null;
  loading: boolean;
  error: unknown;
  sendFormData: (formData: T) => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const sendFormData = async (formData: T) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        formData,
        config
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setData(response.data);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    sendFormData,
  };
};

export const useSignUp = <T>(
  endpoint: string
): {
  data: T | null;
  loading: boolean;
  error: unknown;
  sendFormDataByRegister: (formData: T) => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const sendFormDataByRegister = async (formData: T): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        formData,
        config
      );

      if (response.status === 200) {
        setData(response.data.message);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    sendFormDataByRegister,
  };
};
