import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import ShoppingListItemInfo from "./ShoppingListItemInfo/ShoppingListItemInfo";
import ShoppingListAddItems from "./ShoppingListAddItems/ShoppingListAddItems";
import { fetchShoppingListItems } from "../../../store/shoppingLists";

const ShoppingListDetails = (props) => {
  const { selectedShoppingList } = props;

  const dispatch = useDispatch();
  const allItems = useSelector(
    (state) => state.shoppingLists.items[selectedShoppingList.id] || []
  );
  const status = useSelector((state) => state.shoppingLists.status);

  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchShoppingListItems(selectedShoppingList.id));
  }, [dispatch, selectedShoppingList.id]);

  if (status === "loading") return <p>Loading items...</p>;
  if (status === "failed") return <p>Error loading items!</p>;

  const filteredItems = allItems.filter((item) => {
    return item.name.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <>
      <div className="shopping-list-main-container">
        <div className="shopping-list-container">
          <div className="shopping-list-title-container">
            <div className="shopping-list-title-search-container">
              <span className="section-header shopping-list-title">
                {selectedShoppingList.name}
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
              filteredItems.map((item, index) => {
                return (
                  <ShoppingListItem
                    key={index}
                    shoppingListId={selectedShoppingList.id}
                    item={item}
                    handleSelect={() => setSelectedItem(item)}
                  />
                );
              })
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
        <div className="shopping-list-right-panel">
          {selectedItem !== null && (
            <ShoppingListItemInfo
              shoppingListId={selectedShoppingList.id}
              item={selectedItem}
              exitInfo={() => setSelectedItem(null)}
            />
            /* <ShoppingListItemInfo
              item={selectedItem}
              exitInfo={() => setSelectedItem(null)}
              changeHandler={updateItem}
              deleteHandler={deleteItem}
            /> */
          )}
          {selectedItem === null && (
            <ShoppingListAddItems
              allItems={allItems}
              shoppingListId={selectedShoppingList.id}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ShoppingListDetails;
