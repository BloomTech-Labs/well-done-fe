import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "../../pages/Settings/Settings.scss";

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
    // const id = props.match.params.id;
    // axiosWithAuth()
    axios
      .put(
        `https://welldone-db.herokuapp/api/accounts/${password.id}`,
        password
      )
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        props.updatePassword(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="form-container-password">
      <div className="form-wrap-password">
        <h1 className="update-header"> Change Password</h1>
      </div>
      <div>
        <div className="edit-form">
          <div className="mobile-header">Change Password </div>
          <Form onSubmit={handleSubmit}>
            {/* Email input  */}
            <Form.Group className="email-row">
              <Form.Group className="form-group">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className="input"
                  onChange={changeHandler}
                  value={password.email}
                />
              </Form.Group>
              {/* Password input  */}
              <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  className="input"
                  onChange={changeHandler}
                  value={password.password}
                />
              </Form.Group>
            </Form.Group>

            {/* New password input  */}
            <Form.Group className="row-2">
              <Form.Group className="form-group">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  className="input"
                  onChange={changeHandler}
                  value={password.newPassword}
                />
              </Form.Group>
              {/* Confirm new password input  */}
              <Form.Group className="form-group">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmNewPassword"
                  className="input"
                  onChange={changeHandler}
                  value={password.confirmNewPassword}
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="update-btn">
              <div className="btn-text-password">Change Password</div>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
