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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                className="input"
                onChange={changeHandler}
                value={password.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
