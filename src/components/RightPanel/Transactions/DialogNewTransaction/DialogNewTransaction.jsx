import { useState } from "react";
import "./DialogNewTransaction.css";
const DialogNewTransaction = ({ isDialogOpen, closeDialog }) => {
  const [formData, setFormData] = useState({
    asset: "",
    category: "",
    date: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeDialog();
  };
  return (
    <>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog slide-in" open={isDialogOpen}>
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
                <label>Asset</label>
                <select
                  name="asset"
                  value={formData.asset}
                  onChange={handleChange}
                >
                  <option value="ING">ING</option>
                  <option value="Revolut">Revolut</option>
                  <option value="Cash">Cash</option>
                </select>

                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Grocieries">Grocieries</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Entertainment">Entertainment</option>
                </select>

                <label>Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />

                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  value={formData.price}
                  onChange={handleChange}
                />
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
export default DialogNewTransaction;
