import { config } from "@/config";
import { ProductDataType } from "@/types/types";
import { path } from "@/utils/paths";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { RootState } from "../store";

interface BasketProduct {
  _id: string;
  createdAt: string;
  updatedAt: string;
  items: {
    product: ProductDataType;
    quantity: number;
  }[];
  user: string;
}

interface BasketStateType {
  basketProduct: BasketProduct;
  loading: boolean;
  error: unknown;
}

interface ParametrType {
  productId: string;
  quantity: number;
}

const initialState: BasketStateType = {
  basketProduct: {
    _id: "",
    createdAt: "",
    items: [],
    updatedAt: "",
    user: "",
  },
  loading: false,
  error: null,
};

export const getBasketProduct = createAsyncThunk<BasketProduct>(
  "basket/getBasketProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${path.endpoints.basket.getBasket}`,
        config
      );

      if (response.status === 200) {
        return response.data as BasketStateType["basketProduct"];
      }
      return {
        _id: "",
        createdAt: "",
        items: [],
        updatedAt: "",
        user: "",
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const addBasketProduct = createAsyncThunk<string, ParametrType>(
  "basket/addBasketProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${path.endpoints.basket.addBasket}`,
        data,
        config
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteBasketProduct = createAsyncThunk<string, string>(
  "basket/deleteBasketProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}${path.endpoints.basket.removeBasket(
          productId
        )}`,
        config
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const basketSlice: Slice = createSlice({
  name: "basketProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasketProduct.pending, (state: BasketStateType) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getBasketProduct.fulfilled,
        (state: BasketStateType, action: PayloadAction<BasketProduct>) => {
          state.loading = false;
          state.basketProduct = action.payload;
          state.error = null;
        }
      )
      .addCase(
        getBasketProduct.rejected,
        (state: BasketStateType, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
    builder
      .addCase(addBasketProduct.pending, (state: BasketStateType) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBasketProduct.fulfilled, (state: BasketStateType) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(
        addBasketProduct.rejected,
        (state: BasketStateType, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
    builder
      .addCase(deleteBasketProduct.pending, (state: BasketStateType) => {
        state.loading = true;
      })
      .addCase(deleteBasketProduct.fulfilled, (state: BasketStateType) => {
        state.loading = false;
      });
  },
});

export const selectBasket = (state: RootState) => state.basket;
export default basketSlice.reducer;
