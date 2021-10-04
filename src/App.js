import { useState, useEffect } from "react";
import "./App.css";

import Background1 from "./images/background-asset-1.png";
import Background2 from "./images/background-asset-2.png";

import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import TimeBar from "./components/TimeBar";
import TodosCard from "./components/TodosCard";
import AddTodos from "./components/AddTodos";
// import Articles from "./components/Articles";
import {
  Header,
  Logo,
  Menu,
  Close,
  Content,
  LeftContent,
  RightContent,
  BackgroundAsset1,
  BackgroundAsset2,
  Uncompleted,
  CompletedTodos,
  LoginNotificationContainer,
  Background,
  PopUp,
} from "./App.styles";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState(0);
  const [uncompletedTodos, setUncompletedTodos] = useState(["hello"]);
  const [completedTodos, setCompletedTodos] = useState(["hello"]);
  const [value, onChange] = useState(new Date());
  const [userId, setUserId] = useState("");
  const [addingTodo, setAddingTodo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpOpen2, setPopUpOpen2] = useState(false);
  const [popUpOpen3, setPopUpOpen3] = useState(false);
  const [popUpOpen4, setPopUpOpen4] = useState(false);
  const [popUpOpen5, setPopUpOpen5] = useState(false);
  const [popUpOpen6, setPopUpOpen6] = useState(false);
  const [popUpOpen7, setPopUpOpen7] = useState(false);
  const [popUpOpen8, setPopUpOpen8] = useState(false);
  const [popUpOpen9, setPopUpOpen9] = useState(false);
  const [popUpOpen10, setPopUpOpen10] = useState(false);
  const [popUpOpen11, setPopUpOpen11] = useState(false);
  const [updateAll, setUpdateAll] = useState(true);
  const [timeSet, setTimeSet] = useState("");

  function login() {
    setState(0);
  }
  function uncompleted() {
    setState(1);
  }

  function completed() {
    setState(2);
  }

  function articles() {
    setState(3);
  }

  function loginHandler() {
    setLoggedIn(true);
  }

  function logoutHandler() {
    setLoggedIn(false);
  }

  function menuToggler() {
    setMenuOpen(!menuOpen);
  }

  function popUpToggler() {
    setPopUpOpen(true);

    setTimeout(() => {
      setPopUpOpen(false);
    }, 2000);
  }

  async function todoListToggler(loggedIn, userId, value, state) {
    if (loggedIn && state === 1) {
      let dateArray = value.toString().split(" ");
      let dateValue = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
      let link = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateValue}.json`;

      const res = await fetch(link);
      const data = await res.json();

      let dataArray = [];

      for (const key in data) {
        const postData = {
          id: key,
          ...data[key],
        };

        if (!postData.completed) {
          dataArray.push(postData);
        }
      }

      // console.log(dataArray);

      setUncompletedTodos(dataArray);
    }

    if (loggedIn && state === 2) {
      let dateArray = value.toString().split(" ");
      let dateValue = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
      let link = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateValue}.json`;

      const res = await fetch(link);
      const data = await res.json();

      let dataArray = [];

      for (const key in data) {
        const postData = {
          id: key,
          ...data[key],
        };

        if (postData.completed) {
          dataArray.push(postData);
        }
      }

      // console.log(dataArray);

      setCompletedTodos(dataArray);
    }
  }

  async function gettingData(itemLink) {
    const res = await fetch(itemLink);
    const data = await res.json();

    return data;
  }

  async function setToImportant(id) {
    setPopUpOpen10(true);

    setTimeout(() => setPopUpOpen10(false), 2000);

    let dateArray = value.toString().split(" ");
    let dateValue = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;

    let itemLink = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateValue}/${id}/important.json`;
    let importantValue = true;

    const gettingDataValue = await gettingData(itemLink);

    if (gettingDataValue === true) {
      importantValue = false;
    }

    await fetch(itemLink, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(importantValue),
    });

    function updateNow() {
      return new Promise(() => setUpdateAll(!updateAll));
    }

    await updateNow();
  }

  async function setToCompleted(id) {
    setPopUpOpen11(true);

    setTimeout(() => setPopUpOpen11(false), 2000);

    let dateArray = value.toString().split(" ");
    let dateValue = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;

    let itemLink = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateValue}/${id}/completed.json`;
    let completedValue = true;

    const gettingDataValue = await gettingData(itemLink);

    if (gettingDataValue === true) {
      completedValue = false;
    }

    await fetch(itemLink, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(completedValue),
    });

    function updateNow() {
      return new Promise(() => setUpdateAll(!updateAll));
    }

    await updateNow();
  }

  function deleteTask(id) {
    let dateArray = value.toString().split(" ");
    let dateValue = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;

    let itemLink = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateValue}/${id}.json`;

    fetch(itemLink, { method: "DELETE" });

    setUpdateAll(!updateAll);
  }

  useEffect(
    () => todoListToggler(loggedIn, userId, value, state),
    [userId, loggedIn, value, state, addingTodo, updateAll]
  );

  let parts = value.toString().split(" ");

  // useEffect(() =>
  //   setInterval(() => {
  //     let timeValue = Date().toLocaleString().split(" ");
  //     let time = timeValue[4];
  //     setTimeSet(time);
  //   }, 1000)
  // );

  return (
    <>
      <Header menuOpen={menuOpen}>
        <Logo>do:done</Logo>
        {menuOpen ? (
          <Close onClick={menuToggler} />
        ) : (
          <Menu onClick={menuToggler} />
        )}
      </Header>
      <Content>
        <LeftContent>
          <Sidebar
            login={login}
            uncompleted={uncompleted}
            completed={completed}
            articles={articles}
            onChange={onChange}
            value={value}
            menuOpen={menuOpen}
            timeSet={timeSet}
          />
        </LeftContent>
        <RightContent>
          <Login
            logInState={state === 0}
            setUserId={setUserId}
            loginHandler={loginHandler}
            logoutHandler={logoutHandler}
            popUpToggler={popUpToggler}
            setPopUpOpen2={setPopUpOpen2}
            setPopUpOpen3={setPopUpOpen3}
            setPopUpOpen4={setPopUpOpen4}
            setPopUpOpen5={setPopUpOpen5}
            setPopUpOpen6={setPopUpOpen6}
            setPopUpOpen7={setPopUpOpen7}
          />
          <Uncompleted show={state === 1}>
            {loggedIn ? (
              <>
                <TimeBar
                  day={parts[0]}
                  date={parts[1] + " " + parts[2] + ", " + parts[3]}
                />
                {uncompletedTodos &&
                  uncompletedTodos.map((todo) => (
                    <TodosCard
                      id={todo.id}
                      time={todo.time}
                      title={todo.title}
                      important={todo.important}
                      description={todo.descriptionRef}
                      deleteTask={deleteTask}
                      setToImportant={setToImportant}
                      setToCompleted={setToCompleted}
                    />
                  ))}
                <AddTodos
                  userId={userId}
                  date={value}
                  setAddingTodo={setAddingTodo}
                  addingTodo={addingTodo}
                  setPopUpOpen8={setPopUpOpen8}
                  setPopUpOpen9={setPopUpOpen9}
                />
              </>
            ) : (
              <LoginNotificationContainer>
                <div>
                  Please <b>login</b> to create and view todos.
                </div>
              </LoginNotificationContainer>
            )}
          </Uncompleted>
          <CompletedTodos show={state === 2}>
            {loggedIn ? (
              <>
                <TimeBar
                  day={parts[0]}
                  date={parts[1] + " " + parts[2] + ", " + parts[3]}
                  state={state}
                />
                {completedTodos &&
                  completedTodos.map((todo) => (
                    <TodosCard
                      id={todo.id}
                      time={todo.time}
                      title={todo.title}
                      important={todo.important}
                      description={todo.descriptionRef}
                      deleteTask={deleteTask}
                      setToImportant={setToImportant}
                      setToCompleted={setToCompleted}
                    />
                  ))}
              </>
            ) : (
              <LoginNotificationContainer>
                <div>
                  Please <b>login</b> to create and view todos.
                </div>
              </LoginNotificationContainer>
            )}
          </CompletedTodos>
          {/* <Articles show={state === 3} /> */}
        </RightContent>
      </Content>
      <BackgroundAsset1 src={Background1} alt="" />
      <BackgroundAsset2 src={Background2} alt="" />
      {menuOpen && <Background />}

      <PopUp popUpOpen={popUpOpen}>username already exists</PopUp>
      <PopUp popUpOpen={popUpOpen2}>fill in all inputs</PopUp>
      <PopUp popUpOpen={popUpOpen3}>register successful</PopUp>
      <PopUp popUpOpen={popUpOpen4}>fill in all required inputs</PopUp>
      <PopUp popUpOpen={popUpOpen5}>username not found</PopUp>
      <PopUp popUpOpen={popUpOpen6}>username and password not matched</PopUp>
      <PopUp popUpOpen={popUpOpen7}>sign in successful</PopUp>
      <PopUp popUpOpen={popUpOpen8}>fill in all required inputs</PopUp>
      <PopUp popUpOpen={popUpOpen9}>todo added successfully</PopUp>
      <PopUp popUpOpen={popUpOpen10}>todo set as important</PopUp>
      <PopUp popUpOpen={popUpOpen11}>todo set as completed</PopUp>
    </>
  );
}

export default App;
