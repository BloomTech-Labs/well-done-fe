import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../AxiosWithAuth/axiosWithAuth.jsx";
import "../../pages/Settings/Settings.scss";
import { Button, Form } from "react-bootstrap";

const EditPasswordForm = props => {
  // console.log('props in SignIn', props)
  const [account, setAccount] = useState({
    email_address: "",
    password: "",
    new_password: "",
    new_password_conf: ""
  });

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(account.new_email);
    if (account.new_email != account.new_email_conf) {
      //display mismatching error message
      //get html ref or id and update its txt to alert user?
      axiosWithAuth()
        .get("https://welldone-db.herokuapp.com/api/accounts/")
        .then(res => {
          console.log("res", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("submit", account);

      // make sure correct username + password is input
      isValidUserCredential(account).then(res => {
        console.log("response line", res);
      });
    }
  };

  async function isValidUserCredential(account) {
    axiosWithAuth()
      .post("https://welldone-db.herokuapp.com/api/auth/login", account)
      .then(res => {
        console.log("res", res.data);
        getUserData(res.data.id);
        // localStorage.setItem("userId", res.data.id); // may not wanna save
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

  const getUserData = accountID => {
    axiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/accounts/" + accountID)
      .then(res => {
        console.log("res", res.data);
        var temp = res.data;
        temp.email_address = account.email_address;
        temp.new_password = account.new_password_conf;
        updateUserData(temp, accountID);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateUserData = (newData, accountID) => {
    console.log(newData, accountID);
    axiosWithAuth()
      .put(
        "https://welldone-db.herokuapp.com/api/accounts/" + accountID,
        newData
      )
      .then(res => {
        console.log("res", res.data);
        // localStorage.setItem("userId", res.data.id); // may not wanna save
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
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
                  className="input"
                  type="email"
                  name="email_address"
                  value={account.email_address}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Password input  */}
              <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  name="password"
                  value={account.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>

            {/* New password input  */}
            <Form.Group className="row-2">
              <Form.Group className="form-group">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  name="new_password"
                  value={account.new_password}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Confirm new password input  */}
              <Form.Group className="form-group">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  name="new_password_conf"
                  value={account.new_password_conf}
                  onChange={handleChange}
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

export default EditPasswordForm;
