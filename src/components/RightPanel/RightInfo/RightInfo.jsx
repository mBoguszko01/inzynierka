import './RightInfo.css'
import PlannedTransactions from "./PlannedTransactions/PlannedTransactions";
import TotalAssets from "./TotalAssets/TotalAssets";
const RightInfo = () => {
    return <>
        <PlannedTransactions />
        <TotalAssets />
    </>
} // zamienić kolejnością i zebrać feedback
export default RightInfo;