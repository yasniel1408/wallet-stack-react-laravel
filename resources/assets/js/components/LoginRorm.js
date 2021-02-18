import React from "react";
import { Link } from 'react-router-dom';

export const LoginForm = ({password, email, handleSubmit, onChange}) => (
  <form className="form" onSubmit={handleSubmit}>
    <h2 className="loginText">Login My Wallet</h2>
    <input
      required
      type="email"
      placeholder="Email"
      name="email"
      value={email}
      onChange={onChange}
    />
    <input
      required
      type="password"
      name="password"
      placeholder="Password"
      value={password}
      onChange={onChange}
    />
    <input type="submit" value="Send"/>
    <Link to="/register"> Register</Link>
  </form>
);

export default LoginForm;
