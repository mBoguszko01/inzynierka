import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./ShoppingListAddItems.css";
import suggestedProducts from "../../../../data/sugestedProducts";
import { couponsActions } from "../../../../store/coupons.js";
import {
  addShoppingListItem,
  fetchShoppingListItems,
  increaseItemQuantity,
} from "../../../../store/shoppingLists";
import { fetchCoupons } from "../../../../store/coupons";
import axios from "axios";

const ShoppingListAddItems = (props) => {
  const dispatch = useDispatch();
  const { shoppingListId, allItems } = props;
  const sugestedProducts = suggestedProducts;

  const [input, setInput] = useState("");
  const filteredItems = sugestedProducts.filter((item) =>
    item.name.toLowerCase().includes(input.toLocaleLowerCase())
  );

  useEffect(()=>{dispatch(fetchCoupons(shoppingListId));}, [dispatch]);

  const handleAddCustomItem = async () => {
    const newItem = {
      name: input,
      quantity: "1",
      unit: "",
      category: "Custom",
    };
    try {
      const existingItem = allItems.find((item) => item.name === newItem.name);
      if (existingItem) {
        await dispatch(
          increaseItemQuantity({
            shoppingListId,
            itemId: existingItem.item_id,
          })
        ).unwrap();
      } else {
        const addedItem = await dispatch(
          addShoppingListItem({ shoppingListId, item: newItem })
        ).unwrap();
        dispatch(fetchCoupons(shoppingListId))  
      }
    } catch (error) {
      console.error("Błąd podczas dodawania elementu:", error);
    }
  };
  const handleAddPredefinedItem = async (product) => {
    const newItem = {
      name: product.name,
      quantity: "1",
      unit: "",
      category: product.category,
    };
    try {
      const existingItem = allItems.find((item) => item.name === newItem.name);
      if (existingItem) {
        await dispatch(
          increaseItemQuantity({
            shoppingListId,
            itemId: existingItem.item_id,
          })
        ).unwrap();
      } else {
        const addedItem = await dispatch(
          addShoppingListItem({ shoppingListId, item: newItem })
        ).unwrap();
        dispatch(fetchCoupons(shoppingListId))
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="shopping-list-suggested-products-wrapper">
      {input !== "" && 
        <div className="shopping-list-custom-item-container">
          <div
            className="shopping-list-suggested-product"
            onClick={() => handleAddCustomItem()}
          ><div
              className="shopping-list-add-product-plus"
              style={{
                backgroundColor: allItems.some(
                  (item) => item.name === input
                )
                  ? "blue"
                  : "#aaaaaa",
                transform: allItems.some((item) => item.name === input)
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
              {input}
              {allItems.some((item) => item.itemName === input) ? (
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
        </div>
      }
        <h4 style={{ marginBottom: "16px", marginTop: "16px" }}>Suggested</h4>
        <div className="shopping-list-suggested-products-container">
          {filteredItems.map((product, index) => (
            <div
              className="shopping-list-suggested-product"
              key={index}
              onClick={() => handleAddPredefinedItem(product)}
            >
              <div
                className="shopping-list-add-product-plus"
                style={{
                  backgroundColor: allItems.some(
                    (item) => item.name === product.name
                  )
                    ? "blue"
                    : "#aaaaaa",
                  transform: allItems.some((item) => item.name === product.name)
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
                {allItems.some((item) => item.itemName === product.name) ? (
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
