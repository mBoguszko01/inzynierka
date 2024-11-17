import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plannedTransactionActions } from "../../../../store/plannedTransactions";
import DialogNewCategory from "../../SettingsComponent/NewCategoryDialog/NewCategoryDialog";
import "./DialogNewPlannedTransaction.css";
//nazwa, konto, data, cena, co ile powtarzamy, logo
const DialogNewPlannedTransaction = ({ isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();
  const defaultFormData = {
    name: "",
    asset: "",
    category: "",
    date: "",
    price: "",
    repeatValue: '1',
    repeatUnit: "days",
    logoUrl: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
  const closeNewCategoryDialog = () => {
    setIsNewCategoryOpen(false);
  };
  const categories = useSelector((state) => state.categories.categoryList);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value !== "newCategory") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setIsNewCategoryOpen(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const plannedTransactionData = {
      ...formData,
      date: (new Date(formData.date)).toISOString(),
      price: parseFloat(formData.price),
    };
    dispatch(plannedTransactionActions.addNewElement(plannedTransactionData));
    setFormData(defaultFormData);
    closeDialog();
  };

  return (
    <>
      {isNewCategoryOpen && (
        <DialogNewCategory
          isDialogOpen={isNewCategoryOpen}
          closeDialog={closeNewCategoryDialog}
        />
      )}
      {isDialogOpen && !isNewCategoryOpen && (
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
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Repeat Every</label>
                  <div className="dialog-input-section-repeat">
                    <input
                      name="repeatValue"
                      type="text"
                      value={formData.repeatValue}
                      onChange={handleChange}
                      className="dialog-input dialog-input-repeat"
                    />
                    <select
                      name="repeatUnit"
                      value={formData.repeatUnit}
                      onChange={handleChange}
                      className="dialog-select-repeat"
                    >
                      <option value="days" defaultValue>
                        &nbsp;{formData.repeatValue === '1' ? 'day' : 'days'}
                      </option>
                      <option value="weeks">
                        &nbsp;{formData.repeatValue === '1' ? 'week' : 'weeks'}
                      </option>
                      <option value="months">
                        &nbsp;{formData.repeatValue === '1' ? 'month' : 'months'}
                      </option>
                    </select>
                  </div>
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
