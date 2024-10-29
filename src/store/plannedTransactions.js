import { createSlice } from "@reduxjs/toolkit";


const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
        { date: new Date('2024-10-01'), price: 25.50, asset: 'ING', category: 'Groceries' },
        { date: new Date('2024-10-03'), price: 15.00, asset: 'Cash', category: 'Transportation' },
        { date: new Date('2024-10-05'), price: 50.00, asset: 'Revolut', category: 'Entertainment' },
        { date: new Date('2024-10-07'), price: 30.00, asset: 'Cash', category: 'Utilities' },
        { date: new Date('2024-10-10'), price: 100.00, asset: 'ING', category: 'Rent' },
        { date: new Date('2024-10-12'), price: 20.00, asset: 'Revolut', category: 'Dining' },
        { date: new Date('2024-10-15'), price: 5.00, asset: 'Cash', category: 'Snacks' },
        { date: new Date('2024-10-18'), price: 80.00, asset: 'Revolut', category: 'Groceries' },
        { date: new Date('2024-10-20'), price: 200.00, asset: 'ING', category: 'Car Payment' },
        { date: new Date('2024-10-22'), price: 10.00, asset: 'Cash', category: 'Miscellaneous' },
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
