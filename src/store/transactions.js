import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTransactionToDatabase = createAsyncThunk(
  "transactions/addTransactionToDatabase",
  async (newTransaction, thunkAPI) => {
    console.log(newTransaction);
    newTransaction.asset_id = parseInt(newTransaction.asset_id);
    newTransaction.category_id = parseInt(newTransaction.category_id);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        newTransaction
      );
      return response.data; // Zwraca nowo dodaną transakcję
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactionsList: [],
  },
  reducers: {
    addNewElement(state, action) {
      state.transactionsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransactionToDatabase.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTransactionToDatabase.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactionsList.push(action.payload);
      })
      .addCase(addTransactionToDatabase.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
      });
  },
});
export const transactionActions = transactionsSlice.actions;
export default transactionsSlice.reducer;
