import {
  createSlice,
  createAsyncThunk,
  asyncThunkCreator,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoupons = createAsyncThunk(
  "coupons/fetchCoupons",
  async (shoppingListId, thunkAPI) => {
    try {
      // tutaj mam info co to za id listy i po stronie backendu zrobic całą logikę apropo aktualnych elementów listy
      // tam sobie pobieram listę wszystkich elementów listy
      // sprawdzam ew. proponowane kupony na bazie elementów dodanych i banger
      const response = await axios.get(`http://localhost:5000/api/coupons?listId=${shoppingListId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const couponsSlice = createSlice({
  name: "coupons",
  initialState: {
    allLidlCoupons: [],
    suggestedLidlCoupons: [],
    allBiedronkaCoupons: [],
    suggestedBiedronkaCoupons: [],
    allCarrefourCoupons: [],
    suggestedCarrefourCoupons: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addSuggestedCoupons(state, action) {
      const { shoppingListId, coupons, store } = action.payload;
      let targetStore = null;
      if (store === "Lidl") {
        targetStore = state.suggestedLidlCoupons;
      } else if (store === "Biedronka") {
        targetStore = state.suggestedBiedronkaCoupons;
      } else if (store === "Carrefour") {
        targetStore = state.suggestedCarrefourCoupons;
      } else {
        console.error(`Unknown shop: ${store}`);
        return;
      }
    
      const updatedStore = [...targetStore];
    
      coupons.forEach((coupon) => {
        if (!coupon || !coupon.id) {
          console.error("Invalid coupon:", coupon);
          return;
        }
        console.log(updatedStore);
        const alreadyExists = updatedStore.find(
          (item) => item.id === coupon.id
        );
    
        if (!alreadyExists) {
          updatedStore.push(coupon);
        }
      });
      if (store === "Lidl") {
        state.suggestedLidlCoupons = updatedStore;
      } else if (store === "Biedronka") {
        state.suggestedBiedronkaCoupons = updatedStore;
      } else if (store === "Carrefour") {
        state.suggestedCarrefourCoupons = updatedStore;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoupons.fulfilled, (state, action) => {
        state.status = "succeeded";
        
        state.allLidlCoupons = action.payload.allLidlCoupons;
        state.suggestedLidlCoupons = action.payload.suggestedCouponsLidl;

        state.allBiedronkaCoupons = action.payload.allBiedronkaCoupons;
        state.suggestedBiedronkaCoupons = action.payload.suggestedCouponsBiedronka;
        
        state.allCarrefourCoupons = action.payload.allCarrefourCoupons;
        state.suggestedCarrefourCoupons = action.payload.suggestedCouponsCarrefour;
      });
  },
});

export const couponsActions = couponsSlice.actions;
export default couponsSlice.reducer;
