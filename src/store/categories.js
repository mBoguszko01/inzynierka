import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addCategoryToDB = createAsyncThunk(
  "categories/addCategoryToDB",
  async (newCategorie, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories",
        newCategorie
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [],
    status: "idle",
    error: null,
  },
  reducers: {addNewElement(state, action) {
    state.categoryList.push(action.payload);
  },},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeded";
        state.categoryList = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addCategoryToDB.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategoryToDB.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryList.push(action.payload);
      })
      .addCase(addCategoryToDB.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
