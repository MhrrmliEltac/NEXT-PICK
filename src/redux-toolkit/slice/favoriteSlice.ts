import { ProductDataType } from "@/types/types";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { path } from "@/utils/paths";
import { config } from "@/config";

interface FavoriteState {
  favoriteProduct: ProductDataType[];
  loading: boolean;
  error: unknown;
  message: string;
}

const initialState: FavoriteState = {
  favoriteProduct: [],
  loading: false,
  error: null,
  message: "",
};

export const getFavoriteProducts = createAsyncThunk<ProductDataType[]>(
  "favorite/getFavoriteProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${
          path.endpoints.favorite.getFavorites
        }`,
        config
      );

      if (response.status === 200) {
        return response.data as FavoriteState["favoriteProduct"];
      }
      return [];
    } catch (error) {
      if (error instanceof AxiosError) {
        // toast.error(error.response?.data.message);
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const addFavoriteProduct = createAsyncThunk<string, string>(
  "favorite/addFavoriteProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${path.endpoints.favorite.addFavorite}`,
        {
          productId,
        },
        config
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return rejectWithValue(error.response?.data.message);
      }
      toast.error("An unknown error occurred");
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const removeFavoriteProduct = createAsyncThunk<string, string>(
  "favorite/removeFavoriteProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }${path.endpoints.favorite.removeFavorite(productId)}`,
        config
      );

      if (response.status === 200) {
        toast.success("Product successfully removed from favorite");
        return response.data;
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
      toast.error("An unknown error occurred");
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const favoriteSlice: Slice = createSlice({
  name: "favoriteProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteProducts.pending, (state: FavoriteState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getFavoriteProducts.fulfilled,
        (state: FavoriteState, action: PayloadAction<ProductDataType[]>) => {
          state.loading = false;
          state.favoriteProduct = action.payload;
          state.error = null;
        }
      )
      .addCase(
        getFavoriteProducts.rejected,
        (state: FavoriteState, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
    builder
      .addCase(addFavoriteProduct.pending, (state: FavoriteState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFavoriteProduct.fulfilled, (state: FavoriteState) => {
        state.loading = false;
        state.message = "Product added to favorite";
        state.error = null;
      })
      .addCase(
        addFavoriteProduct.rejected,
        (state: FavoriteState, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
    builder
      .addCase(removeFavoriteProduct.pending, (state: FavoriteState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFavoriteProduct.fulfilled, (state: FavoriteState) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(
        removeFavoriteProduct.rejected,
        (state: FavoriteState, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectFavorite = (state: RootState) => state.favorite.value;
export default favoriteSlice.reducer;
