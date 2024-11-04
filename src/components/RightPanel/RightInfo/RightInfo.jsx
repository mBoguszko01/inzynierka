import './RightInfo.css'
import DashboardPlannedTransactions from "./DashboardPlannedTransactions/DashboardPlannedTransactions";
import DashboardTotalAssets from "./DashboardTotalAssets/DashboardTotalAssets";
const RightInfo = () => {
    return <>
        <DashboardPlannedTransactions />
        <DashboardTotalAssets />
    </>
} // zamienić kolejnością i zebrać feedback
export default RightInfo;