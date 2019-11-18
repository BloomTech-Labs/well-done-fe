import React, { useState } from "react";
import "./MobileViewMenu.styles.scss";
// import "./Menu.styles.scss";
import { IoIosHome } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";

const MobileViewMenu = props => {
  console.log("props in Menu", props);

  const openNav = () => {
    document.getElementById("myNav").style.width = "75%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div>
      {/* <h1>Hello, please show something</h1> */}
      <div class="hamburger-menu" onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="myNav" class="overlay" onClick={closeNav}>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div class="intro">
          <img
            class="logo"
            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png"
            alt="logo"
          />
          <p class="name">WellDone</p>
          <p class="email-address">WellDone@WellDone.org</p>
          <span></span>
        </div>
        <div class="overlay-content">
          <div class="eachNav">
            <IoIosHome size={25} />
            <a href="#">Home</a>
          </div>
          <div class="eachNav">
            <IoMdCreate size={25} />
            <a href="#">Monitors</a>
          </div>
          <div class="eachNav">
            <IoIosKey size={25} />
            <a href="#">Admin</a>
          </div>
          <div class="eachNav">
            <IoIosSettings size={25} />
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileViewMenu;
