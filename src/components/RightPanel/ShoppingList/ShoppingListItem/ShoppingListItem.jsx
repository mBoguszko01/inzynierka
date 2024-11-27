import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const { itemName, itemQuantity, itemCategory, handleSelect } = props;
  const handleCheckboxClick = (e) => {
      e.stopPropagation();
  } 
  return (
    <>
      <div className="shopping-list-item-container" onClick={handleSelect}>
        <div>
          <input type="checkbox" onClick={handleCheckboxClick}/>
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
