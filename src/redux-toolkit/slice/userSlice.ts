import { FormData } from "@/types/types";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { path } from "@/utils/paths";
import api from "@/api/api";

interface ActionType {
  success: boolean;
  user: FormData;
}

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
  ActionType,
  void,
  { rejectValue: string }
>("user/profile", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(path.endpoints.auth.profile, {
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      withCredentials: true,
    });
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
      (state: UserState, action: PayloadAction<ActionType>) => {
        state.isLoading = false;
        state.isAuth = action.payload.success;
        state.user = action.payload.user;
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

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
