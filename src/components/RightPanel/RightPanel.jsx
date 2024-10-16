import { useSelector } from "react-redux";
import TobBar from "./TopBar/TopBar";
import './RightPanel.css';
import Dashboard from "./Dashboard/Dashboard";

const RightPanel = (props) => {
    const currView = useSelector((state) => state.view);
    console.log(currView.selectedView === 'Dashboard');
    return <div className="right-panel">
            <TobBar currView={currView.selectedView} />
            {currView.selectedView === 'Dashboard' && <Dashboard />}
            
    </div>
}
export default RightPanel;