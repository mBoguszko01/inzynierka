import { useState } from "react";
import { useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
import { assetsActions } from "../../store/assets";
//LOGO, nazwa, wartosc
const DialogNewAsset = ({ isDialogOpen, closeDialog, setGeneralFormData }) => {
  const dispatch = useDispatch();
  const defaultFormData = {
    logo: "",
    name: "",
    value:"",
    color: "",
  };
  const [formData, setFormData] = useState(defaultFormData);


  const [isNameValid, setIsNameValid] = useState(true);
  const [isValueValid, setIsValueValid] = useState(true);

  const handleColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      color: color.hex,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(!isNameValid && name === "name"){
      if(value !== ""){
        setIsNameValid(true)
      }
    }
    if(!isValueValid && name === "value"){
      if(value !== ""){
        setIsValueValid(true)
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssetData = {
      ...formData,
    };
    if(newAssetData.name !== "" && newAssetData.value !== ""){
      dispatch(assetsActions.addNewElement(newAssetData));
      setGeneralFormData((prevData) => ({
        ...prevData,
        asset: newAssetData.name
      }))
      setFormData(defaultFormData);
      closeDialog();
    }
    else{
      if (newAssetData.name === "") {
        setIsNameValid(false);
      }
      if(newAssetData.value === ""){
        setIsValueValid(false);
      }
    }
    
  };
  const handleClose = () => {
    setFormData(defaultFormData);
    setIsNameValid(true);
    setIsValueValid(true);
    closeDialog();
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      value: parseFloat(value).toFixed(2),
    }));
  };
  return (
    <>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">New Asset</span>
              <button onClick={handleClose} className="close-dialog-btn">
                X
              </button>
            </div>
            <form>
              <div className="input-container">
                <div className="dialog-input-section">
                  <label>Logo - wersja robocza</label>
                  <input
                    name="logo"
                    type="text"
                    value={formData.logo}
                    onChange={handleChange}
                    className="dialog-input"
                    autoComplete="off"
                  />
                </div>
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
                    autoComplete="off"
                  />
                </div>
                <div className="dialog-input-section">
                  <label>Value</label>
                  {!isValueValid && (
                    <span className="validation-warning">
                      You must provide a value!
                    </span>
                  )}
                  <input
                    name="value"
                    type="number"
                    autoComplete="off"
                    value={formData.value}
                    onChange={handleChange}
                    className="dialog-input"
                    onBlur={handleBlur}
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

export default DialogNewAsset;

