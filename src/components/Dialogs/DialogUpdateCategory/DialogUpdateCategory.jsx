import { useState } from "react";
import { useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
import { changeCategory } from "../../../store/categories";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { deleteCategory } from "../../../store/categories";
const DialogUpdateCategory = ({ category, isDialogOpen, closeDialog }) => {
  const dispatch = useDispatch();
  const id = category.id;
  const defaultFormData = {
    name: category.name,
    color: category.color,
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNameValid, setIsNameValid] = useState(true);
  const handleColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      color: color.hex,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "name" && value !== "") {
      setIsNameValid(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCategoryData = {
      ...formData,
      id: id,
    };
    if (updatedCategoryData.name !== "") {
      const result = await dispatch(
        changeCategory(updatedCategoryData)
      ).unwrap();
      setFormData((prevData) => ({
        ...prevData,
        category: updatedCategoryData.name,
      }));
      setFormData(defaultFormData);
      closeDialog();
    } else {
      setIsNameValid(false);
    }
  };
  const handleClose = () => {
    setFormData(defaultFormData);
    setIsNameValid(true);
    closeDialog();
  };
  const handleDelete = () => {
    dispatch(deleteCategory(category));
    handleClose();
  }
  return (
    <>
      <div className="dialog-background fade-in">
        <dialog className="dialog" open={isDialogOpen}>
          <div className="dialog-top-bar">
            <span className="section-header dialog-title">New Category</span>
            <button onClick={handleClose} className="close-dialog-btn">
              X
            </button>
          </div>
          <form>
            <div className="input-container">
              <div className="dialog-input-section">
                <label>Category Name</label>
                {!isNameValid && (
                  <span className="validation-warning">
                    You must provide an name!
                  </span>
                )}
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="dialog-input"
                  autoComplete="off"
                />
              </div>
              <div className="dialog-input-section">
                <label>Color</label>
                <TwitterPicker
                  color={formData.color}
                  onChange={handleColorChange}
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
    </>
  );
};

export default DialogUpdateCategory;
