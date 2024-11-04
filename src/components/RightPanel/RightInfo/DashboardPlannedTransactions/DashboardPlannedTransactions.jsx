import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../../store/view";
import Transaction from "./Transaction";
import "./DashboardPlannedTransactions.css";

const DashboardPlannedTransactions = () => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Planned Transactions"));
  };

  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );

  let totalPriceOfPlannedTransactions = 0;
  transactions.forEach((transaction) => {
    totalPriceOfPlannedTransactions += transaction.price;
  });

  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="dashboard-planned-transactions-container">
      <span className="section-header">Planned Transactions</span>
      <span className="section-small-text" style={{ marginBottom: 7 }}>
        Total
      </span>
      <span className="expense section-large-text" style={{ marginBottom: 40 }}>
        -{totalPriceOfPlannedTransactions}$
      </span>
      {limitedTransactions.map((transaction, index) => (
        <>
          <Transaction
            paymentDate={transaction.date.toLocaleDateString()}
            price={transaction.price}
            imgSrc={"/Netflix_icon.jpg"}
          >
            {transaction.name}
          </Transaction>
        </>
      ))}
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default  DashboardPlannedTransactions;
