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
          //dispatch(transactionActions.addNewElement(transactions[index])) // powinno się to wykonywać w pętli dopoki nowa data jest mniejsza od dzisiaj
          return true;
        }
        return false;
      })
      .map((transaction) => {
        return { ...transaction };
      });
    indexes.forEach(index => {
        let result = new Date(transactions[index].date);
        let firstElement = {...transactions[index]};
        dispatch(transactionActions.addNewElement(firstElement));
        while (true) {
          let data = {...transactions[index]}
          data.date = result.toJSON();
          if (data.repeatUnit === "months") {
            //jesli data ustawiona na 29,30,31 to wyciagnij stary miesiac, dodaj do niego repeat value i sprawdz czy istnieje taki dzień (np. 31 luty) jeśli nie, ustaw na ostatni dzień lutego
            result.setMonth(
              result.getMonth() +
                parseInt(data.repeatValue)
            );

          } else {
            let addingValue = data.repeatValue;
            data.repeatUnit === "weeks"
              ? (addingValue *= 7)
              : addingValue;
            result.setDate(result.getDate() + addingValue);
          }
          if(result < new Date()){
            data.date = result.toJSON();
            console.log(data.date)
            dispatch(transactionActions.addNewElement(data));
          }else{
            break;
          }
          
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
