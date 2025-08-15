import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const useSignIn = <T>(
  endpoint: string
): {
  data: T | null;
  loading: boolean;
  error: unknown;
  sendFormData: (formData: T) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const sendFormData = async (formData: T): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        formData,
        config
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        throw error; // Re-throw to handle in component
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

export const useForgotPassword = <T>(endpoint: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const sendFormDataByForgotPassword = async (
    formData: T
  ): Promise<{ success: boolean; message: string | null }> => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        formData,
        config
      );

      if (response.status === 200) {
        return { success: true, message: response.data.message };
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        return { success: false, message: error.response?.data.message };
      }
    } finally {
      setLoading(false);
    }
    return { success: false, message: null };
  };

  return {
    loading,
    error,
    sendFormDataByForgotPassword,
  };
};
