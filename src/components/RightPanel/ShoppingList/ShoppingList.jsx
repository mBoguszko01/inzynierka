import { useState } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  const [search, setSearch] = useState("");
  const allItems = [
    { itemName: "ser", itemQuantity: "1", itemCategory: "Diary Products" },
    { itemName: "karma", itemQuantity: "1", itemCategory: "Pet Products" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
    { itemName: "dorsz", itemQuantity: "1", itemCategory: "Fish" },
  ];

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
              <input type="text" className="shopping-list-search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
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
                />
              ))
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
        <div className="products-container"></div>
      </div>
    </>
  );
};
export default ShoppingList;
