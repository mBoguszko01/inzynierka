import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/transactions"
      );
      return response.data;
    }catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addTransactionToDatabase = createAsyncThunk(
  "transactions/addTransactionToDatabase",
  async (newTransaction, thunkAPI) => {
    newTransaction.asset_id = parseInt(newTransaction.asset_id);
    newTransaction.category_id = parseInt(newTransaction.category_id);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        newTransaction
      );
      return response.data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTransaction = createAsyncThunk(
  "assets/changeTransaction",
  async (transaction, thunkAPI) => {
    try {
      console.log(transaction);
      const id = transaction.id;
      const response = await axios.put(
        `http://localhost:5000/api/transactions/${id}`,
        { asset_id: transaction.asset_id, category_id: transaction.category_id, date: transaction.date, price: transaction.price}
      );
      return response.data;
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
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succedded";
        state.transactionsList = action.payload;
      })
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
      })
      .addCase(changeTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTransaction = action.payload;
        const existingTransaction = state.transactionsList.find(
          (transaction) => transaction.id === updatedTransaction.id
        );
        if (existingTransaction) {
          existingTransaction.asset_id = updatedTransaction.asset_id;
          existingTransaction.category_id = updatedTransaction.category_id;
          existingTransaction.date = updatedTransaction.date;
          existingTransaction.price = updatedTransaction.price;
        }
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });;
  },
});
export const transactionActions = transactionsSlice.actions;
export default transactionsSlice.reducer;
