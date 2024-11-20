import { useState } from "react";
import PlannedTransactions from "./PlannedTransactions";
import "./PlannedTransactionsContainer.css";
import DialogNewPlannedTransaction from "./DialogNewPlannedTransaction/DialogNewPlannedTransaction";

const PlannedTransactionsContainer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="planned-transactions-container">
      <div className="planned-transactions-top">
        <div className="planned-transactions-add-new-transaction">
          <button onClick={openDialog}>+ Add new planned transaction</button>
        </div>
      </div>
      <PlannedTransactions />
      {
        <DialogNewPlannedTransaction
          isDialogOpen={isDialogOpen}
          closeDialog={closeDialog}
        />
      }
    </div>
  );
};
export default PlannedTransactionsContainer;
