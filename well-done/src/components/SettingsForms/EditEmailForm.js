import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../AxiosWithAuth/axiosWithAuth.jsx";
// import "../SignIn/SignIn.styles.scss";

const EditEmailForm = props => {
  // console.log('props in SignIn', props)
  const [account, setAccount] = useState({
    email_address: "",
    password: "",
    new_email: "",
    new_email_conf: ""
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
        temp.password = account.password;
        temp.email_address = account.new_email_conf;
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
    <div className="form-container">
      <h1 className="update-header">Change Email</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email_address"
            value={account.email_address}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={account.password}
            onChange={handleChange}
          />
        </label>
        <label>
          New Email
          <input
            type="email"
            name="new_email"
            value={account.new_email}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Confirm New Email
          <input
            type="email"
            name="new_email_conf"
            value={account.new_email_confirm}
            onChange={handleChange}
          />
        </label>
        <button>Change Email</button>
      </form>
    </div>
  );
};

export default EditEmailForm;
