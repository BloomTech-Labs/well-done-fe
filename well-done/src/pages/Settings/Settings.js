import React from "react";
// import Menu from "../../components/Menu/Menu.component";
import StaticMenu from "../../components/Menu/StaticMenu";
import MobileNavBar from "../../components/Menu/MobileNavBar";
import "./Settings.scss";

import EditNameForm from "../../components/SettingsForms/EditNameForm";
import EditPasswordForm from "../../components/SettingsForms/EditPasswordForm";
import EditEmailForm from "../../components/SettingsForms/EditEmailForm";

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
          <EditEmailForm />
          <EditPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default Settings;
