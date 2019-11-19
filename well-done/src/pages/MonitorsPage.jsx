import React from "react";
import Grid from "../components/Grid/Aggrid";
import Monitors from "../components/Monitors";
import Menu from "../components/Menu/Menu.component"
import "./MonitorsPage.scss"

const MonitorsPage = () => {
  return (
<div className="parent-div">

    <div className="hamburger-menu"> 
    <Menu/>
    </div>
    <div className="monitorspage">
    <Monitors/>
     <Grid/>
    </div> 
    </div>
  );
}; 

export default MonitorsPage;
