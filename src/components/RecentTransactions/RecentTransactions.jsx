import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/view";
import { useState } from "react";
import "./RecentTransactions.css";

const RecentTransactions = (props) => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const {limiter, transactions} = props;
  
  let limitedTransactions = [];
  limitedTransactions = [...transactions] // Tworzymy nową kopię tablicy - był z tym error bo chciałem zmieniać bezpośrednio transactions (redux wyrzucał błąd)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limiter);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Transactions"));
  };
  return (
    <>
      {currView.selectedView === "Dashboard" && (
        <div className="recent-transactions-top">
          <span className="section-header">Recent Transactions</span>
          <div className="recent-transactions-show-more">
            <button onClick={changeViewHandler}>Show more</button>
          </div>
        </div>
      )}

      <table className="recent-transactions">
        <thead>
          <tr className="tr-headings">
            <th>Account</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {limitedTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.asset}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date.substring(0,10)}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default RecentTransactions;
