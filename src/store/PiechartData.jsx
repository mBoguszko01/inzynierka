import { createSlice } from "@reduxjs/toolkit";

const piechartDataSlice = createSlice({
    name: "piechartData",
    initialState:{
        totalAssets: [
            { name: "ING", value: 10300 },
            { name: "Revolut", value: 1000 },
            { name: "Cash", value: 500 },
            { name: "PayPal", value: 500 },
          ],
        monthExpenses: [
            { name: "Netflix", value: 400 },
            { name: "Gym", value: 300 },
            { name: "Groceries", value: 300 },
            { name: "Rent", value: 500 },]
    },
    reducers: {
        
    }
})
export const piechartDataActions = piechartDataSlice.actions;
export default piechartDataSlice.reducer;