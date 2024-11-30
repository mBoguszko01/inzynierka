import { useState } from "react";
import "./ShoppingListAddItems.css";
import suggestedProducts from "../../../../data/sugestedProducts";
const ShoppingListAddItems = (props) => {
  const { updateItemsHandler, allItems } = props;
  const sugestedProducts = suggestedProducts;

  const [search, setSearch] = useState("");
  const filteredItems = sugestedProducts.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  const handleAddItem = (product) => {
    const newItem = {
      itemId: allItems.length + 1,
      itemName: product.product_name,
      itemQuantity: "1",
      itemUnity: "",
      itemCategory: product.category,
    };

    updateItemsHandler((prevProducts) => {
      const alreadyExists = prevProducts.some(
        (item) => item.itemName === newItem.itemName
      );
      if (alreadyExists) {
        return prevProducts.map((item) =>
          item.itemName === newItem.itemName
            ? {
                ...item,
                itemQuantity: (parseInt(item.itemQuantity) + 1).toString(),
              }
            : item
        );
      } else {
        return [...prevProducts, newItem];
      }
    });
  };
  const handleDeleteItem = (product,e) => {
    e.stopPropagation();
    updateItemsHandler((prevProducts) =>
      prevProducts.filter((item) => item.itemName !== product.product_name)
    );
  }
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
      <div className="test">
        <h4>Suggested</h4>
        <div className="shopping-list-suggested-products-container">
          {filteredItems.map((product, index) => (
            <div
              className="shopping-list-suggested-product"
              key={index}
              onClick={() => handleAddItem(product)}
            >
              <div className="shopping-list-add-product-plus"style={{
                  backgroundColor: allItems.some(
                    (item) => item.itemName === product.product_name
                  )
                    ? "blue"
                    : "#aaaaaa", // Jeżeli produkt już istnieje, zmień tło na niebieskie
                  transform: allItems.some(
                    (item) => item.itemName === product.product_name
                  )
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}>+</div>
              <div
                style={{
                  width: "-webkit-fill-available",
                  paddingRight: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {product.product_name}
                {allItems.some(
                  (item) => item.itemName === product.product_name
                ) ? (
                  <div className="shopping-list-delete-item" onClick={(e)=>handleDeleteItem(product,e)}>x</div>
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
