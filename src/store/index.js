import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./view";
import assetsReducer from "./assets";
import transactionsReducer from "./transactions";
import plannedTransactionsReducer from "./plannedTransactions";
import categoryReducer from "./categories";
import shoppingListsReducer from "./shoppingLists";
import couponsReducer from './coupons'
const store = configureStore({
  reducer: {
    view: viewReducer,
    assets: assetsReducer,
    transactions: transactionsReducer,
    plannedTransactions: plannedTransactionsReducer,
    categories: categoryReducer,
    shoppingLists: shoppingListsReducer,
    coupons: couponsReducer
  },
});

export default store;
