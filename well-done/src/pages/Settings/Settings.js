import React from "react";
import EditNameForm from "../../components/SettingsForms/EditName";
import EditEmail from "../../components/SettingsForms/EditEmail";
import EditPassword from "../../components/SettingsForms/EditPassword";
// import Menu from "../../components/Menu/Menu.component";
import StaticMenu from "../../components/Menu/StaticMenu";
import MobileNavBar from "../../components/Menu/MobileNavBar";
import "./Settings.scss";

import FormikEditNameForm from "../../components/SettingsForms/EditNameForm";
import FormikEditPasswordForm from "../../components/SettingsForms/EditPasswordForm";
import FormikEditEmailForm from "../../components/SettingsForms/EditEmailForm";

const Settings = () => {
  return (
    <div className="settings">
      <div className="static-menu">
        <StaticMenu />
      </div>
      <div className="mobile-view">
        <div className="hamburga-menu">
          <MobileNavBar />
        </div>
        <div className="forms">
          <FormikEditNameForm />
          {/* <EditNameForm /> */}
          <FormikEditEmailForm />
          {/* <EditEmail /> */}
          <FormikEditPasswordForm />
          {/* <EditPassword /> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
