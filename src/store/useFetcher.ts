import axios, { AxiosError } from "axios";
import { create } from "zustand";

interface StateType {
  data: {
    products: any;
    category: any;
    subcategory: any;
  };
  loading: boolean;
  error: unknown;
  fetchData: (key: keyof StateType["data"], endpoint: string) => void;
}

export const useFetchStore = create<StateType>((set) => ({
  data: {
    products: [],
    category: null,
    subcategory: null,
  },
  loading: false,
  error: null,

  fetchData: async (key, endpoint: string) => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${endpoint}`
      );
      if (response.status === 200) {
        const productsByCategory = response.data;
        set((state) => ({
          data: { ...state.data, [key]: productsByCategory },
          loading: false,
        }));
      }
    } catch (error) {
      const err = error as AxiosError;
      set({
        error: err,
        loading: false,
      });
    }
  },
}));
