import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import AxiosWithAuth from './components/AxiosWithAuth/axiosWithAuth'
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";
import MonitorDetails from './pages/MonitorDetail'
import Grid from "./components/Grid/Aggrid"
import Monitors from "./pages/MonitorsPage";

function App() {
  const [searchFiltered, setSearchFiltered] = useState([])
  const [sensors, setSensors] = useState([])

  useEffect(() => {
    AxiosWithAuth()
    .get("https://welldone-db.herokuapp.com/api/sensors")
    .then(res => 
        {
            console.log('get all sensors', res.data)
            setSensors(res.data)
        }
    )
  }, [sensors])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route 
          path="/dashboard" 
          render={props => {
            return <Dashboard {...props} 
                        searchFiltered={searchFiltered} 
                        setSearchFiltered={setSearchFiltered}
                        sensors={sensors}
                    />
                    
          }} 
        />
        <Route 
          path="/monitorDetails" 
          render={props => {
            return <MonitorDetails {...props} 
                        sensors={sensors}
                    />
          }} 
        />
        <Route path="/grid" component={Grid}/>
        <Route path="/hello" component={Monitors}/>
    
      </Switch>
    </div>
  );
}

export default App;
