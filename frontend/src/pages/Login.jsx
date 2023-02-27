import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //input value
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:7777/auth/login", user)
        .then((response) => {
          document.cookie = `token=${response.data.token}; expires =${new Date(
            Date.now() + 48000000
          ).toUTCString()}; path=/`;
          window.location.href = "/admin";
          setUser({
            email: "",
            password: "",
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin} action="">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            value={user.email}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="pass"
            value={user.password}
          />
          <button onClick={(e) => handleLogin(e)}>Log in</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
