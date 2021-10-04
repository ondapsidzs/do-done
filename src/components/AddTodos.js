import React, { useState, useEffect } from "react";
import NewTodos from "./NewTodos";

import { Container, Plus } from "./styles/AddTodos.styles";

const AddTodos = ({
  userId,
  date,
  setAddingTodo,
  addingTodo,
  setPopUpOpen8,
  setPopUpOpen9,
}) => {
  const [newTodos, setNewTodos] = useState(false);

  function toggleNewTodos() {
    setNewTodos(!newTodos);
  }

  useEffect(() => {
    setNewTodos(false);
  }, [addingTodo, date]);

  return (
    <>
      <Container newTodos={newTodos}>
        <NewTodos
          show={newTodos}
          close={toggleNewTodos}
          userId={userId}
          date={date}
          setAddingTodo={setAddingTodo}
          addingTodo={addingTodo}
          setPopUpOpen8={setPopUpOpen8}
          setPopUpOpen9={setPopUpOpen9}
        />
        <Plus onClick={toggleNewTodos} show={!newTodos} />
      </Container>
    </>
  );
};

export default AddTodos;
