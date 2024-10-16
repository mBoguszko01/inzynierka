import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-right-panel-upper-content">
        <div className="dashboard-left-container">
          <div className="dashboard-cash-chart"></div>
          <div className="dashboard-circular-charts-container">
            <div className="dashboard-circular-chart"></div>
            <div className="dashboard-circular-chart"></div>
          </div>
        </div>
        <div className="dashboard-right-container"></div>
      </div>
      <div className="dashboard-recent-transactions">

      </div>
    </div>
  );
};
export default Dashboard;
