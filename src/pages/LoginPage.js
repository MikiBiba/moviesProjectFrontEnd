import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllData } from "../utils";

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/users";
  const handleChange = (e) => {
    useEffect(() => {
      const fetchData = async () => {
        const users = await getAllData();
      };
    }, []);
    console.log(e.target.value);
  };
  return (
    <div>
      <Link to={"movies"}>Movies page</Link>
      <h2>Login page!</h2>
      <strong> User Name:</strong> <input type="text" onChange={handleChange} />
      <br />
      <strong> Password:</strong> <input type="text" onChange={handleChange} />
      <br />
      <br />
      <button>Login </button>
    </div>
  );
};

export default LoginPage;
