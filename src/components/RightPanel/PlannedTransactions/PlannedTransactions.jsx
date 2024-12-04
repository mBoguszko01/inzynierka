import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PlannedTransactions = () => {
  const assets = useSelector((state) => state.assets.totalAssets);
  const categories = useSelector((state) => state.categories.categoryList);
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
        {limitedTransactions.map((transaction, index) => {
          return(
            <tr key={index}>
            <td>{transaction.transaction_name !== undefined ? transaction.transaction_name : transaction.name}</td>
            <td>{transaction.asset_name !== undefined ? transaction.asset_name : assets.find((asset) => asset.id === transaction.asset_id).name}</td>
            <td>{transaction.category_name !== undefined ? transaction.category_name : categories.find((category) => category.id === transaction.category_id).name}</td>
            <td>{transaction.price}</td>
            <td>{transaction.date.substring(0,10)}</td>
            <td>Every {transaction.repeat_value} {transaction.repeat_value === 1 ? transaction.repeat_unit.substring(0,transaction.repeat_unit.length - 1) : transaction.repeat_unit}</td>
            <td>DODAĆ LOGO</td>
          
          </tr>
          )
        })}
      </tbody>
    </table>
  );
};
export default PlannedTransactions;
