import React from "react";
import "./StaticMenu.scss";
import {
  IoIosHome,
  // IoIosCreate
  IoMdGrid,
  // IoIosKey,
  IoMdKey,
  IoIosSettings
} from "react-icons/io";
import { Route, Link } from "react-router-dom";
// import { WellDoneLogo } from "../../Images/WellDoneLogo.png";

const StaticMenu = props => {
  console.log("props in menu", props);
  return (
    <div className="entire-menu">
      <img
        className="logo"
        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png"
        alt="Well Done logo"
      />
      <p className="name">WellDone</p>
      <p className="email-address">WellDone@WellDone.org</p>
      <span></span>
      <div className="overlay-content">
        <div className="each-nav">
          <IoIosHome size={25} />
          <Link
            exact
            to="/dashboard"
            activeClassName="activeNavButton"
            className="link"
          >
            Home
          </Link>
        </div>
        <div className="each-nav">
          {/* <IoIosCreate size={25} /> */}
          <IoMdGrid size={25} />
          <Link
            to="/monitors"
            activeClassName="activeNavButton"
            className="link"
          >
            Monitors
          </Link>
        </div>
        <div className="each-nav">
          {/* <IoIosKey size={25} /> */}
          <IoMdKey size={25} />
          <Link to="/admin" activeClassName="activeNavButton" className="link">
            Admin
          </Link>
        </div>
        <div className="each-nav">
          <IoIosSettings size={25} />
          <Link
            to="/settings"
            activeClassName="activeNavButton"
            className="link"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaticMenu;
