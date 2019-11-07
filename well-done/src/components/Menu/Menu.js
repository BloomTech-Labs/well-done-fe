import React from "react";
import "./Menu.scss";
import { IoIosHome } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";

const Menu = props => {
  console.log("props in menu", props);
  return (
    <div>
      <p className="well-done">WellDone</p>
      <p className="email-address">WellDone@WellDone.org</p>
      <div className="overlay-content">
        <div className="each-nav">
          <IoIosHome size={25} />
          <a href="#">Home</a>
        </div>
        <div className="each-nav">
          <IoMdCreate size={25} />
          <a href="#">Monitor</a>
        </div>
        <div className="each-nav">
          <IoIosKey size={25} />
          <a href="#">Admin</a>
        </div>
        <div className="each-nav">
          <IoIosSettings size={25} />
          <a href="#">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
