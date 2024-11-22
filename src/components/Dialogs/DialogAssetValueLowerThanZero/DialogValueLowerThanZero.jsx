import { useState } from "react";
import { useDispatch } from "react-redux";
import { assetsActions } from "../../../store/assets";
import { transactionActions } from "../../../store/transactions";

import DialogUpdateAsset from "../DialogUpdateAsset/DialogUpdateAsset";

const DialogValueLowerThanZero = (props) => {
  const dispatch = useDispatch();
  const { isDialogOpen, closeDialog, selectedAsset, setFormData } = props;
  const [showUpdateWindow, setShowUpdateWindow] = useState(false);

  const handleSubmit = () => {
    dispatch(
      assetsActions.updateValue({
        asset: selectedAsset.asset,
        value: selectedAsset.price,
      })
    );
    dispatch(transactionActions.addNewElement(selectedAsset));
    setFormData();
    closeDialog();
  };
  return (
    <>{showUpdateWindow && <DialogUpdateAsset closeDialog={() => {setShowUpdateWindow(false)}} asset={selectedAsset}/>}
      {!showUpdateWindow && <div className="dialog-background fade-in">
        <dialog className="dialog slide-in" open={true}>
          <div className="dialog-top-bar">
            <span className="section-header dialog-title">
              {selectedAsset}
            </span>
            <button onClick={closeDialog} className="close-dialog-btn">
              X
            </button>
          </div>
            The transaction price is exceeding your {selectedAsset.asset} balance. Are you sure you want to proceed?
          <div className="dialog-bottom-btns-container">
            <button className="dialog-btn-cancel" onClick={closeDialog}>
              Cancel
            </button>
            <button className="dialog-btn-cancel" onClick={() => {setShowUpdateWindow(true)}}>
              Update Asset
            </button>
            <button className="dialog-btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </dialog>
      </div>}
    </>
  );
};
export default DialogValueLowerThanZero;
