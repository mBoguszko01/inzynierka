import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../../../store/assets";
const DialogUpdateAsset = (props) => {
    const dispatch = useDispatch();
    
    const {asset, closeDialog} = props;
    const handleSubmit = () => {
        

    }
  return (
    <div className="dialog-background fade-in">
      <dialog className="dialog slide-in" open={true}>
        <div className="dialog-top-bar">
          <span className="section-header dialog-title">
            {asset}
          </span>
          <button onClick={closeDialog} className="close-dialog-btn">
            X
          </button>
        </div>
        {asset.name}
        <div className="dialog-bottom-btns-container">
          <button className="dialog-btn-cancel" onClick={closeDialog}>
            Cancel
          </button>
          <button className="dialog-btn-submit" onClick={(handleSubmit)}>
            Submit
          </button>
        </div>
      </dialog>
    </div>
  );
};
export default DialogUpdateAsset;
