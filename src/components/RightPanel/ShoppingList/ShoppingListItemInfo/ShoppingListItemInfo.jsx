import { useState, useEffect } from "react";
import "./ShoppingListItemInfo.css";

const ShoppingListItemInfo = (props) => {
  //nazwa , ilosc, jednostka , kategoria jako obrazek,
  const { item, exitInfo, changeHandler } = props;
  const [editedItem, setEditedItem] = useState({ ...item });
  useEffect(() => {
    setEditedItem({ ...item });
  }, [item]);
  console.log(item);
  console.log(editedItem);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const confirmChanges = (e) => {
    e.preventDefault();
    changeHandler(editedItem);
  }
  return (
    <div className="shopping-list-item-info-wrapper">
      <button className="shopping-list-item-info-exit-btn" onClick={exitInfo}>
        X
      </button>
      <form>
        <div className="shopping-list-item-info-container-img">
          <img
            src={`${item.itemCategory.toLowerCase()}.svg`}
            className="shopping-list-category-img"
          />
        </div>
        <div className="shopping-list-item-info-container">
          <div className="shopping-list-item-info-vertical">
            <label>Name</label>
            <input type="text" value={editedItem.itemName} name="itemName" onChange={handleInputChange}></input>
          </div>

          <div className="shopping-list-item-info-horizontal">
            <div className="shopping-list-item-info-vertical">
              <label>Quantity</label>
              <input type="text" value={editedItem.itemQuantity} name="itemQuantity" onChange={handleInputChange}></input>
            </div>
            <div className="shopping-list-item-info-vertical">
              <label>Unit</label>
              <input type="text" value={editedItem.itemUnit} name="itemUnit" onChange={handleInputChange}></input>
            </div>
          </div>
        </div>
      </form>
      <div className="shopping-list-item-info-confirmation-btn">
        <button onClick={confirmChanges}>Confirm</button>
      </div>
    </div>
  );
};
export default ShoppingListItemInfo;
