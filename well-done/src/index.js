import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import {fetchReducer} from './reducers/fetchReducer'
import thunk from 'redux-thunk'

// export const store = createStore(fetchReducer, applyMiddleware(thunk))

// store.subscribe(() =>
//   {localStorage.setItem('TOKEN', store.getState().token)
// });

// console.log('store', store)

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <App />
    </Router>
  // </Provider>
  ,
  document.getElementById("root")
);
