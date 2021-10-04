import styled from "styled-components";

export const Container = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: relative;
  width: 100%;
  background: white;
  border-radius: 20px;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    fill: rgb(255, 164, 58);
    cursor: pointer;
    height: 30px;
    width: 30px;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.6;
    }
  }
`;
export const NewTodosForm = styled.form`
  display: flex;
  flex-direction: column;

  .mt-10 {
    margin-top: 10px;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 10px;

    &.column {
      display: flex;
      flex-direction: column;
      align-items: unset;
    }
  }

  input {
    background: rgb(196, 196, 196);
    border: none;
    border-radius: 50px;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;

    &.time {
      width: 50%;
    }

    &.title {
      width: 100%;
    }
  }

  textarea {
    resize: none;
    background: rgb(196, 196, 196);
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    font-family: "Montserrat", sans-serif;
    color: rgb(102, 102, 102);

    &.m-10 {
      margin-top: 10px;
    }
  }

  button {
    border: none;
    border-radius: 50px;
    padding: 5px 20px;
    font-weight: 400;
    background: rgb(255, 192, 69);
    color: white;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.6;
    }

    &.orange {
      background: rgb(255, 164, 58);
      margin-left: 10px;
    }
  }
`;
