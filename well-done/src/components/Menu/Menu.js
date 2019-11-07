import React from "react";
import "./Menu.scss";
import {
  IoIosHome,
  // IoIosCreate
  IoMdGrid,
  // IoIosKey,
  IoMdKey,
  IoIosSettings
} from "react-icons/io";
import { Route, Link } from "react-router-dom";

const Menu = props => {
  console.log("props in menu", props);
  return (
    <div>
      <p className="well-done">WellDone</p>
      <p className="email-address">WellDone@WellDone.org</p>
      <div className="overlay-content">
        <div className="each-nav">
          <IoIosHome size={25} />
          <Link exact to="/dashboard" activeClassName="activeNavButton">
            Home
          </Link>
        </div>
        <div className="each-nav">
          {/* <IoIosCreate size={25} /> */}
          <IoMdGrid size={25} />
          <Link to="/monitors" activeClassName="activeNavButton">
            Monitors
          </Link>
        </div>
        <div className="each-nav">
          {/* <IoIosKey size={25} /> */}
          <IoMdKey size={25} />
          <Link to="/admin" activeClassName="activeNavButton">
            Admin
          </Link>
        </div>
        <div className="each-nav">
          <IoIosSettings size={25} />
          <Link to="/settings" activeClassName="activeNavButton">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
