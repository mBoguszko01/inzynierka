import { useDispatch, useSelector } from "react-redux";
import "./ShoppingListItem.css";
import { updateShoppingListItem } from "../../../../store/shoppingLists";
const ShoppingListItem = (props) => {
  const dispatch = useDispatch();
  const itemsCategories = useSelector(
    (state) => state.shoppingListItemCategories.shoppingListItemsCategoriesList
  );

  const { shoppingListId, item, handleSelect } = props;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    const updatedItem = { ...item, is_purchased: !item.is_purchased };
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
            onClick={handleCheckboxClick}
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

        <img
          src={`${item.category.toLowerCase()}.svg`}
          className="shopping-list-category-img"
        />
      </div>
    </>
  );
};
export default ShoppingListItem;
