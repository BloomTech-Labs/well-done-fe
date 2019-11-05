import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                className="input"
                onChange={changeHandler}
                value={password.email}
              />
            </FormGroup>
            {/* Password input  */}
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                className="input"
                onChange={changeHandler}
                value={password.password}
              />
            </FormGroup>
            {/* New Password input  */}
            <FormGroup>
              <Label for="newPassword">New Password</Label>
              <Input
                type="email"
                name="newPassword"
                className="input"
                onChange={changeHandler}
                value={password.newPassword}
              />
            </FormGroup>
            {/* Confirm New Email input  */}
            <FormGroup>
              <Label for="confirmNewPassword">Confirm New Password</Label>
              <Input
                type="email"
                name="confirmNewPassword"
                className="input"
                onChange={changeHandler}
                value={password.confirmNewPassword}
              />
            </FormGroup>
            <Button type="submit" className="btnEdit">
              Change Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
