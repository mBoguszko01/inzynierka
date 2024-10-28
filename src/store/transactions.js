import { createSlice } from "@reduxjs/toolkit";

//data, cena, kategoria, z którego assetu odejmujemy

const transactionsSlice = createSlice({
    name: "transactions",
    initialState:{
        transactionsList: [
            {date: new Date('2024-10-22'), price: 12.00, asset: 'ING', category: 'Groceries'},
            {date: new Date('2024-10-21'), price: 50.00, asset: 'Cash', category: 'Petrol'},
            {date: new Date('2024-10-19'), price: 100.00, asset: 'Revolut', category: 'Entertainment'},
            {date: new Date('2024-10-15'), price: 12.00, asset: 'ING', category: 'Groceries'},
            {date: new Date('2024-10-12'), price: 50.00, asset: 'Cash', category: 'Petrol'},
            {date: new Date('2024-10-11'), price: 100.00, asset: 'Revolut', category: 'Entertainment'},
            {date: new Date('2024-10-09'), price: 12.00, asset: 'ING', category: 'Groceries'},
            {date: new Date('2024-10-03'), price: 50.00, asset: 'Cash', category: 'Petrol'},
            {date: new Date('2024-09-23'), price: 100.00, asset: 'Revolut', category: 'Entertainment'},
            {date: new Date('2024-09-15'), price: 12.00, asset: 'ING', category: 'Groceries'},
            {date: new Date('2024-09-11'), price: 50.00, asset: 'Cash', category: 'Petrol'},
            {date: new Date('2024-09-05'), price: 100.00, asset: 'Revolut', category: 'Entertainment'},
          ]
    },
    reducers: {
        
    }
})
export const assetsDataActions = transactionsSlice.actions;
export default transactionsSlice.reducer;