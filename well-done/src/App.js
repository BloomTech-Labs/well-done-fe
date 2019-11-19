import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AxiosWithAuth from "./components/AxiosWithAuth/axiosWithAuth";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";
import MonitorDetails from "./pages/MonitorDetail";
import Grid from "./components/Grid/Aggrid";
import Monitors from "./pages/MonitorsPage";
import MetaTags from "react-meta-tags";


function App() {
  const [searchFiltered, setSearchFiltered] = useState([])
  const [sensors, setSensors] = useState([])
  const [selectedPump, setSelectedPump] = useState(null)
  

  useEffect(() => {
    AxiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/sensors/recent")
      .then(res => {
        console.log("get all sensors", res.data);
        setSensors(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <MetaTags>
            <title>Well-Done dashboard</title>
            <meta name="description" content="WellDone with its mission to consistently deliver clean, safe water to communities in need as well as provide long term accountability for infrastructure projects, provide water not just a well, they want to improve a dashboard by having our Lambda Labs team to build BackEnd from scratch and iterate FrontEnd features." />
            <meta property="og:title" content="Well-Done" />
            <meta property="og:image" content="https://res.cloudinary.com/dfulxq7so/image/upload/v1573914589/Screen_Shot_2019-11-16_at_6.29.30_AM_oq7itf.png" />
      </MetaTags>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/dashboard"
          render={props => {
            return <Dashboard {...props} 
                        searchFiltered={searchFiltered} 
                        setSearchFiltered={setSearchFiltered}
                        sensors={sensors}
                        selectedPump={selectedPump}
                        setSelectedPump={setSelectedPump}
                    />
                    
          }} 
        />
        <Route
          path="/monitorDetails"
          render={props => {
            return <MonitorDetails {...props} 
                        sensors={sensors}
                        selectedPump={selectedPump}
                    />
          }} 
        />
        <Route path="/grid" component={Grid}/>
        <Route path="/hello" component={Monitors}/>
        {/* <Route path="/settings" component={Settings} /> */}
      </Switch>
    </div>
  );
}

export default App;
