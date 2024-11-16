import { createSlice } from "@reduxjs/toolkit";

const plannedTransactionsSlice = createSlice({
  name: "plannedTransactions",
  initialState: {
    plannedTransactionsList: [
      // {
      //   date: new Date("2024-11-11").toISOString(),
      //   price: 100,
      //   asset: "ING",
      //   name: "1 miesiac - data pocz 2024-11-11",
      //   category: "Grocieries",
      //   repeatValue: "1",
      //   repeatUnit: "months",
      // },
      // {
      //   date: new Date("2024-10-29").toISOString(),
      //   price: 12,
      //   asset: "Cash",
      //   name: "3 tygodnie - data pocz. 2024-10-29",
      //   category: "Petrol",
      //   repeatValue: "3",
      //   repeatUnit: "weeks",
      // },
      // {
      //   date: new Date("2024-12-10").toISOString(),
      //   price: 12,
      //   asset: "Cash",
      //   name: "2 dni data pocz 2024-12-10",
      //   category: "Petrol",
      //   repeatValue: "2",
      //   repeatUnit: "days",
      // },

      {
        date: new Date("2024-02-17").toJSON(),
        price: 12,
        asset: "Cash",
        name: "test",
        category: "Petrol",
        repeatValue: "1",
        repeatUnit: "weeks",
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

        state.plannedTransactionsList[index].date = result.toISOString();
      });
    },
  },
});
export const plannedTransactionActions = plannedTransactionsSlice.actions;
export default plannedTransactionsSlice.reducer;
