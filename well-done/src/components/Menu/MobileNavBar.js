import React from "react";

import MobileViewMenu from "../Menu/MobileViewMenu.jsx";

const MobileNavBar = () => {
  return (
    <div className="mobile-nav-container">
      <MobileViewMenu />
      <div className="mobile-nav-bar">This is the mobile nav bar</div>
    </div>
  );
};

export default MobileNavBar;
