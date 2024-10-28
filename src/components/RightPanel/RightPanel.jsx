import { useSelector } from "react-redux";
import TobBar from "./TopBar/TopBar";
import './RightPanel.css';
import Dashboard from "./Dashboard/Dashboard";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import Transactions from "./Transactions/Transactions";

const RightPanel = (props) => {
    const currView = useSelector((state) => state.view);
    return <div className="right-panel">
            <TobBar currView={currView.selectedView} />
            {currView.selectedView === 'Dashboard' && <Dashboard />}
            {currView.selectedView === 'Transactions' && <Transactions/>}
    </div>
}
export default RightPanel;