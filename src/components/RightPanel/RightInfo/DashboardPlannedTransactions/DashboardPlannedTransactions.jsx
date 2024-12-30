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
    totalPriceOfPlannedTransactions += parseFloat(transaction.price);
  });

  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  return (
    <div className="dashboard-planned-transactions-container">
      <span className="section-header" style={{marginTop:16}}>Planned Transactions</span>
      <span className="section-small-text" style={{ marginBottom: 7 }}>
        Total
      </span>
      <span className="expense section-large-text" style={{ marginBottom:0 }}>
        -{totalPriceOfPlannedTransactions}$
      </span>
      <div className="dashboard-transactions-container">
        {limitedTransactions.length > 0 &&  limitedTransactions.map((transaction, index) => (
          <>
            <Transaction
              key={index}
              paymentDate={transaction.date.substring(0, 10)}
              price={transaction.price}
              imgSrc={transaction.logo_url}
            >
              {transaction.name}
            </Transaction>
          </>
        ))}
        {limitedTransactions.length === 0 && <span className="no-data-info">There is no data to display.</span>}
      </div>
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default DashboardPlannedTransactions;
