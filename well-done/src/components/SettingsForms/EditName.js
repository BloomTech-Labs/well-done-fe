import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import "../../pages/Settings/Settings.scss";
const EditName = props => {
  // console.log(props);
  const [name, setName] = useState({
    email: "",
    password: "",
    newName: "",
    confirmNewName: ""
  });

  // const changeHandler = ev => {
  //   ev.persist();

  //   let value = ev.target.value;

  //   setName({
  //     ...name,
  //     [ev.target.name]: value
  //   });
  // };

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
    // const id = props.match.params.id;
    // axiosWithAuth()

    // check if valid login ()
    // if yes, response should contain ID
    // we'll pass that id
    axios
      .put(`https://welldone-db.herokuapp/api/accounts/${name.id}`, name)
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        // props.updateName(res.data);
        setName(res.data);
      })
      .catch(err => console.log(err.res));
  };

  return (
    <div className="form-container-name">
      <div className="form-wrap">
        <h1 className="update-header-name"> Change Name </h1>
      </div>
      <div>
        <div className="edit-form">
          <Form onSubmit={handleSubmit}>
            {/* Email input  */}
            <Form.Group className="email-row">
              <Form.Group className="form-group">
                <Form.Label className="form-label">Email </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className="input"
                  onChange={changeHandler}
                  value={name.email}
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
                  value={name.password}
                />
              </Form.Group>
            </Form.Group>

            {/* New name input  */}
            <Form.Group className="row-2">
              <Form.Group className="form-group">
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  type="text"
                  name="newName"
                  className="input"
                  onChange={changeHandler}
                  value={name.newName}
                />
              </Form.Group>
              {/* Confirm new name input  */}
              <Form.Group className="form-group">
                <Form.Label>Confirm New Name</Form.Label>
                <Form.Control
                  type="text"
                  name="confirmNewName"
                  className="input"
                  onChange={changeHandler}
                  value={name.confirmNewName}
                />
              </Form.Group>
            </Form.Group>

            <Button
              id="name"
              variant="primary"
              type="submit"
              className="update-btn"
            >
              <div className="btn-text">Change Name</div>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditName;
