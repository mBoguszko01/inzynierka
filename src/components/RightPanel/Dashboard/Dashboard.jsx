import { useSelector } from "react-redux";
import CashChart from "../CashChart/CashChart";
import CircularChart from "../CircularChart/CircularChart";
import RightInfo from "../RightInfo/RightInfo";
import RecentTransactions from "../../RecentTransactions/RecentTransactions";

import "./Dashboard.css";

const Dashboard = (props) => {
  const transactions = useSelector(
    (state) => state.transactions.transactionsList
  );
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-right-panel-upper-content">
        <div className="dashboard-left-container">
          <div className="dashboard-cash-chart"><CashChart /></div>
          <div className="dashboard-circular-charts-container">
            <div className="dashboard-circular-chart"><CircularChart chartName="This Month Expenses" /></div>
            <div className="dashboard-circular-chart"><CircularChart chartName="Distribution of Financial Assets"/></div>
          </div>
        </div>
        <div className="dashboard-right-container"><RightInfo /></div>
      </div>
      <div className="dashboard-recent-transactions">
        <RecentTransactions limiter={7} transactions={transactions}/>
      </div>
    </div>
  );
};
export default Dashboard;
