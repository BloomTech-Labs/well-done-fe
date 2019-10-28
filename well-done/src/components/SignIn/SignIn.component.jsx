import React, { useState } from "react";

import "./SignIn.styles.scss";

const SignIn = () => {
  const [account, setAccount] = useState({ email: "", password: "" });

  return (
    <div>
      <h1>Well-Done</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={account.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={account.password}
        />
      </form>
    </div>
  );
};

export default SignIn;
