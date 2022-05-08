import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllData } from "../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles/NavBar.styled";
import {
  App, Title, Error, InputContainer, SuccesForm,
  InputPassword, InputText, ButtonContainer,
  SubmitBtn
} from "./styles/LoginStyle.styled"

const LoginPage = () => {
  const [errorMessages, SetErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setusers] = useState([])


  const usersUrl = "http://localhost:8000/users";

  useEffect(() => {
    const getUsers = async (url) => {
      const { data: users } = await getAllData(url);
      setusers(users)
    };
    getUsers(usersUrl)
  }, [])

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <Error> {errorMessages.message}  </Error>
    )
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const rederFrom = (
    <LoginForm onSubmit={handleSubmit}>
      <InputContainer>
        <label>Username </label>
        <InputText type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </InputContainer>
      <InputContainer>
        <label>Password </label>
        <InputPassword type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </InputContainer>
      <ButtonContainer>
        <SubmitBtn type="submit" />
      </ButtonContainer>
    </LoginForm>
  )

  useEffect(() => {
  }, []);

  return (
    <App>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/movies" >
            Movies
          </NavLink>
          <NavLink to="/members" >
            Members
          </NavLink>
          <NavLink to="/" >
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/" >Sign in</NavBtnLink>
        </NavBtn>
      </Nav>

      <SuccesForm>
        <Title>Sign In</Title>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </SuccesForm>
    </App>
  );
};

export default LoginPage;
