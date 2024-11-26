import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  return (
    <>
      <div className="shopping-list-main-container">
        <div className="shopping-list-container">
          <div className="shopping-list-title-container">
            <div className="shopping-list-title-search-container">
              <span className="section-header shopping-list-title">
                Nazwa listy
              </span>
              <input type="text" className="shopping-list-search"></input>
            </div>
            <div className="separator"></div>
          </div>
          <div className="shopping-list-items-container">
            <ShoppingListItem
              itemName="test"
              itemQuantity="5"
              itemCategory=""
            ></ShoppingListItem>
            <ShoppingListItem
              itemName="test"
              itemQuantity="5"
              itemCategory=""
            ></ShoppingListItem>
          </div>
        </div>
        <div className="products-container"></div>
      </div>
    </>
  );
};
export default ShoppingList;
