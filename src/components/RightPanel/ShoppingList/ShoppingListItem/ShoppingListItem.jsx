import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const { itemName, itemQuantity, itemCategory } = props;
  return (
    <>
      <div className="shopping-list-item-container">
        <div>
          <input type="checkbox"/>
          <span>{itemName}</span>
          {itemQuantity > 1 && <span>{itemQuantity}</span>}
        </div>

        <img
          src={`${itemCategory.toLowerCase()}.svg`}
          className="shopping-list-category-img"
        />
      </div>
    </>
  );
};
export default ShoppingListItem;
