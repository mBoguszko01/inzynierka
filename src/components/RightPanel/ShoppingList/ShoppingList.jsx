import { useState } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import ShoppingListItemInfo from "./ShoppingListItemInfo/ShoppingListItemInfo";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState([
    {
      itemId: 1,
      itemName: "ser",
      itemQuantity: "1",
      itemUnity: "",
      itemCategory: "Diary Products",
    },
    {
      itemId: 2,
      itemName: "karma",
      itemQuantity: "1",
      itemUnity: "",
      itemCategory: "Pet Products",
    },
    {
      itemId: 3,
      itemName: "dorsz",
      itemQuantity: "1",
      itemUnity: "",
      itemCategory: "Fish",
    },
    {
      itemId: 4,
      itemName: "mąka",
      itemQuantity: "1",
      itemUnity: "",
      itemCategory: "Dry Products",
    },
  ]);
  const updateItem = (updatedItem) => {
    setAllItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === updatedItem.itemId ? updatedItem : item
      )
    );
  };
  const filteredItems = allItems.filter((item) =>
    item.itemName.toLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log(selectedItem);
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
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ShoppingList;
