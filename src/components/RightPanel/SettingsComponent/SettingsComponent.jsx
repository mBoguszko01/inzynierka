import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DialogNewCategory from "./NewCategoryDialog/NewCategoryDialog";
const SettingsComponent = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoryList);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  }
  return (
    <>
      {isDialogOpen && (
        <DialogNewCategory
          isDialogOpen={isDialogOpen}
          closeDialog={closeDialog}
        />
      )}
      <>
        {categories.map((category) => (
          <div>
            <span>{category.name}</span>
            <span>{category.color}</span>
          </div>
        ))}
        <button onClick={handleOpenDialog}>+Add new category</button>
      </>
    </>
  );
};
export default SettingsComponent;
