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
      .filter((transaction,index) => {
        if (transaction.date <= new Date()) {
          indexes.push(index);
          dispatch(transactionActions.addNewElement(transactions[index])) // powinno się to wykonywać w pętli dopoki nowa data jest mniejsza od dzisiaj
          return true;
        }
        return false;
      })
      .map((transaction) => {
        return { ...transaction };
      });
      dispatch(plannedTransactionActions.updateTransactionDates(indexes));
      hasAlreadyAdded.current = true
  }, [dispatch]);

  return (
    <div className="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
