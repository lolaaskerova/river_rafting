import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    secretKey: "",
  });
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("none");

  //input value
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //login function
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const allData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  const checkData = (e) => {
    e.preventDefault();
    for (let i = 0; i < 11; i++) {
      if (data[i]?.email === user?.email && data[i]?.username === user?.secretKey) {
        window.location.href = "/admin";
      } else {
        setErrorMessage("block")
      }
    }
  }

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <div className="login d-flex align-items-center justify-content-center flex-column" style={{ paddingTop: " 120px" }}>
        <form onSubmit={handleLogin} action="" style={{ maxWidth: "700px" }}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            className="form-control"
            value={user.email}
          />
          <label htmlFor="pass">Secret Key</label>
          <input
            type="text"
            onChange={handleChange}
            name="secretKey"
            id="pass"
            className="form-control"
            value={user.secretKey}
          />
          <p style={{ display: errorMessage }}> Please check informations again</p>
          <button onClick={(e) => checkData(e)} className="btn btn-primary mt-4">Log in</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
