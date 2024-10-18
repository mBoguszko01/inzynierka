import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../../store/view";
import Transaction from "./Transaction";
import "./PlannedTransactions.css";

const PlannedTransactions = () => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Planned Transactions"));
  };
  return (
    <div className="planned-transactions-container">
      <span className="section-header">Planned Transactions</span>
      <span className="section-small-text" style={{ marginBottom: 7 }}>
        Total
      </span>
      <span className="expense section-large-text" style={{ marginBottom: 40 }}>
        -200$
      </span>

      <Transaction
        paymentDate={"2024/10/17"}
        price={"-22,90 $"}
        imgSrc={"/Netflix_icon.jpg"}
      >
        Netflix subscription
      </Transaction>
      <Transaction
        paymentDate={"2024/10/21"}
        price={"-13,99 $"}
        imgSrc={"/Youtube_icon.jpg"}
      >
        Youtube Premium subscription
      </Transaction>
      <Transaction
        paymentDate={"2024/10/25"}
        price={"-60,00 $"}
        imgSrc={"/Gym_icon.jpg"}
      >
        Gym membership
      </Transaction>
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default PlannedTransactions;
