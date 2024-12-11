import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const { name, itemQuantity,itemUnit, itemCategory, handleSelect } = props;
  const handleCheckboxClick = (e) => {
      e.stopPropagation();
  }
  return (
    <>
      <div className="shopping-list-item-container" onClick={handleSelect}>
        <div>
          <input type="checkbox" onClick={handleCheckboxClick}/>
          <span>{name}</span>
          {(itemUnit !== "") && <span style={{marginLeft:'15px'}}>{itemQuantity} {itemUnit}</span>}
          {(itemUnit === "" && itemQuantity > 1) &&  <span style={{marginLeft:'15px'}}>{itemQuantity} {itemUnit}</span>}
        </div>

        <img
          src={`${name.toLowerCase()}.svg`}
          className="shopping-list-category-img"
        />
      </div>
    </>
  );
};
export default ShoppingListItem;
