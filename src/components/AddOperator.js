import React, { useState, useEffect } from "react";

import "./addOrg.scss"

import { useDispatch } from "react-redux";

import {addOp} from '../actions/addOrg-action'





const AddOperator = props => {
  const [operator, setOperator] = useState([]);

  const handleChange = event => {
    setOrg({ ...operator, [event.target.name]: event.target.value });
  };

 

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addOp(operator));
  };


  const openForm = () => {
    document.getElementById("popDiv").style.display = "block";
  }

  const closeForm = () => {
    document.getElementById("popDiv").style.display = "none";
  }


  return (
    <>
    <div>
    <button class="close-button" onClick={closeForm}>Create</button>
    <button class="open-button" onClick={openForm}>Create Account</button>
      <div id="popDiv" className="popBox-container">
        <div className="topCreate">
          <h1>Create Operator</h1>
          <div className="closeButton">
            <button onClick={closeForm}>x</button>
          </div>
        </div>
        <div className="popBox">
          <div className="type">
            <div className="title">
              <label for="Name">Operator Name</label>
            </div>
            <div className="box">
              <input
                type="text"
                id="Name"
                placeholder="name"
                name="name"
                value={operator.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Email">Email</label>{" "}
            </div>
            <div className="box">
              {" "}
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="email"
                value={operator.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Password">Password</label>
            </div>
            <div className="box">
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                value={operator.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Password">Confirm Password</label>
            </div>
            <div className="box">
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                value={operator.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="CreateAccount">
          <button type="Submit" onClick={handleSubmit}>
            Create Account
          </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default AddOrg;