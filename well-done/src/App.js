import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test"

const PumpData = [
  {
      id: 1,
      country_name: 'Vietnam',
      province_name: 'Daklak'
  },
  {
      id: 2,
      country_name: 'U.S',
      province_name: 'CA'
  },
  {
      id: 3,
      country_name: 'Cambodia',
      province_name: 'Pnompenh'
  },
]

function App() {
  const [searchFiltered, setSearchFiltered] = useState([])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route 
        path="/test" 
        render={props => {
        return <Test {...props} 
                      PumpData = {PumpData} 
                      searchFiltered={searchFiltered} 
                      setSearchFiltered={setSearchFiltered}
                      
                      />}} 
        />
      </Switch>
    </div>
  );
}

export default App;
