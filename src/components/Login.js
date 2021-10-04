import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import LoginImage from "../images/login-background.jpg";

import { Container, Content, Email, ContactUs } from "./styles/Login.styles";

const Login = ({
  logInState,
  setUserId,
  loginHandler,
  logoutHandler,
  popUpToggler,
  setPopUpOpen2,
  setPopUpOpen3,
  setPopUpOpen4,
  setPopUpOpen5,
  setPopUpOpen6,
  setPopUpOpen7,
}) => {
  const [signIn, setSignIn] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [username, setUsername] = useState();
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");

  const postData = (data) =>
    fetch("https://dodone-f4222-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      header: { "Content-stype": "application/json" },
      body: JSON.stringify(data),
    });

  const fetchData = async () => {
    const fetching = await fetch(
      "https://dodone-f4222-default-rtdb.firebaseio.com/users.json"
    );
    const data = await fetching.json();
    return data;
  };

  const transformData = async () => {
    const data = await fetchData();

    let allUserData = [];

    for (const key in data) {
      const userData = {
        id: key,
        ...data[key],
      };

      allUserData.push(userData);
      setUserData(allUserData);
    }
  };

  function signingUp(e) {
    e.preventDefault();

    const userDetails = {};

    if (
      (usernameRef.current.value === "") |
      (passwordRef.current.value === "") |
      (emailRef.current.value === "")
    ) {
      setPopUpOpen2(true);

      setTimeout(() => setPopUpOpen2(false), 2000);
    } else {
      let usernameDuplicate = 0;

      userData.map((user) => {
        if (user.username === usernameRef.current.value) {
          usernameDuplicate += 1;
        }
        return "";
      });

      if (usernameDuplicate) {
        popUpToggler();
      } else {
        userDetails.username = usernameRef.current.value;
        userDetails.password = passwordRef.current.value;
        userDetails.email = emailRef.current.value;
        userDetails.uncompleted = [];

        console.log(userData);

        postData(userDetails);

        clearInputs();

        setPopUpOpen3(true);

        setTimeout(() => setPopUpOpen3(false), 3000);

        setSignIn(true);
      }
    }
  }

  function signingIn(e) {
    e.preventDefault();

    if (
      (usernameRef.current.value === "") |
      (passwordRef.current.value === "")
    ) {
      setPopUpOpen4(true);

      setTimeout(() => setPopUpOpen4(false), 2000);
    } else {
      // Checking username and password
      let usernameFound = false;

      for (let i = 0; i < userData.length; i++) {
        if (userData[i].username === usernameRef.current.value) {
          usernameFound = true;

          if (userData[i].password === passwordRef.current.value) {
            setLoggedIn(true);
            setUsername(userData[i].username);
            clearInputs();
            setUserId(userData[i].id);
            loginHandler();

            setPopUpOpen7(true);

            setTimeout(() => setPopUpOpen7(false), 2000);
          } else {
            setPopUpOpen6(true);

            setTimeout(() => setPopUpOpen6(false), 2000);
          }
        }
      }

      if (!usernameFound) {
        setPopUpOpen5(true);

        setTimeout(() => setPopUpOpen5(false), 2000);
      }
    }
  }

  function toSignUp() {
    clearInputs();

    setSignIn(!signIn);
  }

  function clearInputs() {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.value = "";
  }

  function logout() {
    setLoggedIn(false);
    logoutHandler();
  }

  useEffect(() => {
    transformData();
  }, []);

  return (
    <>
      {loggedIn ? (
        <Container show={logInState}>
          <Content>
            <h1>Account details</h1>
            <div className="profile">
              <img src="" alt="" className="profile" />
              <p>{username}</p>
            </div>
            <div>
              <p>Date created: September 10, 2021</p>
            </div>
            <div className="stat">
              <p>Uncompleted todos: 100</p>
              <p>Completed todos: 100</p>
            </div>
            <div>
              <p>Articles read: 0</p>
            </div>
            <div className="buttons">
              <button className="changePass">change password</button>
              <button className="logout" onClick={logout}>
                logout
              </button>
            </div>
          </Content>
        </Container>
      ) : (
        <Container show={logInState}>
          <img src={LoginImage} alt="" />
          <Content>
            <form action="" onSubmit={signIn ? signingIn : signingUp}>
              <h1 className="yellow">{signIn ? "sign in" : "sign up"}</h1>
              <div>
                <label htmlFor="username" className="username">
                  username
                  <input id="username" ref={usernameRef} />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  password
                  <input type="password" id="password" ref={passwordRef} />
                </label>
              </div>
              <Email show={signIn}>
                <label htmlFor="email">
                  email address
                  <input type="email" id="email" ref={emailRef} />
                </label>
              </Email>
              <button>{signIn ? "sign in" : "sign up"}</button>
            </form>
            <p onClick={toSignUp} className="cursor-p">
              {signIn
                ? "no account yet? click here"
                : "already have an account? click here"}
            </p>
            <p className="cursor-p">forgot account?</p>
            <ContactUs show={signIn}>
              <h1>contact us</h1>
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </ContactUs>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Login;
