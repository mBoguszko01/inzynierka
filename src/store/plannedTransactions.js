import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchPlannedTransactions = createAsyncThunk(
  "plannedTransactions/fetchPlannedTransactions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/planned-transactions"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updatePlannedTransaction = createAsyncThunk(
  "plannedTransactions/updatePlannedTransaction",
  async (updatedTransaction, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/planned-transactions/${updatedTransaction.id}`,
        updatedTransaction
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [],
    status: "idle",
    error: null,
    updatedTransactions: [],
  },
  reducers: {
    addNewElement(state, action) {
      state.plannedTransactionsList.push(action.payload);
    },
    updateTransactionDates(state, action) {
      const indexes = action.payload;
      indexes.forEach((index) => {
        const transaction = state.plannedTransactionsList[index];
        const firstDate = new Date(transaction.date);

        const day = firstDate.getDate();
        if (transaction.repeat_unit === "months") {
          while (true) {
            firstDate.setMonth(
              firstDate.getMonth() + parseInt(transaction.repeat_value)
            );
            if (firstDate > new Date()) {
              break;
            }
          }
          if (firstDate.getDate() != day) {
            firstDate.setDate(0);
          }
        } else {
          let addingValue = transaction.repeat_value;
          transaction.repeat_unit === "weeks"
            ? (addingValue *= 7)
            : addingValue;
          firstDate.setDate(firstDate.getDate() + addingValue);
        }
        firstDate.setHours(12);
        transaction.date = new Date(firstDate).toISOString();
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlannedTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlannedTransactions.fulfilled, (state, action) => {
        state.status = "succedded";
        state.plannedTransactionsList = action.payload;
      })
      .addCase(fetchPlannedTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
