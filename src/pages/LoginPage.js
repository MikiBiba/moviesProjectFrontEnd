import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllData } from "../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles/NavBar.styled";
const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/users";
  const handleChange = () => { }
  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllData();
    };
  }, []);

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/movies" activeStyle>
            Movies
          </NavLink>
          <NavLink to="/members" activeStyle>
            Members
          </NavLink>
          <NavLink to="/" activeStyle>
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/" >Sign in</NavBtnLink>
        </NavBtn>
      </Nav>



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
