import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const { itemName, itemQuantity,itemUnit, itemCategory, handleSelect } = props;
  const handleCheckboxClick = (e) => {
      e.stopPropagation();
  }
  console.log(itemUnit); 
  return (
    <>
      <div className="shopping-list-item-container" onClick={handleSelect}>
        <div>
          <input type="checkbox" onClick={handleCheckboxClick}/>
          <span>{itemName}</span>
          {(itemUnit !== "") && <span style={{marginLeft:'15px'}}>{itemQuantity} {itemUnit}</span>}
          {(itemUnit === "" && itemQuantity > 1) &&  <span style={{marginLeft:'15px'}}>{itemQuantity} {itemUnit}</span>}
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
