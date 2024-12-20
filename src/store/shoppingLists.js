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
        `http://localhost:5000/api/shopping-lists/${shoppingListId}/items/${itemId}/increase-quantity`
      );
      return { shoppingListId, item: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateShoppingListItem = createAsyncThunk(
  "shoppingLists/updateShoppingListItem",
  async ({ shoppingListId, itemId, updatedItem }, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/shopping-lists/${shoppingListId}/items/${itemId}`,
        updatedItem
      );
      const updatedResponseData = {
        ...response.data,
        item_id: response.data.id,
      };
      delete updatedResponseData.id;
      return { shoppingListId, item: updatedResponseData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteShoppingListItem = createAsyncThunk(
  "shoppingLists/deleteShoppingListItem",
  async ({ shoppingListId, itemId }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/shopping-lists/${shoppingListId}/items/${itemId}`
      );
      return { shoppingListId, itemId };
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingLists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingLists.fulfilled, (state, action) => {
        state.shoppingLists = action.payload.map((list) => ({
          ...list,
          purchased_items: parseInt(list.purchased_items, 10),
          total_items: parseInt(list.total_items, 10),
        }));
        state.status = "succeeded";
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
      })
      .addCase(updateShoppingListItem.fulfilled, (state, action) => {
        const { shoppingListId, item } = action.payload;

        if (state.items[shoppingListId]) {
          const existingItemIndex = state.items[shoppingListId].findIndex(
            (listItem) => listItem.item_id === item.item_id
          );
          if (existingItemIndex >= 0) {
            const existingItem = state.items[shoppingListId][existingItemIndex];
            const wasPurchased = existingItem.is_purchased;
            state.items[shoppingListId][existingItemIndex] = item;
            const shoppingList = state.shoppingLists.find(
              (list) => list.id === shoppingListId
            );

            if (shoppingList) { 
              if (!wasPurchased && item.is_purchased) {
                shoppingList.purchased_items += 1;
              } else if (wasPurchased && !item.is_purchased) {
                shoppingList.purchased_items -= 1;
              }
            }
          }
        }
      })
      .addCase(deleteShoppingListItem.fulfilled, (state, action) => {
        const { shoppingListId, itemId } = action.payload;

        if (state.items[shoppingListId]) {
          state.items[shoppingListId] = state.items[shoppingListId].filter(
            (listItem) => listItem.item_id !== itemId
          );
          const shoppingList = state.shoppingLists.find(
            (list) => list.id === shoppingListId
          );
          if (shoppingList) {
            shoppingList.total_items -= 1;
          }
        }
      });
  },
});

export const shoppingListsActions = shoppingListsSlice.actions;
export default shoppingListsSlice.reducer;
