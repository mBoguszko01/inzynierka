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
export const addAssetToDB = createAsyncThunk(
  "assets/addAssetToDB",
  async (newAsset, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/assets",
        newAsset
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeAssetValue = createAsyncThunk(
  "assets/changeAssetValue",
  async ({ assetId,asset, value, proceedTransaction }, thunkAPI) => {
    try {
      const id = assetId;
      const newValue = proceedTransaction ? asset.value - value : value;
      const response = await axios.put(
        `http://localhost:5000/api/assets/${id}`,
        { asset:asset ,value: newValue }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteAsset = createAsyncThunk(
  "assets/deleteAsset",
  async (assetId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/assets/${assetId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    totalAssets: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addNewElement(state, action) {
      state.totalAssets.push(action.payload);
    },
    updateValueLocally(state, action) {
      //zmienic nazwe na proceed transaction -- używamy tego gdy wykonamy tranzakcje
      const { asset_Id, value } = action.payload;
      const account = state.totalAssets.find(
        (account) => account.id == asset_Id
      );
      console.log(JSON.parse(JSON.stringify(state.totalAssets)));
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
      .addCase(addAssetToDB.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalAssets.push(action.payload);
      })
      .addCase(addAssetToDB.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(changeAssetValue.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeAssetValue.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedAsset = action.payload;
        const existingAsset = state.totalAssets.find(
          (asset) => asset.id === updatedAsset.id
        );
        if (existingAsset) {
          existingAsset.value = updatedAsset.value;
        }
      })
      .addCase(changeAssetValue.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteAsset.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAsset.fulfilled, (state, action) => {
        state.status = "succeeded";
        const assetId = action.payload.id;
        state.totalAssets = state.totalAssets.filter(
          (asset) => asset.id !== assetId
        );
      })
      .addCase(deleteAsset.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const assetsActions = assetsSlice.actions;
export default assetsSlice.reducer;
