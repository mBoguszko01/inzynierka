import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./ShoppingListItemInfo.css";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { updateShoppingListItem,deleteShoppingListItem } from "../../../../store/shoppingLists";
const ShoppingListItemInfo = (props) => {
  const dispatch = useDispatch();
  const { shoppingListId,item, exitInfo } = props;
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
    dispatch(updateShoppingListItem({ shoppingListId, itemId:editedItem.item_id, updatedItem:editedItem }))
    exitInfo();
  }

  const deleteHandler = (e) => {
    dispatch(deleteShoppingListItem({ shoppingListId, itemId:editedItem.item_id }))
    exitInfo();
  }
  return (
    <div className="shopping-list-item-info-wrapper">
      <button className="shopping-list-item-info-exit-btn" onClick={exitInfo}>
        X
      </button>
      <form>
        <div className="shopping-list-item-info-container-img">
          <img
            src={`${item.category.toLowerCase()}.svg`}
            className="shopping-list-category-img"
          />
        </div>
        <div className="shopping-list-item-info-container">
          <div className="shopping-list-item-info-vertical">
            <label>Name</label>
            <input type="text" value={editedItem.name} name="name" onChange={handleInputChange}></input>
          </div>

          <div className="shopping-list-item-info-horizontal">
            <div className="shopping-list-item-info-vertical">
              <label>Quantity</label>
              <input type="text" value={editedItem.quantity} name="quantity" onChange={handleInputChange}></input>
            </div>
            <div className="shopping-list-item-info-vertical">
              <label>Unit</label>
              <input type="text" value={editedItem.unit} name="unit" onChange={handleInputChange}></input>
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
