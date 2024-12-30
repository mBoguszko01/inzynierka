import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Assets.css";
import Icon from '@mdi/react';
import { mdiPencilOutline } from '@mdi/js';
import DialogUpdateAsset from "../../Dialogs/DialogUpdateAsset/DialogUpdateAsset";

const Assets = () => {
  const assets = useSelector((state) => state.assets.totalAssets);
  const [limiter, setLimiter] = useState(50);
  const [showDialog, setShowDialog] = useState(false);
  const [seletedAsset, setSelectedAsset] = useState(null);

  let limitedAssets = [];
  limitedAssets = [...assets].slice(0, limiter);
  const handleClick = (asset) => {
    setSelectedAsset(asset);
    setShowDialog(true);
  }
  const closeDialog = () => {
    setSelectedAsset(null);
    setShowDialog(false);
  }
  return (<>
    <table className="assets-table">
      <thead>
        <tr className="tr-headings">
          <th>Logo</th>
          <th>Name</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {limitedAssets.length > 0 && limitedAssets.map((asset, index) => (
          <tr key={index}>
            <td>DODAC LOGO</td>
            <td>{asset.name}</td>
            <td>{asset.value}</td>
            <td><button className="edit-button" onClick={()=> handleClick(asset)}><Icon path={mdiPencilOutline} size={0.8} /></button></td>
          </tr>
        ))}
      </tbody>
    </table>
    {limitedAssets.length === 0 && <span className="no-data-info" style={{display: 'block', width: '100%', textAlign:'center', marginTop:'30px'}}>There is no data to display.</span>}
    {showDialog && <DialogUpdateAsset asset={seletedAsset} closeDialog={closeDialog}/>}
    </>
  );
};
export default Assets;
