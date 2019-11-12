import React from "react";
import EditNameForm from "../../components/SettingsForms/EditName";
import EditEmail from "../../components/SettingsForms/EditEmail";
import EditPassword from "../../components/SettingsForms/EditPassword";
// import Menu from "../../components/Menu/Menu.component";
import StaticMenu from "../../components/Menu/StaticMenu";
import "./Settings.scss";
const Settings = () => {
  return (
    <div className="settings">
      <StaticMenu />
      <div className="forms">
        <EditNameForm />
        <EditEmail />
        <EditPassword />
      </div>
    </div>
  );
};

export default Settings;
