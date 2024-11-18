import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import RecentTransactions from "../../RecentTransactions/RecentTransactions";
import "./Transactions.css";
import DialogNewTransaction from "./DialogNewTransaction/DialogNewTransaction";
const Transactions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currView = useSelector((state) => state.view);
  const [limiter, setLimiter] = useState(25);
  const transactions = useSelector(
    (state) => state.transactions.transactionsList
  );
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      if(limiter <= transactions.length)
      setLimiter(limiter + 25)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [limiter]);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <div className="transactions-container">
      <div className="transactions-top">
        <div className="transactions-add-new-transaction">
          <button onClick={openDialog}>+ Add new transaction</button>
        </div>
      </div>
      <RecentTransactions limiter={limiter} transactions={transactions}/>
      <DialogNewTransaction
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
      />
    </div>
  );
};
export default Transactions;
