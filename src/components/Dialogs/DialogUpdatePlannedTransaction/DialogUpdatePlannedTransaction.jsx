import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlannedTransactionToDB } from "../../../store/plannedTransactions";

import DialogNewCategory from "../DialogNewCategory/NewCategoryDialog";
import DialogNewAsset from "../DialogNewAsset";
import { changePlannedTransaction } from "../../../store/plannedTransactions";
import { deletePlannedTransaction } from "../../../store/plannedTransactions";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
const DialogUpdatePlannedTransaction = ({
  plannedTransaction,
  isDialogOpen,
  closeDialog,
}) => {
  const dispatch = useDispatch();
  console.log(plannedTransaction);
  const defaultFormData = {
    id: plannedTransaction.id,
    name: plannedTransaction.name,
    asset_id: plannedTransaction.asset_id,
    category_id: plannedTransaction.category_id,
    date: plannedTransaction.date,
    price: plannedTransaction.price,
    repeatValue: plannedTransaction.repeat_value,
    repeatUnit: plannedTransaction.repeat_unit,
    logoUrl: plannedTransaction.logo_url,
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
  const [isNewAssetOpen, setIsNewAssetOpen] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAssetValid, setIsAssetValid] = useState(true);
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [invalidDateReason, setInvalidDateReason] = useState();
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isRepeatValueValid, setIsRepeatValueValid] = useState(true);

  const closeNewCategoryDialog = () => {
    setIsNewCategoryOpen(false);
  };
  const closeNewAssetDialog = () => {
    setIsNewAssetOpen(false);
  };
  const categories = useSelector((state) => state.categories.categoryList);
  const assets = useSelector((state) => state.assets.totalAssets);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "newAsset") {
      setIsNewAssetOpen(true);
    } else if (value === "newCategory") {
      setIsNewCategoryOpen(true);
    } else {
      if (!isNameValid && name === "name") {
        if (value !== "") {
          setIsNameValid(true);
        }
      }
      if (!isAssetValid && name === "asset_id") {
        if (value != "") {
          setIsAssetValid(true);
        }
      }
      if (!isCategoryValid && name === "category_id") {
        if (value != "") {
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
      if (!isRepeatValueValid && name === "repeatValue") {
        if (value !== "") {
          setIsRepeatValueValid(true);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let plannedTransactionData = {
      ...formData,
    };
    if (
      plannedTransactionData.name !== "" &&
      plannedTransactionData.asset_id !== "" &&
      plannedTransactionData.category_id !== "" &&
      plannedTransactionData.date !== "" &&
      plannedTransactionData.price !== "" &&
      !isNaN(plannedTransactionData.price) &&
      plannedTransactionData.repeatValue !== ""
    ) {
      plannedTransactionData = {
        ...formData,
        date: new Date(formData.date).toISOString(),
        price: parseFloat(formData.price),
      };
      //dispatch(plannedTransactionActions.addNewElement(plannedTransactionData));
      dispatch(changePlannedTransaction(plannedTransactionData));
      setFormData(defaultFormData);
      closeDialog();
    } else {
      if (plannedTransactionData.name === "") {
        setIsNameValid(false);
      }
      if (plannedTransactionData.asset_id == "") {
        setIsAssetValid(false);
      }
      if (plannedTransactionData.category_id == "") {
        setIsCategoryValid(false);
      }
      if (
        plannedTransactionData.date === "" ||
        new Date(plannedTransactionData.date) < new Date()
      ) {
        setIsDateValid(false);
        setInvalidDateReason(
          plannedTransactionData.date === ""
            ? "You must select a date!"
            : "The planned transaction must have a date in the future!"
        );
      }
      if (
        plannedTransactionData.price === "" ||
        isNaN(plannedTransactionData.price)
      ) {
        setIsPriceValid(false);
      }
      if (
        parseInt(plannedTransactionData.repeatValue) == 0 ||
        plannedTransactionData.repeatValue === ""
      ) {
        setIsRepeatValueValid(false);
      }
    }
  };
  const handleDelete = () =>{
    dispatch(deletePlannedTransaction(plannedTransaction.id));
    closeDialog();
  }
  const handlePriceBlur = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      price: parseFloat(value).toFixed(2),
    }));
  };
  const handleRepeatValueBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      repeatValue: parseInt(value).toString(),
    }));
  };
  const handleClose = () => {
    setFormData(defaultFormData);
    setIsNameValid(true);
    setIsAssetValid(true);
    setIsCategoryValid(true);
    setIsDateValid(true);
    setIsPriceValid(true);
    setIsRepeatValueValid(true);
    closeDialog();
  };
  let firstPossibleDay = new Date();
  firstPossibleDay.setDate(firstPossibleDay.getDate() + 1); //mozna rozpoczac planned transactions od jutra
  return (
    <>
      {isNewCategoryOpen && (
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
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">
                Planned Transactions
              </span>
              <button onClick={handleClose} className="close-dialog-btn">
                X
              </button>
            </div>
            <form>
              <div className="input-container">
                <div className="dialog-input-section">
                  <label>Name</label>
                  {!isNameValid && (
                    <span className="validation-warning">
                      You must select a name!
                    </span>
                  )}
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="dialog-input"
                    autocomplete="off"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Asset</label>
                  {!isAssetValid && (
                    <span className="validation-warning">
                      You must select an asset!
                    </span>
                  )}
                  <select
                    name="asset_id"
                    value={formData.asset_id}
                    onChange={handleChange}
                  >
                    <option value="">&nbsp;Select an asset</option>
                    {assets.map((asset, index) => (
                      <option value={asset.id} key={index}>
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
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                  >
                    <option value="">&nbsp;Select a category</option>
                    {categories.map((category, index) => (
                      <option value={category.id} key={index}>
                        &nbsp;{category.name}
                      </option>
                    ))}
                    <option value="newCategory">
                      &nbsp;+ Create new category
                    </option>
                  </select>
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
                    autocomplete="off"
                    onBlur={handlePriceBlur}
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Date</label>
                  {!isDateValid && (
                    <span className="validation-warning">
                      {invalidDateReason}
                    </span>
                  )}
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    min={firstPossibleDay.toISOString().split("T")[0]}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Repeat Every</label>
                  {!isRepeatValueValid && (
                    <span className="validation-warning">
                      You must select a repeat value!
                    </span>
                  )}
                  <div className="dialog-input-section-repeat">
                    <input
                      name="repeatValue"
                      type="number"
                      value={formData.repeatValue}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (
                          e.key === "." ||
                          e.key === "," ||
                          e.key === "-" ||
                          e.key === "+"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      min={1}
                      className="dialog-input dialog-input-repeat"
                      autocomplete="off"
                      onBlur={handleRepeatValueBlur}
                    />
                    <select
                      name="repeatUnit"
                      value={formData.repeatUnit}
                      onChange={handleChange}
                      className="dialog-select-repeat"
                    >
                      <option value="days" defaultValue>
                        &nbsp;{formData.repeatValue === "1" ? "day" : "days"}
                      </option>
                      <option value="weeks">
                        &nbsp;{formData.repeatValue === "1" ? "week" : "weeks"}
                      </option>
                      <option value="months">
                        &nbsp;
                        {formData.repeatValue === "1" ? "month" : "months"}
                      </option>
                    </select>
                  </div>
                </div>
                {(new Date(formData.date).getDate() === 31 ||
                  new Date(formData.date).getDate() === 30 ||
                  new Date(formData.date).getDate() === 29) &&
                  formData.repeatUnit === "months" && (
                    <div>
                      <span className="info-29-30-31">
                        &#9432; The transaction is repeated on the{" "}
                        {new Date(formData.date).getDate() === 31
                          ? new Date(formData.date).getDate() + "st"
                          : new Date(formData.date).getDate() + "th"}{" "}
                        day of the month; if it does not occur, then on the last
                        day of the month.
                      </span>
                    </div>
                  )}
                <div className="dialog-input-section">
                  <label>Logo - wersja robocza</label>
                  <input
                    name="logoUrl"
                    type="text"
                    value={formData.logoUrl}
                    onChange={handleChange}
                    className="dialog-input"
                    autocomplete="off"
                  />
                </div>
              </div>
            </form>
            <div>
              <div style={{ float: "left" }}>
                <button className="delete-button" onClick={handleDelete}>
                  <Icon path={mdiTrashCanOutline} size={1} />
                </button>
              </div>
              <div className="dialog-bottom-btns-container">
                <button className="dialog-btn-cancel" onClick={closeDialog}>
                  Cancel
                </button>
                <button className="dialog-btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default DialogUpdatePlannedTransaction;
