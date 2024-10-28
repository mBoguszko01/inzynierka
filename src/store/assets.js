import { createSlice } from "@reduxjs/toolkit";

const assetsSlice = createSlice({
    name: "assets",
    initialState:{
        totalAssets: [
            { name: "ING", value: 10300 },
            { name: "Revolut", value: 1000 },
            { name: "Cash", value: 500 },
            { name: "PayPal", value: 500 },
          ]
    },
    reducers: {
        
    }
})
export const assetsDataActions = assetsSlice.actions;
export default assetsSlice.reducer;