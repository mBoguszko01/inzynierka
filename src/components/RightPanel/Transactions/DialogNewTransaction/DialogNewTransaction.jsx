import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../../../../store/transactions";

import DialogNewCategory from "../../SettingsComponent/NewCategoryDialog/NewCategoryDialog";
import "./DialogNewTransaction.css";
const DialogNewTransaction = ({ isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.categories.categoryList
  );

  const defaultFormData = {
    asset: "",
    category: "",
    date: "",
    price: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
  const closeNewCategoryDialog = () =>{
    setIsNewCategoryOpen(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(value !== 'newCategory')
    {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    else{
      console.log('Wybrano!')
      setIsNewCategoryOpen(true);
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      ...formData,
      date: new Date(formData.date),
      price: parseFloat(formData.price),
    };
    console.log(transactionData);
    dispatch(transactionActions.addNewElement(transactionData));
    setFormData(defaultFormData);
    closeDialog();
  };
  return (
    <>
      {isNewCategoryOpen && <DialogNewCategory isDialogOpen={isNewCategoryOpen} closeDialog={closeNewCategoryDialog}/>}
      {(isDialogOpen && !isNewCategoryOpen)&& (
        <div className="dialog-background fade-in">
          <dialog className="dialog slide-in" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">
                New Transaction
              </span>
              <button onClick={closeDialog} className="close-dialog-btn">
                X
              </button>
            </div>
            <form>
              <div className="input-container">
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
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">&nbsp;Select a category</option>
                    {
                      categories.map((category, index) => (
                        <option value ={category.name}>&nbsp;{category.name}</option>
                      ))
                    }
                    <option value="newCategory">&nbsp;+ Create new category</option>
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
