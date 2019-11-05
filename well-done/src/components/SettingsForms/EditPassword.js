import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const EditPassword = props => {
  console.log(props);
  const [password, setPassword] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const changeHandler = ev => {
    ev.persist();

    let value = ev.target.value;

    setPassword({
      ...password,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("password inside handlesubmit", password);
    const id = props.match.params.id;
    // axiosWithAuth()
    axios
      .put(`https://welldone-db.herokuapp/api/accounts/${id}`, password)
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        props.updatePassword(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <h1> Change Password</h1>
      </div>
      <div>
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            {/* Email input  */}
            <h2>Email</h2>
            <input
              type="text"
              name="email"
              className="input"
              // placeholder="email"
              onChange={changeHandler}
              value={password.email}
            />
            {/* Password input  */}
            <h2>Password</h2>
            <input
              type="password"
              name="password"
              className="input"
              // placeholder="password"
              onChange={changeHandler}
              value={password.password}
            />
            {/* New Password input  */}
            <h2>New Password</h2>
            <input
              type="text"
              name="newPassword"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={password.newPassword}
            />
            {/* Confirm New Email input  */}
            <h2>Confirm New Password</h2>
            <input
              type="text"
              name="confirmNewPassword"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={password.confirmNewPassword}
            />

            <button type="submit" className="btnEdit">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
