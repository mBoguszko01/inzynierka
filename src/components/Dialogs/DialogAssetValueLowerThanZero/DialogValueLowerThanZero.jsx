import { useDispatch } from "react-redux";
import { assetsActions } from "../../../store/assets";
import { transactionActions } from "../../../store/transactions";
const DialogValueLowerThanZero = (props) => {
    const dispatch = useDispatch();
    const {isDialogOpen, closeDialog, selectedAsset, setFormData} = props;
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
    return <div className="dialog-background fade-in">
    <dialog className="dialog slide-in" open={true}>
      <div className="dialog-top-bar">
        <span className="section-header dialog-title">
            {selectedAsset.asset}
        </span>
        <button onClick={closeDialog} className="close-dialog-btn">
          X
        </button>
      </div>

      <div className="dialog-bottom-btns-container">
        <button className="dialog-btn-cancel" onClick={closeDialog}>
          Cancel
        </button><button className="dialog-btn-cancel" onClick={closeDialog}>
          Update Asset
        </button>
        <button className="dialog-btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </dialog>
  </div>
}
export default DialogValueLowerThanZero;