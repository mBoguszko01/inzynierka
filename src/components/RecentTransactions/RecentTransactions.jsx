import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/view";
import "./RecentTransactions.css";

const RecentTransactions = (props) => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Transactions"));
  };
  return (
    <>
      <div className="recent-transactions-top">
        <span className="section-header">Recent Transactions</span>
        <div className="recent-transactions-show-more">
          <button onClick={changeViewHandler}>Show more</button>
        </div>
      </div>

      <table className="recent-transactions">
        <tr className="tr-headings">
          <th>Account</th>
          <th>Category</th>
          <th>Date</th>
          <th>Ammount</th>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
      </table>
    </>
  );
};
export default RecentTransactions;
