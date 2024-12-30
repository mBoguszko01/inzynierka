import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../../../store/assets";
import { transactionActions } from "../../../store/transactions";
import { changeAssetValue } from "../../../store/assets";
import { addTransactionToDatabase } from "../../../store/transactions";
import { fetchAssets } from "../../../store/assets";
import DialogUpdateAsset from "../DialogUpdateAsset/DialogUpdateAsset";

const DialogValueLowerThanZero = (props) => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.totalAssets);

  const { isDialogOpen, closeDialog, selectedAssetId, setFormData, transaction } = props;
  const selectedAsset = assets.find((asset) => asset.id == selectedAssetId);

  const [showUpdateWindow, setShowUpdateWindow] = useState(false);
  console.log(transaction);
  const handleSubmit = () => {
    const submitTransaction = {...transaction};
    submitTransaction.date = new Date(submitTransaction.date);
    submitTransaction.date.setHours(12); 
    console.log(transaction);
    dispatch(
      changeAssetValue({
        assetId: transaction.asset_id,
        value: parseFloat(transaction.price),
        proceedTransaction: true,
      })
    );
    dispatch(addTransactionToDatabase(submitTransaction));
    setFormData();
    dispatch(fetchAssets());
    closeDialog();
  };
  return (
    <>
      {showUpdateWindow && (
        <DialogUpdateAsset
          closeDialog={() => {
            setShowUpdateWindow(false);
          }}
          asset={selectedAsset}
        />
      )}
      {!showUpdateWindow && (
        <div className="dialog-background fade-in">
          <dialog className="dialog slide-in" open={true}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">
                {selectedAsset.name}
              </span>
              <button onClick={closeDialog} className="close-dialog-btn">
                X
              </button>
            </div>
            The transaction price is exceeding your {selectedAsset.asset}{" "}
            balance. Are you sure you want to proceed?
            <div className="dialog-bottom-btns-container">
              <button className="dialog-btn-cancel" onClick={closeDialog}>
                Cancel
              </button>
              <button
                className="dialog-btn-cancel"
                onClick={() => {
                  setShowUpdateWindow(true);
                }}
              >
                Update Asset
              </button>
              <button className="dialog-btn-submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};
export default DialogValueLowerThanZero;
