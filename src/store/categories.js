import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState:{
        categoryList: [
            { name: "Grocieries", color: '#FFBB28' },
            { name: "Petrol", color: '#00C49F' },
            { name: "Entertainment", color: '#92f811' },
          ]
    },
    reducers: {
        addNewElement(state, action) {
            state.categoryList.push(action.payload); // dodać sprawdzenie poprawności HEX
          }
    }
})
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;