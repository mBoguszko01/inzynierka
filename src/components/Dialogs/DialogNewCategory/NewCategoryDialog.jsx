import { useState } from "react";
import { useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
import { categoryActions } from "../../../store/categories";
import './NewCategoryDialog.css';
//LOGO, nazwa, wartosc
const DialogNewCategory = ({ isDialogOpen, closeDialog, setGeneralFormData }) => {
  const dispatch = useDispatch();
  const defaultFormData = {
    name: "",
    color: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [isNameValid, setIsNameValid] = useState(true);
  const handleColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      color: color.hex
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if(name === "name" && value !== ""){
      setIsNameValid(true);
    }
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newCategoryData = {
      ...formData,
    };
    if(newCategoryData.name !== "")
    {
      dispatch(categoryActions.addNewElement(newCategoryData));
      setFormData((prevData) => ({
        ...prevData,
        category: newCategoryData.name
        
      }))
      setFormData(defaultFormData);
      closeDialog();
    }
    else{
      setIsNameValid(false);
    }
    
  };
  const handleClose = () => {
    setFormData(defaultFormData);
    setIsNameValid(true);
    closeDialog();
  }
  return (
    <>
      {isDialogOpen && (
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
                  <TwitterPicker color={formData.color} onChange={handleColorChange}/>
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

export default DialogNewCategory;
