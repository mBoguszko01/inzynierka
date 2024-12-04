import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../../../store/assets";
import { TwitterPicker } from "react-color";
import { compose } from "@reduxjs/toolkit";
import { changeAssetValue } from "../../../store/assets";
const DialogUpdateAsset = (props) => {
  const dispatch = useDispatch();

  const { asset, closeDialog } = props;
  const assets = useSelector((state) => state.assets.totalAssets);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isValueValid, setIsValueValid] = useState(true);
  const selectedAssetObj = typeof(asset) === 'object' ? asset : assets.find((element) => element.name === asset);

  const handleColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      color: color.hex,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isNameValid && name === "name") {
      if (value !== "") {
        setIsNameValid(true);
      }
    }
    if (!isValueValid && name === "value") {
      if (value !== "") {
        setIsValueValid(true);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const defaultFormData = {
    logo: selectedAssetObj.logo,
    name: selectedAssetObj.name,
    value: selectedAssetObj.value,
    color: selectedAssetObj.color,
  };
  const [formData, setFormData] = useState(defaultFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssetData = {
      ...formData,
    };
    if(newAssetData.name !== "" && newAssetData.value !== ""){
      console.log(newAssetData.name)
      //dispatch(assetsActions.updateValue2({logo: newAssetData.logo, asset: newAssetData.name, value: newAssetData.value, color: newAssetData.color}));
      dispatch(changeAssetValue({asset:asset,value:newAssetData.value,proceedTransaction:false}));
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
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      value: parseFloat(value).toFixed(2),
    }))};
  return (
    <div className="dialog-background fade-in">
      <dialog className="dialog slide-in" open={true}>
        <div className="dialog-top-bar">
          <span className="section-header dialog-title">
            Update asset: {asset.name}
          </span>
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
                autoComplete="off"
                placeholder={selectedAssetObj.logo}
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
                placeholder={selectedAssetObj.name}
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
                placeholder={selectedAssetObj.value}
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
  );
};
export default DialogUpdateAsset;
