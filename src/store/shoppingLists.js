import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShoppingLists = createAsyncThunk(
  "shoppingLists/fetchShoppingLists",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/shopping-lists"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addShoppingList = createAsyncThunk(
  "shoppingLists/addShoppingList",
  async (newList, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shopping-lists",
        newList
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addShoppingListItem = createAsyncThunk(
  "shoppingLists/addShoppingListItem",
  async ({ shoppingListId, item }, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/shopping-lists/${shoppingListId}/items`,
        item
      );

      return { shoppingListId, item: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchShoppingListItems = createAsyncThunk(
  "shoppingLists/fetchShoppingListItems",
  async (listId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/shopping-lists/${listId}/items`
      );
      return { listId, items: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increaseItemQuantity = createAsyncThunk(
  "shoppingLists/increaseItemQuantity",
  async ({ shoppingListId, itemId }, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/shopping-lists/${shoppingListId}/items/${itemId}`
      );
      return { shoppingListId, item: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const shoppingListsSlice = createSlice({
  name: "shoppingLists",
  initialState: {
    shoppingLists: [],
    items: {},
    status: "idle",
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingLists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingLists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shoppingLists = action.payload;
      })
      .addCase(fetchShoppingLists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(addShoppingList.fulfilled, (state, action) => {
        state.shoppingLists.push(action.payload);
      })
      .addCase(addShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addShoppingListItem.fulfilled, (state, action) => {
        const { shoppingListId, item } = action.payload;
        const normalizedItem = { ...item, item_id: item.id || item.item_id };
        if (state.items[shoppingListId]) {
          state.items[shoppingListId].push(normalizedItem);
        } else {
          state.items[shoppingListId] = [normalizedItem];
        }
      })
      .addCase(addShoppingListItem.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchShoppingListItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingListItems.fulfilled, (state, action) => {
        const { listId, items } = action.payload;
        state.status = "succeeded";
        state.items[listId] = items;
      })
      .addCase(fetchShoppingListItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(increaseItemQuantity.fulfilled, (state, action) => {
        const { shoppingListId, item } = action.payload;
        if (state.items[shoppingListId]) {
          const existingItem = state.items[shoppingListId].find(
            (listItem) => listItem.item_id === item.id
          );

          if (existingItem) {
            existingItem.quantity = item.quantity;
          }
        }
      })
      .addCase(increaseItemQuantity.rejected, (state, action) => {
        console.error("Error increasing item quantity:", action.payload);
      });
  },
});

export const shoppingListsActions = shoppingListsSlice.actions;
export default shoppingListsSlice.reducer;
