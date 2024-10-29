import { createSlice } from "@reduxjs/toolkit";


const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
        { date: new Date('2024-10-01'), price: 25.50, asset: 'ING', name: 'Netflix' },
        { date: new Date('2024-10-03'), price: 15.00, asset: 'Cash', name: 'Gym membership' },
    ],
  },
  reducers: {
    addNewElement(state, action) {
      state.plannedTransactionsList.push(action.payload);
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
