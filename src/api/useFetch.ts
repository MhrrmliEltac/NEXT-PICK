import { AxiosError } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T>(
  endpoint: string
): { data: T | null; loading: boolean; error: unknown } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<Error | AxiosError>();

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error: unknown) {
      if (error instanceof Error || error instanceof AxiosError) {
        setError(error);
        console.error(error);
      }
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {
    data,
    loading,
    error,
  };
};
