import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plannedTransactionActions } from "./store/plannedTransactions";
import { transactionActions } from "./store/transactions";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
function App() {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  const hasAlreadyAdded = useRef(false); // USUNĄĆ W WERSJI PROD! --- OBCHODZI TO BŁĄD SPOWODOWANY PRZEZ StrictMode (tranzakcje dodają się dwa razy)
  useEffect(() => {
    if (hasAlreadyAdded.current) return;
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

      dispatch(transactionActions.addNewElement(firstElement));
      let counter = 0;
      while (true && counter < 50) {
        let data = { ...transactions[index] };
        if (data.repeatUnit === "months") {
          if ((day >= 1) & (day <= 28)) {
            result.setMonth(result.getMonth() + parseInt(data.repeatValue));
          }
          else{
            result.setDate(1);
            result.setMonth(result.getMonth() + parseInt(data.repeatValue));
            result.setDate(day);
            if(result.getDate() !== day){
              result.setDate(0);
            }
          }
        } else {
          let addingValue = data.repeatValue;
          data.repeatUnit === "weeks" ? (addingValue *= 7) : addingValue;
          result.setDate(result.getDate() + addingValue);
        }
        if (result < new Date()) {
          data.date = result.toJSON();
          dispatch(transactionActions.addNewElement(data));
        } else {
          break;
        }
        counter++;
      }
    });
    dispatch(plannedTransactionActions.updateTransactionDates(indexes));
    hasAlreadyAdded.current = true;
  }, [dispatch]);

  return (
    <div className="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
