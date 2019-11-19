import React, { useState } from "react";
import axios from 'axios'
import "./SignIn.styles.scss";

const SignIn = props => {
  // console.log('props in SignIn', props)
  const [account, setAccount] = useState({email_address: "", password: ""})

  const handleChange = event => {
    setAccount({...account,[event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('submit', account)
    axios
        .post('https://welldone-db.herokuapp.com/api/auth/login', account)
        .then(res => {
          console.log('res', res.data)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data.id)
          props.history.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
  }
  

  return (
    <div className="signinbody">
      <h1 className="welcome">Welcome </h1>
      <form onSubmit={handleSubmit} >
        <label>Email
          <input
            type="email"
            name="email_address"
            placeholder="Email Address"
            value={account.email_address}
            // onChange= {event => {
            //   setEmail(event.target.value)
            // }}
            onChange={handleChange}
          />
        </label>
        <label>Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={account.password}
            // onChange= {event => {
            //   setPassword(event.target.value)
            // }}
            onChange={handleChange}
          />
        </label>
        <button>Sign In</button>
      </form>
      
    </div>
  );
};

export default SignIn;
