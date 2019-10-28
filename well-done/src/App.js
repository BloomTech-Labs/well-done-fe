import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.component";
import SignIn from "./components/SignIn/SignIn.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SignIn />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
