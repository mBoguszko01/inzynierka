import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PlannedTransactions = () => {
  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  let limitedTransactions = [];
  limitedTransactions = [...transactions] // Tworzymy nową kopię tablicy - był z tym error bo chciałem zmieniać bezpośrednio transactions (redux wyrzucał błąd)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 50);
  return (
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
            <td>{transaction.date.toLocaleDateString()}</td>
            <td>{transaction.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PlannedTransactions;
