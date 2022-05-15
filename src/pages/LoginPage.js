import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllData } from "../utils";
import {
  App, Title, Error, InputContainer, SuccesForm,
  InputPassword, InputText, ButtonContainer,
  SubmitBtn,
  LoginForm,
} from "./styles/LoginStyle.styled"

const LoginPage = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setusers] = useState([])


  const usersUrl = "http://localhost:8000/users";
  const authUrl = "http://localhost:8000/auth/login"

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

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      userName: document.forms[0].uname.value,
      password: document.forms[0].pass.value
    }
    console.log(loginData)
    const resp = await fetch(authUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    });

    const data = await resp.json();

    console.log(data)

    sessionStorage['accessToken'] = data.accessToken;
    // navigate("/movies")

    // <Navigate to="movies"></Navigate>
    // Find user login info
    // const userData = users.find((user) => user.userName === uname.value);

    // Compare user info
    //   if (userData) {
    //     if (userData.password !== pass.value) {
    //       // Invalid password
    //       setErrorMessages({ name: "pass", message: errors.pass });
    //     } else {
    //       setIsSubmitted(true);
    //       console.log("Logged in ");
    //     }
    //   } else {
    //     // Username not found
    //     setErrorMessages({ name: "uname", message: errors.uname });
    //     console.log("Username isn't correct");
    //   }
  };
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderForm = (
    // <LoginForm>
    <form onSubmit={handleSubmit}>
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
        <SubmitBtn value="Submit" type="submit" />
      </ButtonContainer>
    </form>

  )

  useEffect(() => {
  }, []);

  return (
    <div>
      <App>
        {renderForm}

        {/* <SuccesForm>
          <Title>Sign In</Title>
          {isSubmitted ? <Navigate to="movies"></Navigate> : renderForm}
        </SuccesForm> */}
      </App>
    </div>
  );
};

export default LoginPage;
