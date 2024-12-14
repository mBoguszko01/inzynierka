import { useDispatch } from "react-redux";
import { useState } from "react";
import "./ShoppingListAddItems.css";
import suggestedProducts from "../../../../data/sugestedProducts";
import {
  addShoppingListItem,
  fetchShoppingListItems,
  increaseItemQuantity,
} from "../../../../store/shoppingLists";

const ShoppingListAddItems = (props) => {
  const dispatch = useDispatch();
  const { shoppingListId, allItems } = props;
  const sugestedProducts = suggestedProducts;

  const [search, setSearch] = useState("");
  const filteredItems = sugestedProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  const handleAddItem = async (product) => {
    const newItem = {
      name: product.name,
      quantity: "1",
      unit: "",
      category: product.category,
    };
    try {
      const existingItem = allItems.find((item) => item.name === newItem.name);
      console.log(existingItem);
      if (existingItem) {
await dispatch(
          increaseItemQuantity({
            shoppingListId,
            itemId: existingItem.item_id,
          })
        ).unwrap();
      } else {
        // Dodaj nowy element, jeśli nie istnieje
        const addedItem = await dispatch(
          addShoppingListItem({ shoppingListId, item: newItem })
        ).unwrap();
      }
      
    } catch (error) {
      console.error("Błąd podczas dodawania elementu:", error);
    }
  };
  const handleDeleteItem = (product, e) => {
    e.stopPropagation();
    updateItemsHandler((prevProducts) =>
      prevProducts.filter((item) => item.itemName !== product.name)
    );
  };

  return (
    <div className="shopping-list-add-new-item-wrapper">
      <div>
        <span className="section-header">Add new item to your list</span>
      </div>
      <div>
        <input
          type="text"
          className="shopping-list-add-item-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="shopping-list-suggested-products-wrapper">
        <h4 style={{ marginBottom: "16px", marginTop: "16px" }}>Suggested</h4>
        <div className="shopping-list-suggested-products-container">
          {filteredItems.map((product, index) => (
            <div
              className="shopping-list-suggested-product"
              key={index}
              onClick={() => handleAddItem(product)}
            >
              <div
                className="shopping-list-add-product-plus"
                style={{
                  backgroundColor: allItems.some(
                    (item) => item.name === product.name
                  )
                    ? "blue"
                    : "#aaaaaa",
                  transform: allItems.some(
                    (item) => item.name === product.name
                  )
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}
              >
                +
              </div>
              <div
                style={{
                  width: "-webkit-fill-available",
                  paddingRight: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {product.name}
                {allItems.some(
                  (item) => item.itemName === product.name
                ) ? (
                  <div
                    className="shopping-list-delete-item"
                    onClick={(e) => handleDeleteItem(product, e)}
                  >
                    x
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShoppingListAddItems;
