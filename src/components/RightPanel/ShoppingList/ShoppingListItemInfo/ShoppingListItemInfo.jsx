import { useState, useEffect } from "react";
import "./ShoppingListItemInfo.css";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
const ShoppingListItemInfo = (props) => {
  //nazwa , ilosc, jednostka , kategoria jako obrazek,
  const { item, exitInfo, changeHandler, deleteHandler } = props;
  const [editedItem, setEditedItem] = useState({ ...item });
  useEffect(() => {
    setEditedItem({ ...item });
  }, [item]);

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

      <button className="shopping-list-item-info-delete-btn" onClick={()=>{deleteHandler(item)}}><Icon path={mdiTrashCanOutline} size={1} /></button>

      <div className="shopping-list-item-info-confirmation-btn">
        <button onClick={confirmChanges}>Confirm</button>
      </div>
    </div>
  );
};
export default ShoppingListItemInfo;
