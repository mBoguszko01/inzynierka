import { createSlice } from "@reduxjs/toolkit";

const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [

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
        let result = new Date(state.plannedTransactionsList[index].date);
        while (result < new Date()) {
          if (state.plannedTransactionsList[index].repeatUnit === "months") {
            //jesli data ustawiona na 29,30,31 to wyciagnij stary miesiac, dodaj do niego repeat value i sprawdz czy istnieje taki dzień (np. 31 luty) jeśli nie, ustaw na ostatni dzień lutego
            result.setMonth(
              result.getMonth() +
                parseInt(state.plannedTransactionsList[index].repeatValue)
            );
          } else {
            let addingValue = state.plannedTransactionsList[index].repeatValue;
            state.plannedTransactionsList[index].repeatUnit === "weeks"
              ? (addingValue *= 7)
              : addingValue;
            result.setDate(result.getDate() + addingValue);
          }
        }
        result.setHours(12);
        state.plannedTransactionsList[index].date = result.toISOString();
      });
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
