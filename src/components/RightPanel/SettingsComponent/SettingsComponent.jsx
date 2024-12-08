import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DialogNewCategory from "../../Dialogs/DialogNewCategory/NewCategoryDialog";
import DialogUpdateCategory from "../../Dialogs/DialogUpdateCategory/DialogUpdateCategory";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";

const SettingsComponent = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoryList); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpenDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  const handleEditDialog = (category) => {
    setIsEditDialogOpen(true);
    setSelectedCategory(category);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      {isDialogOpen && (
        <DialogNewCategory
          isDialogOpen={isDialogOpen}
          closeDialog={closeDialog}
        />
      )}
      {!isDialogOpen && isEditDialogOpen && (
        <DialogUpdateCategory
          category={selectedCategory}
          closeDialog={() => setIsEditDialogOpen(false)}
          isDialogOpen={isEditDialogOpen}
        />
      )}
      <>
        {categories.map((category) => (
          <div>
            <span>{category.name}</span>
            <span>{category.color}</span>
            <button
              className="edit-button"
              onClick={() => handleEditDialog(category)}
            >
              <Icon path={mdiPencilOutline} size={0.8} />
            </button>
          </div>
        ))}
        <button onClick={handleOpenDialog}>+Add new category</button>
      </>
    </>
  );
};
export default SettingsComponent;
