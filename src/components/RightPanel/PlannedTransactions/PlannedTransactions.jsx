import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PlannedTransactions = () => {
  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  const [limiter, setLimiter] = useState(50);

  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limiter);
  return (
    <table className="recent-transactions">
      <thead>
        <tr className="tr-headings">
          <th>Name</th>
          <th>Account</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Logo</th>
        </tr>
      </thead>
      <tbody>
        {limitedTransactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.name}</td>
            <td>{transaction.asset}</td>
            <td>{transaction.date.toLocaleDateString()}</td>
            <td>{transaction.price}</td>
            <td>DODAĆ LOGO</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PlannedTransactions;
