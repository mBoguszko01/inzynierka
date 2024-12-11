import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const { name, quantity,unit, category, handleSelect } = props;
  const handleCheckboxClick = (e) => {
      e.stopPropagation();
  }
  return (
    <>
      <div className="shopping-list-item-container" onClick={handleSelect}>
        <div>
          <input type="checkbox" onClick={handleCheckboxClick}/>
          <span>{name}</span>
          {(unit !== "") && <span style={{marginLeft:'15px'}}>{quantity} {unit}</span>}
          {(unit === "" && quantity > 1) &&  <span style={{marginLeft:'15px'}}>{quantity} {unit}</span>}
        </div>

        <img
          src={`${category.toLowerCase()}.svg`}
          className="shopping-list-category-img"
        />
      </div>
    </>
  );
};
export default ShoppingListItem;
