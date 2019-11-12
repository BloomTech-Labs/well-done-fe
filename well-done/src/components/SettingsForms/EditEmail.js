import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../../pages/Settings/Settings.scss";

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
      // .put(`https://welldone-db.herokuapp/api/accounts/${email.id}
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
        <h1 className="update-header"> Change Email</h1>
      </div>
      <div>
        <div className="edit-form">
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
                  value={email.email}
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
                  value={email.password}
                />
              </Form.Group>
            </Form.Group>

            {/* New email input  */}
            <Form.Group className="row-2">
              <Form.Group className="form-group">
                <Form.Label>New Email</Form.Label>
                <Form.Control
                  type="email"
                  name="newEmail"
                  className="input"
                  onChange={changeHandler}
                  value={email.newEmail}
                />
              </Form.Group>
              {/* Confirm new email input  */}
              <Form.Group className="form-group">
                <Form.Label>Confirm New Email</Form.Label>
                <Form.Control
                  type="email"
                  name="confirmNewEmail"
                  className="input"
                  onChange={changeHandler}
                  value={email.confirmNewEmail}
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="update-btn">
              <div className="btn-text">Change Email</div>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditEmail;
