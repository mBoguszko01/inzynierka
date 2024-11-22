import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../../../store/transactions";
import { assetsActions } from "../../../store/assets";

import DialogNewCategory from "../DialogNewCategory/NewCategoryDialog";
import "./DialogNewTransaction.css";

import DialogNewAsset from "../DialogNewAsset";

import DialogValueLowerThanZero from "../DialogAssetValueLowerThanZero/DialogValueLowerThanZero";
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

  const [isAssetValid, setIsAssetValid] = useState(true);
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [isPriceValid, setIsPriceValid] = useState(true);

  const [showAssetLowerThanZeroAlertWindow, setShowAssetLowerThanZeroAlertWindow] =
    useState(false);

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
    } else {
      if (!isAssetValid && name === "asset") {
        if (value !== "") {
          setIsAssetValid(true);
        }
      }
      if (!isCategoryValid && name === "category") {
        if (value !== "") {
          setIsCategoryValid(true);
        }
      }
      if (!isDateValid && name === "date") {
        if (value !== "") {
          setIsDateValid(true);
        }
      }
      if (!isPriceValid && name === "price") {
        if (value !== "") {
          setIsPriceValid(true);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      price: parseFloat(value).toFixed(2),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let transactionData = {
      ...formData,
    };
    if (
      transactionData.asset !== "" &&
      transactionData.category !== "" &&
      transactionData.date !== "" &&
      transactionData.price !== ""
    ) {
      transactionData = {
        ...formData,
        date: new Date(formData.date).toISOString(),
        price: parseFloat(formData.price).toFixed(2),
      };
      const selectedAssetObj = assets.find(
        (asset) => asset.name === transactionData.asset
      ); // powinno byc po ID a nie po nazwie
      if (selectedAssetObj.value - transactionData.price < 0) {
        setShowAssetLowerThanZeroAlertWindow(true);
      } else {
        dispatch(
          assetsActions.updateValue({
            asset: transactionData.asset,
            value: transactionData.price,
          })
        );
        dispatch(transactionActions.addNewElement(transactionData));
        setFormData(defaultFormData);
        closeDialog();
      }
    } else {
      if (transactionData.asset === "") {
        setIsAssetValid(false);
      }
      if (transactionData.category === "") {
        setIsCategoryValid(false);
      }
      if (transactionData.date === "") {
        setIsDateValid(false);
      }
      if (transactionData.price === "" || isNaN(transactionData.price)) {
        setIsPriceValid(false);
      }
    }
  };

  const handleClose = () => {
    setFormData(defaultFormData);
    setIsAssetValid(true);
    setIsCategoryValid(true);
    setIsDateValid(true);
    setIsPriceValid(true);
    closeDialog();
  };


  return (
    <>
      {showAssetLowerThanZeroAlertWindow &&
        !isNewAssetOpen &&
        !isNewCategoryOpen && (
          <DialogValueLowerThanZero
            isDialogOpen={true}
            closeDialog={() => {setShowAssetLowerThanZeroAlertWindow(false); handleClose()}}
            selectedAsset = {formData.asset}
            setFormData = {() => setFormData(defaultFormData)}
          />
        )}
      {isNewCategoryOpen &&
        !isNewAssetOpen &&
        !showAssetLowerThanZeroAlertWindow && (
          <DialogNewCategory
            isDialogOpen={isNewCategoryOpen}
            closeDialog={closeNewCategoryDialog}
            setGeneralFormData={setFormData}
          />
        )}
      {isNewAssetOpen &&
        !isNewCategoryOpen &&
        !showAssetLowerThanZeroAlertWindow && (
          <DialogNewAsset
            isDialogOpen={isNewAssetOpen}
            closeDialog={closeNewAssetDialog}
            setGeneralFormData={setFormData}
          />
        )}
      {isDialogOpen &&
        !isNewCategoryOpen &&
        !isNewAssetOpen &&
        !showAssetLowerThanZeroAlertWindow && (
          <div className="dialog-background fade-in">
            <dialog className="dialog slide-in" open={isDialogOpen}>
              <div className="dialog-top-bar">
                <span className="section-header dialog-title">
                  New Transaction
                </span>
                <button onClick={handleClose} className="close-dialog-btn">
                  X
                </button>
              </div>
              <form>
                <div className="input-container">
                  <div className="dialog-input-section">
                    <label>Asset</label>
                    {!isAssetValid && (
                      <span className="validation-warning">
                        You must select an asset!
                      </span>
                    )}
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
                    {!isCategoryValid && (
                      <span className="validation-warning">
                        You must select a category!
                      </span>
                    )}
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
                    {!isDateValid && (
                      <span className="validation-warning">
                        You must select a date!
                      </span>
                    )}
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
                    {!isPriceValid && (
                      <span className="validation-warning">
                        You must select a price!
                      </span>
                    )}
                    <input
                      name="price"
                      type="number"
                      step="1"
                      value={formData.price}
                      onChange={handleChange}
                      className="dialog-input"
                      autoComplete="off"
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </form>
              <div className="dialog-bottom-btns-container">
                <button className="dialog-btn-cancel" onClick={handleClose}>
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
