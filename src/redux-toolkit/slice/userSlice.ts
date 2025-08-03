import { FormData } from "@/types/types";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface UserState {
  user: FormData | null;
  isLoading: boolean;
  isAuth: boolean;
  error: unknown;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: true,
  error: null,
};

export const getProfileData = createAsyncThunk<
  FormData,
  void,
  { rejectValue: string }
>("user/profile", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/profile`,
      {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || "Xəta baş verdi");
    }
    return rejectWithValue("Naməlum xəta baş verdi");
  }
});

export const userSlice: Slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileData.pending, (state: UserState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      getProfileData.fulfilled,
      (state: UserState, action: PayloadAction<FormData>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
      }
    );
    builder.addCase(
      getProfileData.rejected,
      (state: UserState, action: PayloadAction<string | undefined>) => {
        state.error = action.payload;
        state.isAuth = false;
        state.isLoading = false;
      }
    );
  },
});

export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
