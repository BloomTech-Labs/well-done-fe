import React from "react";
import "./Settings.scss";
import StaticMenu from "../../components/Menu/StaticMenu";
import EditNameForm from "../../components/SettingsForms/EditNameForm";
import EditPasswordForm from "../../components/SettingsForms/EditPasswordForm";
import EditEmailForm from "../../components/SettingsForms/EditEmailForm";

const Settings = ({ history }) => {
  return (
    <div className="settings">
       <div className="static-menu">
        <StaticMenu history={history} />
      </div>
        <div className="forms">
          <EditNameForm />
          <EditEmailForm />
          <EditPasswordForm />
        </div>
    </div>
  );
};

export default Settings;
