import React from "react";
import Grid from "../components/Grid/Aggrid";
import Monitors from "../components/Monitors";
import Menu from "../components/Menu/Menu.component"
import "./MonitorsPage.scss"
import StaticMenu from "../components/Menu/StaticMenu"

const MonitorsPage = () => {
  return (
<div className="parent-div">

    <div className="hamburger-menu"> 
    <StaticMenu/>
    </div>
    <div className="monitorspage">
    <Monitors/>
     <Grid/>
    </div> 
    </div>
  );
}; 

export default MonitorsPage;
