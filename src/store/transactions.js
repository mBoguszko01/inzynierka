import { createSlice } from "@reduxjs/toolkit";

//data, cena, kategoria, z którego assetu odejmujemy

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactionsList: [
       
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
