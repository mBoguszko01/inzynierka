import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../../store/view";
import DashboardAsset from "./DashboardAsset";
const DashboardTotalAssets = () => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView('Total Assets'));
  };

  const assets = useSelector(
    (state) => state.assets.totalAssets
  )
  let topThreeAssets = [];
  topThreeAssets = [...assets].sort((a,b) => b.value - a.value).slice(0,3);

  let totalAssets = 0;
  assets.forEach(asset => {
    totalAssets += asset.value
  });


  return (
    <div className="dashboard-assets-container">
      <span className="section-header">Total Assets</span>
      <span
        className="dashboard-asset-balance section-large-text"
        style={{ marginBottom: 40 }}
      >
        {`+${totalAssets}$`}
      </span>
      {topThreeAssets.map((asset,index) => (
        <>
          <DashboardAsset imgSrc={asset.logo} balance={asset.value}>{asset.name}</DashboardAsset>
        </>
      ))}
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default DashboardTotalAssets;
