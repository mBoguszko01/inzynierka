import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState:{
        categoryList: [
            { name: "ING", color: '#FFFFFF' },
            { name: "Revolut", color: '#FFFFFF' },
            { name: "Cash", color: '#FFFFFF' },
            { name: "PayPal", color: '#FFFFFF' },
          ]
    },
    reducers: {
        addNewElement(state, action) {
            state.categoryList.push(action.payload);
          }
    }
})
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;