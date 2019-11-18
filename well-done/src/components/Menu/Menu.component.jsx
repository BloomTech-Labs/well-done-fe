import React, { useState } from "react";
import "./Menu.styles.scss";
import { IoIosHome } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";

const Menu = props => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "14%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div>
      {/* <h1>Hello, please show something</h1> */}
      <div className="hamburger-menu" onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="myNav" className="overlay" onClick={closeNav}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="intro">
          <img
            className="logo"
            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png"
            alt="logo"
          />
          <p className="name">WellDone</p>
          <p className="email-address">WellDone@WellDone.org</p>
          <span></span>
        </div>
        <div className="overlay-content">
          <div class="eachNav">
            <IoIosHome size={25} />
            <a href="/dashboard">Home</a>
          </div>
          <div className="eachNav">
            <IoMdCreate size={25} />
            <a href="/monitor">Monitor</a>
          </div>
          <div className="eachNav">
            <IoIosKey size={25} />
            <a href="/admin">Admin</a>
          </div>
          <div className="eachNav">
            <IoIosSettings size={25} />
            <a href="/setting">Setting</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
