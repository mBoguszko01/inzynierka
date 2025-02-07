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
  const { name, isSidebarOpen } = props;
  const iconName = (name) => {
    const iconMap = {
      "dashboard": mdiViewDashboardOutline,
      "planned transactions": mdiCashSync,
      "total assets": mdiWalletOutline,
      "transactions": mdiSwapHorizontal,
      "split bill": mdiReceiptTextOutline,
      "shopping list": mdiReceiptTextOutline,
      "savings planner": mdiFinance,
      "settings": mdiCog,
    };
    return iconMap[name.toLowerCase()];
  };
  const isCurrView = currView.selectedView === name;
  let classes = "list-element-container";
  if (isCurrView){
    classes += " list-element-container-selected";
  }
  if (!isSidebarOpen){
    classes += " list-element-container-closed"
  }

  return (
    <div className={classes} onClick={()=>changeViewHandler(name)}>
      <Icon path={iconName(name)} size={1} />
      {isSidebarOpen && <span>{name}</span>}
    </div>
  );
};

export default ListElement;
