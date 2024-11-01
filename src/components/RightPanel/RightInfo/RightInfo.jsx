import './RightInfo.css'
import DashboardPlannedTransactions from "./DashboardPlannedTransactions/DashboardPlannedTransactions";
import TotalAssets from "./TotalAssets/TotalAssets";
const RightInfo = () => {
    return <>
        <DashboardPlannedTransactions />
        <TotalAssets />
    </>
} // zamienić kolejnością i zebrać feedback
export default RightInfo;