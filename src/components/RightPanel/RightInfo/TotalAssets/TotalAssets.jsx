import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../../store/view";
import Asset from "./Asset";
const TotalAssets = () => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView('Total Assets'));
  };
  return (
    <div className="assets-container">
      <span className="section-header">Total Assets</span>
      <span
        className="asset-balance section-large-text"
        style={{ marginBottom: 40 }}
      >
        +12,300$
      </span>
      <Asset imgSrc={"/ING_icon.jpg"} balance={"+10,300$"}>
        Ing
      </Asset>
      <Asset imgSrc={"/Revolut_icon.jpg"} balance={"+1000$"}>
        Revlout
      </Asset>
      <Asset imgSrc={"/Cash_icon.jpg"} balance={"+500$"}>
        Cash
      </Asset>
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default TotalAssets;
