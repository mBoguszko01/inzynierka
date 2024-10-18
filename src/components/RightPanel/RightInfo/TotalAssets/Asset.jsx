import "./Asset.css";
const Asset = (props) => {
  const name = props.children;
  const { balance, imgSrc } = props;
  return (
    <div className="asset-container">
      <div className="asset-logo-and-name">
        <img src={imgSrc} alt="account picture" width={25} />
        <span className="asset-name">{name}</span>
      </div>
      <span className="asset-balance">{balance}</span>
    </div>
  );
};
export default Asset;
