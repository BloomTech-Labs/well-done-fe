import React from "react";
import EditNameForm from "../../components/SettingsForms/EditName";
import EditEmail from "../../components/SettingsForms/EditEmail";
import EditPassword from "../../components/SettingsForms/EditPassword";
// import Menu from "../../components/Menu/Menu.component";
import StaticMenu from "../../components/Menu/StaticMenu";
import MobileNavBar from "../../components/Menu/MobileNavBar";
import "./Settings.scss";
const Settings = ({ history }) => {
  return (
    <div className="settings">
      <div className="static-menu">
        <StaticMenu history={history} />
      </div>
      <div className="mobile-view">
        <div className="hamburga-menu">
          <MobileNavBar />
        </div>
        <div className="forms">
          <EditNameForm />
          <EditEmail />
          <EditPassword />
        </div>
      </div>
    </div>
  );
};

export default Settings;
