import { ProductDataType } from "@/types/types";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "sonner";

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

export const favoriteSlice: Slice = createSlice({
  name: "favoriteProduct",
  initialState,
  reducers: {
    addFavorite: (
      state: FavoriteState,
      action: PayloadAction<ProductDataType>
    ) => {
      //? Bu mehsulun array-de olub olmadigni yoxlayir
      const existProduct = state.favoriteProduct.some(
        (item: ProductDataType) => item._id === action.payload._id
      );

      if (!existProduct) {
        state.favoriteProduct.push(action.payload);
        toast.success("Product successfully added");
      } else {
        toast.info("Product exist");
      }
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite.value;
export default favoriteSlice.reducer;
