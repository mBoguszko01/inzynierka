import Logo from "./Logo/Logo";
import "./LeftPanel.css";
import ListElement from "./ListElement/ListElement";
const LeftPanel = (props) => {
  return (
    <div className="left-panel">
      <Logo />
      <ul className="options-list">
        <div className="options-section">
          <span className="list-section-heading">Main</span>
          <li>
            <ListElement name="Dashboard" />
          </li>
          <li>
            <ListElement name="Planned Transactions" />
          </li>
          <li>
            <ListElement name="Total Assets" />
          </li>
          <li className="options-list-last-element">
            <ListElement name="Transactions" />
          </li>
        </div>
        <div className="options-section">
          <span className="list-section-heading">Tools</span>
          <li>
            <ListElement name="Split Bill" />
          </li>
          <li>
            <ListElement name="Savings Planner" />
          </li>
        </div>
        <span className="list-section-heading">Settings</span>
        <li>
          <ListElement name="Settings" />
        </li>
      </ul>
    </div>
  );
};

export default LeftPanel;
