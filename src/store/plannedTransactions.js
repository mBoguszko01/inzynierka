import { createSlice } from "@reduxjs/toolkit";


const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
        { date: new Date('2024-10-01'), price: 25.50, asset: 'ING', name: 'Netflix subscription', category: 'Grocieries', repeat: 'Every month'},
        { date: new Date('2024-10-03'), price: 15.00, asset: 'Cash', name: 'Gym membership', category: 'Petrol', repeat: 'Every 6 months' },
        { date: new Date('2024-10-03'), price: 15.00, asset: 'Cash', name: 'Amazon prime', category: 'Entertainment', repeat: 'Every 2 months' },
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
