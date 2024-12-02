import {
  createSlice,
  createAsyncThunk,
  asyncThunkCreator,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAssets = createAsyncThunk(
  "assets/fetchAssets",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/api/assets");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    totalAssets: [
    //   { logo: "/ING_icon.jpg", name: "ING", value: 10300, color: "#FF8042" },
    //   {
    //     logo: "/Revolut_icon.jpg",
    //     name: "Revolut",
    //     value: 1000,
    //     color: "#00C49F",
    //   },
    //   { logo: "/Cash_icon.jpg", name: "Cash", value: 500, color: "#FFBB28" },
    //   { name: "PayPal", value: 500, color: "#0088FE" },
    ],
    status: 'idle',
    error: null,
  },
  reducers: {
    addNewElement(state, action) {
      state.totalAssets.push(action.payload);
    },
    updateValue(state, action) {
      //zmienic nazwe na proceed transaction -- używamy tego gdy wykonamy tranzakcje
      const { asset, value } = action.payload;
      const account = state.totalAssets.find(
        (account) => account.name === asset
      );

      if (account) {
        account.value -= value;
      } else {
        console.log(`Something went wrong`);
      }
    },
    updateValue2(state, action) {
      // używam tego gdy wartość asseta spadnie poniżej 0, lub gdy użytkownik chce ręcznie zmienić stan konta
      const { asset, value } = action.payload;
      const account = state.totalAssets.find(
        (account) => account.name === asset
      );
      if (account) {
        account.value = value;
      } else {
        console.log(`Something went wrong`);
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAssets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalAssets = action.payload;
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  }
});
export const assetsActions = assetsSlice.actions;
export default assetsSlice.reducer;
