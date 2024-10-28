import { useState } from "react";
import RecentTransactions from "../../RecentTransactions/RecentTransactions";
import "./Transactions.css";
import DialogNewTransaction from "./DialogNewTransaction/DialogNewTransaction";
const Transactions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  }
  const openDialog = () => {
    setIsDialogOpen(true);
  }
  return (
    <div className="transactions-container">
      <div className="transactions-top">
        <div className="transactions-add-new-transaction">
          <button onClick={openDialog}>+ Add new transaction</button>
        </div>
      </div>
      <RecentTransactions />
      <DialogNewTransaction isDialogOpen = {isDialogOpen} closeDialog={closeDialog}/>
    </div>
  );
};
export default Transactions;
