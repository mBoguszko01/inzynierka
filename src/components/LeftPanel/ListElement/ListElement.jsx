import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../store/view";
import "./ListElement.css";
import Icon from "@mdi/react";
import {
  mdiViewDashboardOutline,
  mdiCashSync,
  mdiWalletOutline,
  mdiSwapHorizontal,
  mdiReceiptTextOutline,
  mdiFinance,
  mdiCog,
} from "@mdi/js";
//https://pictogrammers.com/library/mdi/

const ListElement = (props) => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = (viewName) => {
    dispatch(viewActions.changeView(viewName));
  };
  const { name } = props;
  const iconName = (name) => {
    const iconMap = {
      "dashboard": mdiViewDashboardOutline,
      "planned transactions": mdiCashSync,
      "total assets": mdiWalletOutline,
      "transactions": mdiSwapHorizontal,
      "split bill": mdiReceiptTextOutline,
      "savings planner": mdiFinance,
      "settings": mdiCog,
    };
    return iconMap[name.toLowerCase()];
  };
  const isCurrView = currView.selectedView === name.toLowerCase();
  let classes = "list-element-container";
  if (isCurrView){
    classes += " list-element-container-selected";
  }
  return (
    <div className={classes} onClick={()=>changeViewHandler(name.toLowerCase())}>
      <Icon path={iconName(name)} size={1} />
      <span>{name}</span>
    </div>
  );
};

export default ListElement;
