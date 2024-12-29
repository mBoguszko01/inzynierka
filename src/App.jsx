import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plannedTransactionActions } from "./store/plannedTransactions";
import { transactionActions } from "./store/transactions";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { fetchCategories } from "./store/categories.js";
import { fetchAssets } from "./store/assets.js";
import { fetchPlannedTransactions } from "./store/plannedTransactions.js";
import { fetchTransactions } from "./store/transactions";
import { addTransactionToDatabase } from "./store/transactions";
import { updatePlannedTransactionsDate } from "./store/plannedTransactions";
import { changeAssetValue } from "./store/assets.js";

function App() {
  const dispatch = useDispatch();
  const plannedTransactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  const assets = useSelector((state) => state.assets.totalAssets);
  const plannedTransactionsStatus = useSelector(
    (state) => state.plannedTransactions.status
  );
  useEffect(() => {
    if (plannedTransactionsStatus !== "idle") return;
    dispatch(fetchPlannedTransactions());
    dispatch(fetchCategories());
    dispatch(fetchTransactions());
    dispatch(fetchAssets());
  }, [dispatch, plannedTransactionsStatus]);

  useEffect(() => {
    if (plannedTransactionsStatus !== "succedded") return;

    const processTransactions = async () => {
      const indexes = [];
      const archivedTransactions = plannedTransactions
        .filter((transaction, index) => {
          if (new Date(transaction.date) <= new Date()) {
            indexes.push(index);
            return true;
          }
          return false;
        })
        .map((transaction) => ({ ...transaction }));

      indexes.forEach(async (index) => {
        let result = new Date(plannedTransactions[index].date);
        let firstElement = { ...plannedTransactions[index] };
        let day = new Date(plannedTransactions[index].date).getDate();

        await dispatch(addTransactionToDatabase(firstElement));
        const asset = assets.find((asset) => asset.id == firstElement.asset_id);
        await dispatch(
          changeAssetValue({
            assetId: asset.id,
            asset: asset,
            value: parseFloat(firstElement.price),
            proceedTransaction: true,
          })
        );

        while (true) {
          let data = { ...plannedTransactions[index] };
          if (data.repeat_unit === "months") {
            if (day >= 1 && day <= 28) {
              result.setMonth(result.getMonth() + parseInt(data.repeat_value));
            } else {
              result.setDate(1);
              result.setMonth(result.getMonth() + parseInt(data.repeat_value));
              result.setDate(day);
              if (result.getDate() !== day) {
                result.setDate(0);
              }
            }
          } else {
            let addingValue = data.repeat_value;
            if (data.repeat_unit === "weeks") addingValue *= 7;
            result.setDate(result.getDate() + addingValue);
          }
          if (result < new Date()) {
            data.date = result.toJSON();
           await dispatch(addTransactionToDatabase(data));
            const asset = assets.find((asset) => asset.id == data.asset_id);
           await dispatch(
              changeAssetValue({
                assetId: asset.id,
                asset: asset,
                value: parseFloat(firstElement.price),
                proceedTransaction: true,
              })
            ); // chce poczekac az ta funkcja zaktualizuje stan w reduxie i w bazie danych
          } else {
            break;
          }
        }
      });
      dispatch(updatePlannedTransactionsDate(indexes));
    };
    processTransactions();

  }, [plannedTransactionsStatus]);

  return (
    <div className="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
