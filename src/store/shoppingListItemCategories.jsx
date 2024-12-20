import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchShoppingItemsCategories = createAsyncThunk(
  "shopping_list_items_categories/fetchShoppingListItemsCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/shopping-list-items-categories"
      );
      return response.data;
    }catch (error){
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const shoppingListItemsCategoriesSlice = createSlice({
  name: "shoppingListItemsCategories",
  initialState: {
    shoppingListItemsCategoriesList: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingItemsCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingItemsCategories.fulfilled, (state, action) => {
        state.status = "succedded";
        state.shoppingListItemsCategoriesList = action.payload;
      });
  },
});
export const shoppingListItemsCategoriesActions = shoppingListItemsCategoriesSlice.actions;
export default shoppingListItemsCategoriesSlice.reducer;