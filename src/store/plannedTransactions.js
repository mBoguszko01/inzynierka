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
        date: new Date("2024-12-10"),
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
      const repeatValues = {
        'Every month': 1,
        'Every 2 months': 2,
        'Every 6 months': 6
      };
      indexes.forEach(index => {
          var result = new Date(state.plannedTransactionsList[index].date);
          result.setMonth(result.getMonth() + repeatValues[state.plannedTransactionsList[index].repeat]);
          state.plannedTransactionsList[index].date = result;
      });
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
