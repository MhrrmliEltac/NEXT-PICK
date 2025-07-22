import { CategoryType, ProductType, SubCategoryDataType } from "@/types/types";
import axios, { AxiosError } from "axios";
import { create } from "zustand";

interface StateType {
  data: {
    products: ProductType;
    category: CategoryType[];
    subcategory: SubCategoryDataType[];
  };
  loading: boolean;
  error: unknown;
  fetchData: (key: keyof StateType["data"], endpoint: string) => void;
}

export const useFetchStore = create<StateType>((set) => ({
  data: {
    products: {
      currentPage: 0,
      totalPages: 0,
      products: [],
      limit: 12,
    },
    category: [],
    subcategory: [],
  },
  loading: false,
  error: null,

  fetchData: async (key, endpoint: string) => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
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
