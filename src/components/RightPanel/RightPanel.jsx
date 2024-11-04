import { useSelector } from "react-redux";
import TobBar from "./TopBar/TopBar";
import './RightPanel.css';
import Dashboard from "./Dashboard/Dashboard";
import PlannedTransactionsContainer from "./PlannedTransactions/PlannedTransactionsContainer";
import TotalAssetsContainer from "./TotalAssets/TotalAssetsContainer";
import Transactions from "./Transactions/Transactions";

const RightPanel = (props) => {
    const currView = useSelector((state) => state.view);
    return <div className="right-panel">
            <TobBar currView={currView.selectedView} />
            {currView.selectedView === 'Dashboard' && <Dashboard />}
            {currView.selectedView === 'Planned Transactions' && <PlannedTransactionsContainer />}
            {currView.selectedView === 'Total Assets' && <TotalAssetsContainer />}
            {currView.selectedView === 'Transactions' && <Transactions/>}
    </div>
}
export default RightPanel;