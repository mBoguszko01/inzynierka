import { useState } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import ShoppingListItemInfo from "./ShoppingListItemInfo/ShoppingListItemInfo";
import ShoppingListAddItems from "./ShoppingListAddItems/ShoppingListAddItems";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const updateItem = (updatedItem) => {
    setAllItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === updatedItem.itemId ? updatedItem : item
      )
    );
    setSelectedItem(null);
  };
  const deleteItem = (itemToDelete) => {
    setAllItems((prevProducts) =>
      prevProducts.filter((item) => item.itemName !== itemToDelete.itemName)
    );
    setSelectedItem(null);
  }
  const filteredItems = allItems.filter((item) =>
    item.itemName.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  return (
    <>
      <div className="shopping-list-main-container">
        <div className="shopping-list-container">
          <div className="shopping-list-title-container">
            <div className="shopping-list-title-search-container">
              <span className="section-header shopping-list-title">
                Nazwa listy
              </span>
              <input
                type="text"
                className="shopping-list-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </div>
            <div className="separator"></div>
          </div>
          <div className="shopping-list-items-container">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <ShoppingListItem
                  key={index}
                  itemName={item.itemName}
                  itemQuantity={item.itemQuantity}
                  itemUnit={item.itemUnit}
                  itemCategory={item.itemCategory}
                  handleSelect={() => setSelectedItem(item)}
                />
              ))
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
        <div className="shopping-list-right-panel">
          {selectedItem !== null && (
            <ShoppingListItemInfo
              item={selectedItem}
              exitInfo={() => setSelectedItem(null)}
              changeHandler={updateItem}
              deleteHandler={deleteItem}
            />
          )}
          {selectedItem === null && <ShoppingListAddItems updateItemsHandler = {setAllItems} allItems = {allItems}/>}
        </div>
      </div>
    </>
  );
};
export default ShoppingList;
