import { createSlice } from "@reduxjs/toolkit";

const assetsSlice = createSlice({
    name: "assets",
    initialState:{
        totalAssets: [
            { logo: '/ING_icon.jpg',name: "ING", value: 10300 },
            { logo: '/Revolut_icon.jpg',name: "Revolut", value: 1000 },
            { logo: '/Cash_icon.jpg',name: "Cash", value: 500 },
            { name: "PayPal", value: 500 },
          ]
    },
    reducers: {
        addNewElement(state, action) {
            state.totalAssets.push(action.payload);
          }
    }
})
export const assetsActions = assetsSlice.actions;
export default assetsSlice.reducer;