import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
