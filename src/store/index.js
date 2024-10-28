import { configureStore } from "@reduxjs/toolkit";
import viewReducer from './view';
import assetsReducer from './assets';
import transactionsReducer from './transactions';

const store = configureStore({
    reducer: {view: viewReducer, assets: assetsReducer, transactions: transactionsReducer}
});

export default store;