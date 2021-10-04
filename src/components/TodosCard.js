import React, { useState } from "react";

import {
  Container,
  Time,
  Title,
  Important,
  Option,
  Options,
} from "./styles/TodosCard.styles";

const TodosCard = ({
  id,
  time,
  title,
  important,
  description,
  deleteTask,
  setToImportant,
  setToCompleted,
}) => {
  const [options, setOptions] = useState(false);

  function toggleOption() {
    setOptions(!options);
  }

  return (
    <>
      <Container>
        <div className="header">
          <Time className="orange bold">{time}</Time>
          <Title className="bold">{title}</Title>
          {important && <Important />}
        </div>
        <p>{description}</p>
        <Option onClick={toggleOption} />
        {options && (
          <Options id={id}>
            <div onClick={() => setToImportant(id)}>
              set to <b>important</b>
            </div>
            <div onClick={() => setToCompleted(id)}>
              set to <b>completed</b>
            </div>
            <div onClick={() => deleteTask(id)}>delete</div>
          </Options>
        )}
      </Container>
    </>
  );
};

export default TodosCard;

Time.defaultProps = {
  children: "7:00 pm",
};

Title.defaultProps = {
  children: "Task Title",
};

Important.defaultProps = {
  children: "important",
};
