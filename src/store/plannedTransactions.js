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

export const addPlannedTransactionToDB = createAsyncThunk(
  "plannedTransactions/addPllanedTransactionToDB",
  async (newPlannedTransaction, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/planned-transactions",
        newPlannedTransaction
      );

      return response.data;
    } catch (error) {
      console.error("Error adding planned transaction:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updatePlannedTransactionsDate = createAsyncThunk(
  "plannedTransactions/updatePlannedTransactionsDate",
  async (indexes, { getState, dispatch, rejectWithValue }) => {
    const state = getState().plannedTransactions;

    try {
      const updatedTransactions = indexes.map((index) => {
        const transaction = { ...state.plannedTransactionsList[index] };
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
          if (firstDate.getDate() !== day) {
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

        return transaction;
      });

      updatedTransactions.forEach((updatedTransaction) => {
        dispatch(
          plannedTransactionActions.updateSingleTransaction({
            id: updatedTransaction.id,
            updatedTransaction,
          })
        );
      });
      const responses = await Promise.all(
        updatedTransactions.map((transaction) => {
          console.log(transaction);
          axios.put(
            `http://localhost:5000/api/planned-transactions/${transaction.transaction_id}`,
            transaction
          );
        })
      );
      return responses.map((response) => response.data);
    } catch (error) {
      console.error("Error updating planned transactions:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const changePlannedTransaction = createAsyncThunk(
  "plannedTransactions/changePlannedTransaction",
  async (plannedTransaction, thunkAPI) => {
    try {
      console.log(plannedTransaction);
      const id = plannedTransaction.id;
      const response = await axios.put(
        `http://localhost:5000/api/plannedTransactions/${id}`,
        {
          asset_id: plannedTransaction.asset_id,
          category_id: plannedTransaction.category_id,
          date: plannedTransaction.date,
          logo_url: plannedTransaction.logoUrl,
          name: plannedTransaction.name,
          price: plannedTransaction.price,
          repeat_unit: plannedTransaction.repeatUnit,
          repeat_value: plannedTransaction.repeatValue
        }
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
    updateSingleTransaction(state, action) {
      const { id, updatedTransaction } = action.payload;
      const index = state.plannedTransactionsList.findIndex(
        (transaction) => transaction.id === id
      );
      if (index !== -1) {
        state.plannedTransactionsList[index] = updatedTransaction;
      }
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
      })
      .addCase(updatePlannedTransactionsDate.fulfilled, (state, action) => {})
      .addCase(updatePlannedTransactionsDate.rejected, (state, action) => {})
      .addCase(addPlannedTransactionToDB.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPlannedTransactionToDB.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plannedTransactionsList.push(action.payload); // Dodaj nową transakcję do Store
      })
      .addCase(addPlannedTransactionToDB.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Przechowaj komunikat błędu
      });
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
