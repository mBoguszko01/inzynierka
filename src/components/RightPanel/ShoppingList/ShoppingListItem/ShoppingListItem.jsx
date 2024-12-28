import { useDispatch, useSelector } from "react-redux";
import "./ShoppingListItem.css";
import { updateShoppingListItem } from "../../../../store/shoppingLists";
import axios from "axios";
const ShoppingListItem = (props) => {
  const dispatch = useDispatch();

  const { shoppingListId, item, handleSelect } = props;

  const handleCheckboxClick = (e) => {
    const updatedItem = { ...item, is_purchased: !item.is_purchased };
    axios.post("http://localhost:5000/api/purchase-item", {item: updatedItem});

    dispatch(
      updateShoppingListItem({
        shoppingListId,
        itemId: item.item_id,
        updatedItem,
      })
    );
  };
  return (
    <>
      <div className="shopping-list-item-container" onClick={handleSelect}>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckboxClick}
            onClick={(e)=>{e.stopPropagation();}}
            checked={item.is_purchased}
          />
          <span>{item.name}</span>
          {item.unit !== "" && (
            <span style={{ marginLeft: "15px" }}>
              {item.quantity} {item.unit}
            </span>
          )}
          {item.unit === "" && item.quantity > 1 && (
            <span style={{ marginLeft: "15px" }}>
              {item.quantity} {item.unit}
            </span>
          )}
        </div>
          {item.category !== 'Custom' && <img
          src={`${item.category.toLowerCase()}.svg`}
          className="shopping-list-category-img"
        />}
        {item.category === 'Custom' && <img
          src={"custom.png"}
          className="shopping-list-category-img"
        />}
        
      </div>
    </>
  );
};
export default ShoppingListItem;
