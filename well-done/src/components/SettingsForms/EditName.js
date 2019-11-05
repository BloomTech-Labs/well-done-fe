import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const EditName = props => {
  console.log(props);
  const [name, setName] = useState({
    email: "",
    password: "",
    newName: "",
    confirmNewName: ""
  });

  const changeHandler = ev => {
    ev.persist();

    let value = ev.target.value;

    setName({
      ...name,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("name inside handlesubmit", name);
    const id = props.match.params.id;
    // axiosWithAuth()
    axios
      .put(`https://welldone-db.herokuapp/api/accounts/${id}`, name)
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        props.updateName(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <h1> Change Name </h1>
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
              value={name.email}
            />
            {/* Password input  */}
            <h2>Password</h2>
            <input
              type="password"
              name="password"
              className="input"
              // placeholder="password"
              onChange={changeHandler}
              value={name.password}
            />
            {/* New Name input  */}
            <h2>New Name</h2>
            <input
              type="text"
              name="newName"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={name.newName}
            />
            {/* Confirm New Name input  */}
            <h2>Confirm New Name</h2>
            <input
              type="text"
              name="confirmNewName"
              className="input"
              // placeholder="new name"
              onChange={changeHandler}
              value={name.confirmNewName}
            />

            <button type="submit" className="btnEdit">
              Change Name
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
