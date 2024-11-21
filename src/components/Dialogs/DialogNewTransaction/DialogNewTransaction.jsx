import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../../../store/transactions";
import { assetsActions } from "../../../store/assets";


import DialogNewCategory from "../NewCategoryDialog/NewCategoryDialog";
import "./DialogNewTransaction.css";

import DialogNewAsset from "../DialogNewAsset";

const DialogNewTransaction = ({ isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categoryList);
  const assets = useSelector((state) => state.assets.totalAssets);
  const defaultFormData = {
    asset: "",
    category: "",
    date: "",
    price: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
  const [isNewAssetOpen, setIsNewAssetOpen] = useState(false);

  const closeNewCategoryDialog = () => {
    setIsNewCategoryOpen(false);
  };
  const closeNewAssetDialog = () => {
    setIsNewAssetOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "newAsset") {
      setIsNewAssetOpen(true);
    } else if (value === "newCategory") {
      setIsNewCategoryOpen(true);
    } else
    {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      ...formData,
      date: new Date(formData.date).toISOString(),
      price: parseFloat(formData.price),
    };
    //powinnismy tez zaktualizowac asseta i odjac od niego price'a
    dispatch(
      assetsActions.updateValue({
        asset: transactionData.asset,
        value: transactionData.price,
      })
    );
    dispatch(transactionActions.addNewElement(transactionData));
    setFormData(defaultFormData);
    closeDialog();
  };
  return (
    <>
      {isNewCategoryOpen && !isNewAssetOpen && (
        <DialogNewCategory
          isDialogOpen={isNewCategoryOpen}
          closeDialog={closeNewCategoryDialog}
          setGeneralFormData={setFormData}
        />
      )}
      {isNewAssetOpen && !isNewCategoryOpen && (
        <DialogNewAsset
          isDialogOpen={isNewAssetOpen}
          closeDialog={closeNewAssetDialog}
          setGeneralFormData={setFormData}
        />
      )}
      {isDialogOpen && !isNewCategoryOpen && !isNewAssetOpen && (
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
                    {assets.map((asset, index) => (
                      <option value={asset.name} key={index}>
                        &nbsp;{asset.name}
                      </option>
                    ))}
                    <option value="newAsset">&nbsp;+ Create new asset</option>
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
                    {categories.map((category, index) => (
                      <option value={category.name} key={index}>
                        &nbsp;{category.name}
                      </option>
                    ))}
                    <option value="newCategory">
                      &nbsp;+ Create new category
                    </option>
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
                    autocomplete="off"
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
