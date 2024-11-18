import { createSlice } from "@reduxjs/toolkit";

const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
      {name: "Rent",
      asset: "ING",
      category: "Housing",
      date: "2024-01-31T12:00:00.000Z", // ISO format
      price: 1000,
      repeatValue: 1, // np. co 1 miesiąc
      repeatUnit: "months", // możliwe wartości: "days", "weeks", "months"
      logoUrl: "https://example.com/logo.png",}
    ],
    updatedTransactions: [],
  },
  reducers: {
    addNewElement(state, action) {
      state.plannedTransactionsList.push(action.payload);
    },
    updateTransactionDates(state, action) { 
      const indexes = action.payload;
      indexes.forEach((index) => {
        const firstDate = new Date(state.plannedTransactionsList[index].date);
        const day = firstDate.getDate();
        if (state.plannedTransactionsList[index].repeatUnit === "months") {
          firstDate.setMonth(firstDate.getMonth() + parseInt(state.plannedTransactionsList[index].repeatValue) < new Date() ?  new Date().getMonth() : new Date().getMonth() + 1);
          if(firstDate.getDate() != day){
            firstDate.setDate(0);
          }
        } else {
          let addingValue = state.plannedTransactionsList[index].repeatValue;
          state.plannedTransactionsList[index].repeatUnit === "weeks"
            ? (addingValue *= 7)
            : addingValue;
            firstDate.setDate(firstDate.getDate() + addingValue);
        }
        firstDate.setHours(12);
        state.plannedTransactionsList[index].date = new Date(firstDate).toISOString();
      });
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
