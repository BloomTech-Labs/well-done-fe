import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
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
        <h1 className="update-header"> Change Password</h1>
      </div>
      <div>
        <div className="edit-form">
          <Form onSubmit={handleSubmit}>
            {/* Email input  */}
            <FormGroup>
              <Form.Label for="email">Email</Form.Label>
              <Form.Input
                type="email"
                name="email"
                className="input"
                onChange={changeHandler}
                value={password.email}
              />
            </FormGroup>
            {/* Password input  */}
            <FormGroup>
              <Form.Label for="password">Password</Form.Label>
              <Form.Input
                type="password"
                name="password"
                className="input"
                onChange={changeHandler}
                value={password.password}
              />
            </FormGroup>
            {/* New Password input  */}
            <FormGroup>
              <Form.Label for="newPassword">New Password</Form.Label>
              <Form.Input
                type="email"
                name="newPassword"
                className="input"
                onChange={changeHandler}
                value={password.newPassword}
              />
            </FormGroup>
            {/* Confirm New Email input  */}
            <FormGroup>
              <Form.Label for="confirmNewPassword">
                Confirm New Password
              </Form.Label>
              <Form.Input
                type="email"
                name="confirmNewPassword"
                className="input"
                onChange={changeHandler}
                value={password.confirmNewPassword}
              />
            </FormGroup>
            <Button color="primary" type="submit" className="btnEdit">
              Change Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
