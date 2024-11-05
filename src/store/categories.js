import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState:{
        categoryList: [
            { name: "Grocieries", color: '#FFFFFF' },
            { name: "Petrol", color: '#FFFFFF' },
            { name: "Entertainment", color: '#FFFFFF' },
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