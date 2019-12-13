import React, { useState } from "react";
import axios from "axios";

import {useDispatch} from 'react-redux'
import {fetchSignIn} from '../../actions/signInActions'

import { Form, Icon, Input, Button, Row, Col, Typography } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;

const SignIn = props => {
  // console.log('props in SignIn', props)
  const [account, setAccount] = useState({ email_address: "", password: "" });

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("submit", account);
    axios
      .post(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`, account)
      .then(res => {
        console.log("Signin res", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.id);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Row>
      <Col span={24} offset={3} style={{ marginBottom: "20px" }}>
        <Title>Sign In</Title>
      </Col>
      <Col span={24} offset={3}>
        <Form onSubmit={handleSubmit} style={{ maxWidth: "280px" }}>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="email"
              name="email_address"
              placeholder="Email"
              value={account.email_address}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              name="password"
              placeholder="Password"
              value={account.password}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
