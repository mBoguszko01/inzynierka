import { useState } from "react";
import { useDispatch } from "react-redux";
import {plannedTransactionActions} from '../../../../store/plannedTransactions';
import "./DialogNewPlannedTransaction.css";
//nazwa, konto, data, cena, co ile powtarzamy, logo
const DialogNewPlannedTransaction = ({ isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();
  const defaultFormData = {
    name: "",
    asset: "",
    date: "",
    price: "",
    repeat: "",
    logoUrl: "",
  }
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const plannedTransactionData = {
      ...formData,
      date: new Date(formData.date),
      price: parseFloat(formData.price)
    };
    dispatch(plannedTransactionActions.addNewElement(plannedTransactionData));
    setFormData(defaultFormData);
    closeDialog();
  };

  return (
    <>
      <h1>DODAĆ AUTOMATYCZNĄ ZMIANĘ DATY ON REPEAT</h1>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">
                Planned Transactions
              </span>
              <button onClick={closeDialog} className="close-dialog-btn">
                X
              </button>
            </div>
            <form>
              <div className="input-container">
                <div className="dialog-input-section">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Asset</label>
                  <select
                    name="asset"
                    value={formData.asset}
                    onChange={handleChange}
                  >
                    <option value="">&nbsp;Select an asset</option>
                    <option value="ING">&nbsp;ING</option>
                    <option value="Revolut">&nbsp;Revolut</option>
                    <option value="Cash">&nbsp;Cash</option>
                  </select>
                </div>
                <div className="dialog-input-section">
                  <label>Date</label>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Price</label>
                  <input
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Repeat</label>
                  <select
                    name="repeat"
                    value={formData.repeat}
                    onChange={handleChange}
                  >
                    <option value="">&nbsp;</option>
                    <option value="Every month">&nbsp;Repeat every month</option>
                    <option value="Every two months">&nbsp;Repeat every 2 months</option>
                    <option value="Every 6 months">&nbsp;Repeat every 6 months</option>
                    <option value="Custom">&nbsp;Custom</option>
                  </select>
                </div>
                <div className="dialog-input-section">
                  <label>Logo - wersja robocza</label>
                  <input
                    name="logoUrl"
                    type="text"
                    value={formData.logoUrl}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
              </div>
            </form>
            <div className="dialog-bottom-btns-container">
              <button className="dialog-btn-cancel" onClick={closeDialog}>
                Cancel
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

export default DialogNewPlannedTransaction;