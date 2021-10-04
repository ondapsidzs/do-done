import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

import { Container, NewTodosForm } from "./styles/NewTodos.styles";

const NewTodos = ({
  show,
  close,
  userId,
  date,
  setAddingTodo,
  addingTodo,
  setPopUpOpen8,
  setPopUpOpen9,
}) => {
  const timeRef = useRef("");
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  let importantCheckbox = document.querySelector(".importantCheckbox");

  const postData = (todo) => {
    //set the link with respect to the user logged in
    let dateArray = date.toString().split(" ");
    let dateTodo = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
    let postLink = `https://dodone-f4222-default-rtdb.firebaseio.com/users/${userId}/uncompleted/${dateTodo}.json`;

    fetch(postLink, {
      method: "POST",
      header: { "Content-stype": "application/json" },
      body: JSON.stringify(todo),
    });
  };

  function submitForm(e) {
    e.preventDefault();

    if (timeRef.current.value === "" || titleRef.current.value === "") {
      setPopUpOpen8(true);

      setTimeout(() => setPopUpOpen8(false), 2000);
    } else {
      const newTodo = {};

      newTodo.time = timeRef.current.value;
      newTodo.title = titleRef.current.value;
      newTodo.descriptionRef = descriptionRef.current.value;
      newTodo.important = importantCheckbox.checked;

      postData(newTodo);
      clearNewTodoInputs();
      setAddingTodo(!addingTodo);

      setPopUpOpen9(true);

      setTimeout(() => setPopUpOpen9(false), 2000);
    }
  }

  function clearNewTodoInputs() {
    timeRef.current.value = "";
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <Container show={show}>
      <h1>add new todo</h1>
      <IoClose onClick={close} className="close" />
      <NewTodosForm action="" onSubmit={submitForm}>
        <label htmlFor="time">
          time
          <input id="time" className="time" ref={timeRef} />
        </label>
        <label htmlFor="title">
          title
          <input id="title" className="title" ref={titleRef} />
        </label>
        <label htmlFor="description" className="column">
          description
          <textarea
            id="description"
            className="height-200 m-10"
            ref={descriptionRef}
          />
        </label>
        <label>
          set important
          <input type="checkbox" className="importantCheckbox" />
        </label>
        <div className="mt-10">
          <button>add todo</button>
          <button className="orange" onClick={close}>
            cancel
          </button>
        </div>
      </NewTodosForm>
    </Container>
  );
};

export default NewTodos;
