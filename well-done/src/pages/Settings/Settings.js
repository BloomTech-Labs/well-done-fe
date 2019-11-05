import React from "react";
import EditNameForm from "../../components/SettingsForms/EditName";
import EditEmail from "../../components/SettingsForms/EditEmail";
import EditPassword from "../../components/SettingsForms/EditPassword";

const Settings = () => {
  return (
    <div className="settings">
      <EditNameForm />
      <EditEmail />
      <EditPassword />
    </div>
  );
};

export default Settings;
