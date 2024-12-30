import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./ShoppingList.css";
import ShoppingListDetails from "./ShoppingListDetails";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import { fetchShoppingLists } from "../../../store/shoppingLists";
import DialogNewShoppingList from "../../Dialogs/DialogNewShoppingList/DialogNewShoppingList";
const ShoppingLists = () => {
  const dispatch = useDispatch();
  const shoppingLists = useSelector(
    (state) => state.shoppingLists.shoppingLists
  );
  const status = useSelector((state) => state.shoppingLists.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShoppingLists());
    }
  }, [dispatch, status]);
  const [selectedList, setSelectedList] = useState(null);
  const handleSelect = (shoppingList) => {
    setSelectedList(shoppingList);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {!selectedList && (
        <>
          <DialogNewShoppingList isDialogOpen={isDialogOpen} handleClose={() => setIsDialogOpen(false)} setSelected={setSelectedList}/>
          <div className="all-shopping-lists-container">
            <div style={{ alignSelf: "end" }}>
              <button className="new-shopping-list-button" onClick={()=>setIsDialogOpen(true)}>
                +Create new shopping list
              </button>
            </div>
            <span className="no-data-info">There is no data to display.</span>
            {shoppingLists.map((shoppingList, index) => (
              <div
                className="shopping-list"
                onClick={() => handleSelect(shoppingList)}
                index={index}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {shoppingList.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span>
                      {shoppingList.total_items > 0 ?  `${shoppingList.purchased_items}/${shoppingList.total_items}` : 'The list is empty'}
                    </span>
                    <button
                      className="edit-button"
                      onClick={() => handleClick(asset)}
                    >
                      <Icon path={mdiPencilOutline} size={0.8} />
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3B2E75",
                      width: `${
                        shoppingList.total_items > 0
                          ? (shoppingList.purchased_items /
                              shoppingList.total_items) *
                            100
                          : 0
                      }%`,
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedList && (
        <ShoppingListDetails selectedShoppingList={selectedList} />
      )}
    </>
  );
};

export default ShoppingLists;
