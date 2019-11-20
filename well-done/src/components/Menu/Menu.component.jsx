import React, { useState } from "react";
import "./Menu.styles.scss";
import { IoIosHome, IoIosKey, IoIosSettings, IoMdCreate } from "react-icons/io";
// import { IoIosKey } from "react-icons/io";
// import { IoIosSettings } from "react-icons/io";
// import { IoMdCreate } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";

const Menu = props => {
  // console.log('props in Menu', props)

  const openNav = () => {
    document.getElementById("myNav").style.width = "18%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  return (
    <div>
      {/* <h1>Hello, please show something</h1> */}
      <div className="hamburger-menu" onClick={openNav}>
        <span style={{ backgroundColor: "#082B84" }}></span>
        <span style={{ backgroundColor: "#082B84" }}></span>
        <span style={{ backgroundColor: "#082B84" }}></span>
      </div>
      <div id="myNav" className="overlay" onClick={closeNav}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={closeNav}
        ></a>
        <div className="intro">
          <img
            className="logo"
            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png"
            alt="logo"
          />
          <p className="name">Smarter Villages</p>
          <p className="email-address">WellDone@WellDone.org</p>
        </div>
        <div className="overlay-content-map">
          <div class="eachNav">
            <IoIosHome size={25} />
            <Link to="/dashboard">Home</Link>
          </div>
          <div className="eachNav">
            <IoMdCreate size={25} />
            <a href="/overview">Overview</a>
          </div>
          {/* <div className="eachNav">
            <IoIosKey size={25} />
            <a href="/admin">Admin</a>
          </div> */}
          <div className="eachNav">
            <IoIosSettings size={25} />
            <a href="/settings">Settings</a>
          </div>
          <div className="eachNav" onClick={logout}>
            <FiLogOut size={25} />
            <a>Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
