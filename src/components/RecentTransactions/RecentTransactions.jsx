import "./RecentTransactions.css";

const RecentTransactions = (props) => {
  return (
    <>
      <div className="recent-transactions-top">
        <span className="section-header">Recent Transactions</span>
        <div className="recent-transactions-show-more">
          <button target="_blank">Show more</button>
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
