import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../../store/categories";
//LOGO, nazwa, wartosc
const DialogNewCategory = ({ isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();
  const defaultFormData = {
    name: "",
    color: "",
  };
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
    const newCategoryData = {
      ...formData,
      value: parseFloat(formData.value),
    };
    dispatch(categoryActions.addNewElement(newCategoryData));
    setFormData(defaultFormData);
    closeDialog();
  };

  return (
    <>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">New Category</span>
              <button onClick={closeDialog} className="close-dialog-btn">
                X
              </button>
            </div>
            <form>
              <div className="input-container">
                <div className="dialog-input-section">
                  <label>Category Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="dialog-input"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Color</label>
                  <input
                    name="color"
                    type="text"
                    value={formData.color}
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

export default DialogNewCategory;
