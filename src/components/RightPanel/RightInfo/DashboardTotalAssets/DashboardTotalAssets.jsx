import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAssets } from "../../../../store/assets"; 
import { viewActions } from "../../../../store/view";
import DashboardAsset from "./DashboardAsset";

const DashboardTotalAssets = () => {
  const dispatch = useDispatch();
  const { totalAssets, status, error } = useSelector((state) => state.assets);
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAssets());
    }
  }, [dispatch, status]);

  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Total Assets"));
  };

  let totalAssetsValue = 0;
  totalAssets.forEach((asset) => {
    totalAssetsValue += parseFloat(asset.value);
  });
  const topThreeAssets = [...totalAssets]
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);

  if (status === "loading") {
    return <p>Ładowanie danych...</p>;
  }

  if (status === "failed") {
    return <p>Błąd: {error}</p>;
  }

  return (
    <div className="dashboard-assets-container">
      <span className="section-header">Total Assets</span>
      <span
        className="dashboard-asset-balance section-large-text"
        style={{ marginBottom: 40 }}
      >
        {`+${totalAssetsValue}$`}
      </span>

      {topThreeAssets.map((asset, index) => (
        <DashboardAsset
          key={index}
          imgSrc={asset.logo}
          balance={asset.value}
        >
          {asset.name}
        </DashboardAsset>
      ))}

      <div className="separator"></div>


      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};

export default DashboardTotalAssets;
