import { config } from "@/config/config";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const usePost = <T>(endpoint: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const sendData = async <T>(data: T) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        data,
        config
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
        setError(error);
      } else if (error instanceof AxiosError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    sendData,
    data,
    loading,
    error,
  };
};
