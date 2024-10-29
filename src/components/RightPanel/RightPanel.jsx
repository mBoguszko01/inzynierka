import { useSelector } from "react-redux";
import TobBar from "./TopBar/TopBar";
import './RightPanel.css';
import Dashboard from "./Dashboard/Dashboard";
import PlannedTransactionsContainer from "./PlannedTransactions/PlannedTransactionsContainer";
import Transactions from "./Transactions/Transactions";

const RightPanel = (props) => {
    const currView = useSelector((state) => state.view);
    return <div className="right-panel">
            <TobBar currView={currView.selectedView} />
            {currView.selectedView === 'Dashboard' && <Dashboard />}
            {currView.selectedView === 'Planned Transactions' && <PlannedTransactionsContainer />}
            {currView.selectedView === 'Transactions' && <Transactions/>}
    </div>
}
export default RightPanel;