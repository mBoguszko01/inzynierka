import "./ListElement.css";
import Icon from '@mdi/react';
import { mdiViewDashboardOutline, mdiCashSync, mdiWalletOutline, mdiSwapHorizontal, mdiReceiptTextOutline, mdiFinance, mdiCog} from '@mdi/js';
//https://pictogrammers.com/library/mdi/

const ListElement = (props) => {
  const { name } = props;
  const iconName = (name) =>{
        const iconMap = {
            'dashboard': mdiViewDashboardOutline,
            'planned transactions': mdiCashSync,
            'total assets': mdiWalletOutline,
            'transactions': mdiSwapHorizontal,
            'split bill': mdiReceiptTextOutline,
            'savings planner': mdiFinance,
            'settings': mdiCog
        }
        return iconMap[name.toLowerCase()];
  }

  return (
    <div className="list-element-container">
      <Icon path={iconName(name)} size={1} />
      <span>{name}</span>
    </div>
  );
};

export default ListElement;
