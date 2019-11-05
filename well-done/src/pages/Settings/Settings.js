import React from "react";
import EditNameForm from "../../components/SettingsForms/EditName";
import EditEmail from "../../components/SettingsForms/EditEmail";
import EditPassword from "../../components/SettingsForms/EditPassword";
import Menu from "../../components/Menu/Menu.component";

const Settings = () => {
  return (
    <div className="settings">
      <Menu />
      <EditNameForm />
      <EditEmail />
      <EditPassword />
    </div>
  );
};

export default Settings;
