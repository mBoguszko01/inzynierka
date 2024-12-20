import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plannedTransactionActions } from "./store/plannedTransactions";
import { transactionActions } from "./store/transactions";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import {fetchCategories} from "./store/categories.js";
import { fetchAssets } from "./store/assets.js";
import {fetchPlannedTransactions} from "./store/plannedTransactions.js"
import { fetchTransactions } from "./store/transactions";
import { addTransactionToDatabase } from "./store/transactions";
import { updatePlannedTransactionsDate } from "./store/plannedTransactions";
import { changeAssetValue } from "./store/assets.js";
import { fetchShoppingItemsCategories } from "./store/shoppingListItemCategories.jsx";
function App() {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  const assets = useSelector((state) => state.assets.totalAssets);
  const plannedTransactionsStatus = useSelector(
    (state) => state.plannedTransactions.status
  );
  useEffect(() => {
    dispatch(fetchPlannedTransactions())
    dispatch(fetchCategories());
    dispatch(fetchTransactions());
    dispatch(fetchAssets());
    dispatch(fetchShoppingItemsCategories());
  }, [dispatch]);
  
  useEffect(() => {
    if (plannedTransactionsStatus !== "succedded") return;
    const indexes = [];
    const archivedTransactions = transactions // lista zawierająca tranzakcje które należy zupdatować
      .filter((transaction, index) => {
        if (new Date(transaction.date) <= new Date()) {
          indexes.push(index);
          return true;
        }
        return false;
      })
      .map((transaction) => {
        return { ...transaction };
      });
    
    indexes.forEach((index) => {
      let result = new Date(transactions[index].date);
      let firstElement = { ...transactions[index] };
      let day = new Date(transactions[index].date).getDate();
      dispatch(addTransactionToDatabase(firstElement));
      const asset = assets.find((asset) => asset.id == firstElement.asset_id);
      console.log(firstElement);
      dispatch(changeAssetValue({asset: asset, value: parseFloat(firstElement.price), proccedTransaction: true}));
      let counter = 0;
      while (true && counter < 50) {
        let data = { ...transactions[index] };
        if (data.repeat_unit === "months") {
          if ((day >= 1) & (day <= 28)) {
            result.setMonth(result.getMonth() + parseInt(data.repeat_value));
          }
          else{
            result.setDate(1);
            result.setMonth(result.getMonth() + parseInt(data.repeat_value));
            result.setDate(day);
            if(result.getDate() !== day){
              result.setDate(0);
            }
          }
        } else {
          let addingValue = data.repeat_value;
          data.repeat_unit === "weeks" ? (addingValue *= 7) : addingValue;
          result.setDate(result.getDate() + addingValue);
        }
        if (result < new Date()) {
          data.date = result.toJSON();
          dispatch(addTransactionToDatabase(data));
        } else {
          break;
        }
        counter++;
      }
    });
    dispatch(updatePlannedTransactionsDate(indexes));
  }, [dispatch, transactions]);

  return (
    <div className="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
