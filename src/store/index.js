import { configureStore } from "@reduxjs/toolkit";
import viewReducer from './view';
import assetsReducer from './assets';
import transactionsReducer from './transactions';
import plannedTransactionsReducer from './plannedTransactions';
import categoryReducer from './categories';
import shoppingListsReducer from './shoppingLists';
const store = configureStore({
    reducer: {view: viewReducer, assets: assetsReducer, transactions: transactionsReducer, plannedTransactions: plannedTransactionsReducer, categories: categoryReducer, shoppingLists: shoppingListsReducer}
});

export default store;