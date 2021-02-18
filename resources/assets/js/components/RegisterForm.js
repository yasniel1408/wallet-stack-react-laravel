import React from "react";
import { Link } from "react-router-dom";

export const RegisterForm = ({
  password,
  rerepeatPassword,
  name,
  email,
  handleSubmit,
  onChange
}) => (
  <form className="form" onSubmit={handleSubmit}>
    <h2 className="loginText">Register My Wallet</h2>
    <input
      required
      type="text"
      placeholder="Name"
      name="name"
      value={name}
      onChange={onChange}
    />
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
    <input
      required
      type="password"
      name="rerepeatPassword"
      placeholder="Repeat Password"
      value={rerepeatPassword}
      onChange={onChange}
    />
    <input type="submit" value="Send" />
    <Link to="/"> Login</Link>
  </form>
);

export default RegisterForm;
