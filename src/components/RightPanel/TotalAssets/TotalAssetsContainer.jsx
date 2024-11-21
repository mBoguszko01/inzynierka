import { useState } from "react";

import Assets from "./Assets";
import "./TotalAssetsContainer.css";
import DialogNewAsset from "../../Dialogs/DialogNewAsset"; 

const TotalAssetsContainer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <div className="total-assets-container">
      <div className="total-assets-top">
        <div className="total-assets-add-new-asset">
          <button onClick={openDialog}>+ Add new asset</button>
        </div>
      </div>
      <Assets />
      {
        <DialogNewAsset
          isDialogOpen={isDialogOpen}
          closeDialog={closeDialog}
          setGeneralFormData={()=>{}}
        />
      }
    </div>
  );
};
export default TotalAssetsContainer;
