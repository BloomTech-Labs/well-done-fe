import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

import {
  Button,
  Form,
  FormGroup
} from "react-bootstrap";
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
        <h1 className="update-header"> Change Name </h1>
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
                value={name.email}
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
                value={name.password}
              />
            </FormGroup>
            {/* New Name input  */}
            <FormGroup>
              <Form.Label for="newName">New Name</Form.Label>
              <Form.Input
                type="textarea"
                name="newName"
                className="input"
                onChange={changeHandler}
                value={name.newName}
              />
            </FormGroup>
            {/* Confirm New Name input  */}
            <FormGroup>
              <Form.Label for="confirmNewName">Confirm New Name</Form.Label>
              <Form.Input
                type="textarea"
                name="confirmNewName"
                className="input"
                onChange={changeHandler}
                value={name.confirmNewName}
              />
            </FormGroup>
            <Button color="primary" type="submit" className="btnEdit">
              Change Name
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
