import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const EditEmail = props => {
  console.log(props);
  const [email, setEmail] = useState({
    email: "",
    password: "",
    newEmail: "",
    confirmNewEmail: ""
  });

  const changeHandler = ev => {
    ev.persist();

    let value = ev.target.value;

    setEmail({
      ...email,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email inside handlesubmit", email);
    const id = props.match.params.id;
    // axiosWithAuth()
    axios
      .put(`https://welldone-db.herokuapp/api/accounts/${id}`, email)
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        props.updateEmail(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <h1> Change Email</h1>
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
              value={email.email}
            />
            {/* Password input  */}
            <h2>Password</h2>
            <input
              type="password"
              name="password"
              className="input"
              // placeholder="password"
              onChange={changeHandler}
              value={email.password}
            />
            {/* New Email input  */}
            <h2>New Email</h2>
            <input
              type="text"
              name="newEmail"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={email.newEmail}
            />
            {/* Confirm New Email input  */}
            <h2>Confirm New Email</h2>
            <input
              type="text"
              name="confirmNewEmail"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={email.confirmNewEmail}
            />

            <button type="submit" className="btnEdit">
              Change Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmail;
