import {
  createSlice,
  createAsyncThunk,
  asyncThunkCreator,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBalance = createAsyncThunk(
  "balance/fetchBalance",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/cash-balance"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balanceHistory: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.balanceHistory = action.payload;
        console.log(action.payload);
      });
  },
});

export const balanceActions = balanceSlice.actions;
export default balanceSlice.reducer;
