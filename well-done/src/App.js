import React from "react";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
