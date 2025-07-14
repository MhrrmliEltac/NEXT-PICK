import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useFetch = (
  endpoint: string
): { data: any; loading: boolean; error: unknown } => {
  const [data, setData] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<Error | AxiosError>();

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${endpoint}`
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
      } else if (error instanceof AxiosError) {
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
