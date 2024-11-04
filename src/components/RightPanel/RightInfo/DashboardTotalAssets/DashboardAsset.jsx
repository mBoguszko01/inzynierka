import "./DashboardAsset.css";
const DashboardAsset = (props) => {
  const name = props.children;
  const { balance, imgSrc } = props;
  return (
    <div className="dashboard-asset-container">
      <div className="dashboard-asset-logo-and-name">
        <img src={imgSrc} alt="account picture" width={25} />
        <span className="dashboard-asset-name">{name}</span>
      </div>
      <span className="dashboard-asset-balance">{balance}</span>
    </div>
  );
};
export default DashboardAsset;
