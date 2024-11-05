import { createSlice } from "@reduxjs/toolkit";

//data, cena, kategoria, z którego assetu odejmujemy

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactionsList: [
        { date: new Date('2024-10-01'), price: 25.50, asset: 'ING', category: 'Groceries' },
        { date: new Date('2024-10-03'), price: 15.00, asset: 'Cash', category: 'Petrol' },
        { date: new Date('2024-10-05'), price: 50.00, asset: 'Revolut', category: 'Entertainment' },
        { date: new Date('2024-10-07'), price: 30.00, asset: 'Cash', category: 'Groceries' },
    ],
  },
  reducers: {
    addNewElement(state, action) {
      state.transactionsList.push(action.payload);
    },
  },
});
export const transactionActions = transactionsSlice.actions;
export default transactionsSlice.reducer;
