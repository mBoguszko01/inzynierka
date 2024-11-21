import { createSlice } from "@reduxjs/toolkit";

const assetsSlice = createSlice({
    name: "assets",
    initialState:{
        totalAssets: [
            { logo: '/ING_icon.jpg',name: "ING", value: 10300, color: "#FF8042"},
            { logo: '/Revolut_icon.jpg',name: "Revolut", value: 1000, color: "#00C49F" },
            { logo: '/Cash_icon.jpg',name: "Cash", value: 500, color: "#FFBB28" },
            { name: "PayPal", value: 500, color: "#0088FE" },
          ]
    },
    reducers: {
        addNewElement(state, action) {
            state.totalAssets.push(action.payload);
          },
        updateValue(state,action){
            const { asset, value } = action.payload;
            const account = state.totalAssets.find(account => account.name === asset); 
    
            if (account) {
                account.value -= value;
            } else {
                console.log(`Something went wrong`);
            }
        }
    }
})
export const assetsActions = assetsSlice.actions;
export default assetsSlice.reducer;