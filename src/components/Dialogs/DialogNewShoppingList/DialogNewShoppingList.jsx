import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addShoppingList } from "../../../store/shoppingLists";
const DialogNewShoppingList = (props) => {
    const dispatch = useDispatch();

  const { isDialogOpen, handleClose, setSelected } = props;

  const [formData, setFormData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const listName = formData.name;
    const newList = await dispatch(addShoppingList({ name: listName })).unwrap();
    setSelected(newList);
    handleClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      {isDialogOpen && (
        <div className="dialog-background fade-in">
          <dialog className="dialog" open={isDialogOpen}>
            <div className="dialog-top-bar">
              <span className="section-header dialog-title">New Shopping List</span>
              <button onClick={handleClose} className="close-dialog-btn">
                X
              </button>
            </div>
            <div className="input-container">
              <div className="dialog-input-section">
                <label>List Name</label>
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  className="dialog-input"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="dialog-bottom-btns-container">
              <button className="dialog-btn-cancel" onClick={handleClose}>
                Cancel
              </button>
              <button className="dialog-btn-submit" onClick={handleSubmit}>
                Create
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};
export default DialogNewShoppingList;
