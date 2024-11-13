import { createSlice } from "@reduxjs/toolkit";

const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
      {
        date: new Date("2024-10-31"),
        price: 100,
        asset: "ING",
        name: "Netflix subscription",
        category: "Grocieries",
        repeat: "Every month",
      },
      {
        date: new Date("2024-10-29"),
        price: 12,
        asset: "Cash",
        name: "Gym membership",
        category: "Petrol",
        repeat: "Every 6 months",
      },
      {
        date: new Date("2024-11-14"),
        price: 12,
        asset: "Cash",
        name: "Gym membership",
        category: "Petrol",
        repeat: "Every 6 months",
      },
      {
        date: new Date("2024-11-12"),
        price: 12,
        asset: "Cash",
        name: "Gym membership",
        category: "Petrol",
        repeat: "Every 6 months",
      },
    ],
    updatedTransactions: [],
  },
  reducers: {
    addNewElement(state, action) {
      state.plannedTransactionsList.push(action.payload);
    },
    updateTransactionDates(state, action) {
      const indexes = action.payload;
      indexes.forEach(index => {
          state.plannedTransactionsList[index].date = new Date('2024-12-01');
      });
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
