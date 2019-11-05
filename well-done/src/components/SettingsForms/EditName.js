import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                className="input"
                onChange={changeHandler}
                value={name.email}
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
                value={name.password}
              />
            </FormGroup>
            {/* New Name input  */}
            <FormGroup>
              <Label for="newName">New Name</Label>
              <Input
                type="textarea"
                name="newName"
                className="input"
                onChange={changeHandler}
                value={name.newName}
              />
            </FormGroup>
            {/* Confirm New Name input  */}
            <FormGroup>
              <Label for="confirmNewName">Confirm New Name</Label>
              <Input
                type="textarea"
                name="confirmNewName"
                className="input"
                onChange={changeHandler}
                value={name.confirmNewName}
              />
            </FormGroup>
            <Button type="submit" className="btnEdit">
              Change Name
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
