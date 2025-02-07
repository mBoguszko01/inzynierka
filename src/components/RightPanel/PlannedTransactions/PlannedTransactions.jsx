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
          <th>Asset</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Repeat</th>
          <th>Logo</th>
        </tr>
      </thead>
      <tbody>
        {limitedTransactions.map((transaction, index) => (
            <tr key={index}>
            <td>{transaction.name}</td>
            <td>{transaction.asset}</td>
            <td>{transaction.category}</td>
            <td>{transaction.price}</td>
            <td>{transaction.date.substring(0,10)}</td>
            <td>Every {transaction.repeatValue} {transaction.repeatValue === 1 ? transaction.repeatUnit.substring(0,transaction.repeatUnit.length - 1) : transaction.repeatUnit}</td>
            <td>DODAĆ LOGO</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PlannedTransactions;
