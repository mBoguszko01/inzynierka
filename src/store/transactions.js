import { createSlice } from "@reduxjs/toolkit";

//data, cena, kategoria, z którego assetu odejmujemy

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactionsList: [
        // { date: new Date('2024-10-01').toISOString(), price: 25.50, asset: 'ING', category: 'Grocieries' },
        // { date: new Date('2024-10-03').toISOString(), price: 15.00, asset: 'Cash', category: 'Petrol' },
        // { date: new Date('2024-10-05').toISOString(), price: 50.00, asset: 'Revolut', category: 'Entertainment' },
        // { date: new Date('2024-10-07').toISOString(), price: 30.00, asset: 'Cash', category: 'Grocieries' },
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
