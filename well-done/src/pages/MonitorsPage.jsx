import React from "react";
import Grid from "../components/Grid/Aggrid";
import Monitors from "../components/Monitors";
import Menu from "../components/Menu/Menu.component"
import "./MonitorsPage.scss"
import StaticMenu from "../components/Menu/StaticMenu"

const MonitorsPage = ({ history }) => {
  return (
<div className="parent-div">

    <div className="monitormenu"> 
    <StaticMenu history={history} />
    </div>
    <div className="monitorspage">
    <Monitors/>
     <Grid/>
    </div> 
    </div>
  );
}; 

export default MonitorsPage;
