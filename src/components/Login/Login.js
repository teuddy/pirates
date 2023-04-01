import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setError } from "../../store/auth/authSlice";
import axios from "axios";

import {useHistory} from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://34.230.80.55:3000/auth/login", formData);
      dispatch(loginSuccess(response.data));
      //redirect to dashbaord using window
      window.location.href = "/dashboard";
      // history.push("/dashboard"); // Redirect to another route, e.g., "/dashboard"
    } catch (error) {
      dispatch(setError(error.response.data.error));
    }
  };



  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
