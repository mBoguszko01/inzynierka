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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssetData = {
      ...formData,
    };
    dispatch(assetsActions.addNewElement(newAssetData));
    setGeneralFormData((prevData) => ({
      ...prevData,
      asset: newAssetData.name
    }))
    setFormData(defaultFormData);
    closeDialog();
  };
  console.log(isDialogOpen);
  return (
    <>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">New Asset</span>
              <button onClick={closeDialog} className="close-dialog-btn">
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
                  />
                </div>
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
                  <label>Value</label>
                  <input
                    name="value"
                    type="text"
                    value={formData.value}
                    onChange={handleChange}
                    className="dialog-input"
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

export default DialogNewAsset;

