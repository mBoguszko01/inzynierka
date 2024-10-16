import { useSelector } from "react-redux";

const RightPanel = (props) => {
    const currView = useSelector((state) => state.view);

    return <div className="right-panel">
            {currView.selectedView}
    </div>
}
export default RightPanel;