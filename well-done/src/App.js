import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
