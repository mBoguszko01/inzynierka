import { useState } from "react";

import Logo from "./Logo/Logo";
import "./LeftPanel.css";
import ListElement from "./ListElement/ListElement";

import Icon from "@mdi/react";
import {
  mdiChevronLeft
} from "@mdi/js";

const LeftPanel = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className={`left-panel ${isSidebarOpen ? '' : 'left-panel-closed'}`}>
      <div className={`left-panel-logo-container ${isSidebarOpen ? '' : 'left-panel-logo-container-closed'}`}>
        {isSidebarOpen && <Logo />}
        <Icon path={mdiChevronLeft} size={1.5} className={`${isSidebarOpen ? 'chevron-left':'chevron-right'}`} onClick={handleToggleSidebar}/>
      </div>

      <ul className="options-list">
        <div className="options-section">
          <span className="list-section-heading" style={!isSidebarOpen ? {textAlign:'center'} : {}}>Main</span>
          <li>
            <ListElement name="Dashboard" isSidebarOpen={isSidebarOpen}/>
          </li>
          <li>
            <ListElement name="Planned Transactions" isSidebarOpen={isSidebarOpen}/>
          </li>
          <li>
            <ListElement name="Total Assets" isSidebarOpen={isSidebarOpen}/>
          </li>
          <li className="options-list-last-element">
            <ListElement name="Transactions" isSidebarOpen={isSidebarOpen}/>
          </li>
        </div>
        <div className="options-section">
          <span className="list-section-heading" style={!isSidebarOpen ? {textAlign:'center'} : {}}>Tools</span>
          <li>
            <ListElement name="Split Bill" isSidebarOpen={isSidebarOpen}/>
          </li>
          <li>
            <ListElement name="Savings Planner" isSidebarOpen={isSidebarOpen}/>
          </li>
        </div>
        <span className="list-section-heading" style={!isSidebarOpen ? {textAlign:'center'} : {}}>Settings</span>
        <li>
          <ListElement name="Settings" isSidebarOpen={isSidebarOpen}/>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanel;
