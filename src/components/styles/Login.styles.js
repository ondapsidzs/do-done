import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  /* height: 500px; */
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transform: translateY(-120%);
  transform: translateY(${({ show }) => (show ? "0" : "-120%")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.4s all ease-in-out;
  transition-property: transform, opacity;

  > img {
    width: 35%;
    height: 500px;
    object-fit: cover;
    object-position: -100px;
    border-radius: 20px;

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }

  img.profile {
    height: 40px;
    width: 40px;
    background: rgb(255, 164, 58);
    border: none;
    border-radius: 50px;
  }
`;
export const Content = styled.div`
  width: 65%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  p {
    display: block;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 10px;
    width: 20%;
    white-space: nowrap;

    &.cursor-p {
      cursor: pointer;
    }

    &:nth-of-type(2) {
      margin-top: 5px;
    }
  }

  > form {
    > h1 {
      font-size: 3rem;
    }

    > div > label {
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 15px;

      &.username::after {
        content: "username already exists";
        display: none;
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 0.75rem;
        font-weight: 300;
        color: red;
      }

      > input {
        font-family: "Montserrrat", sans-serif;
        margin-top: 5px;
        padding: 5px 10px;
        border-radius: 50px;
        border: none;
        background: rgb(196, 196, 196);

        @media screen and (max-width: 1100px) {
          width: 70%;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }
    }

    > button {
      padding: 10px 30px;
      border: none;
      border-radius: 100px;
      background: rgb(255, 192, 69);
      color: white;
      margin-top: 20px;
      font-size: 1.25rem;
      cursor: pointer;
      transition: 0.2s all ease-in-out;
      transition-property: opacity, background;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  div.profile {
    display: flex;
    align-items: center;
    margin-top: 30px;

    > p {
      padding: 0;
      margin: 0;
      margin-left: 10px;
      cursor: default;
      font-size: 1.15rem;
    }
  }

  div.stat {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    > p {
      margin: 0;
      width: unset;
      cursor: default;

      &:first-of-type {
        @media screen and (max-width: 1100px) {
          margin-bottom: 10px;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
  }

  div.buttons {
    display: flex;
    width: 100%;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  button.changePass {
    width: 200px;
    padding: 5px;
    margin-top: 30px;
    margin-right: 30px;
    background: rgb(255, 192, 69);
    border-radius: 30px;
    border: none;
    font-weight: 400;
    cursor: pointer;
    color: white;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 600px) {
      margin-right: 0;
      margin-top: 20px;
    }
  }

  button.logout {
    width: 200px;
    padding: 5px;
    margin-top: 30px;
    background: rgb(255, 164, 58);
    border-radius: 30px;
    border: none;
    font-weight: 400;
    cursor: pointer;
    color: white;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 600px) {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
export const Email = styled.div`
  height: 80px;
  height: ${({ show }) => (!show ? "80px" : "0")};
  overflow-y: hidden;
  transition: 0.2s all ease-in-out;
  transition-property: height;
`;
export const ContactUs = styled.div`
  height: ${({ show }) => (show ? "100px" : "0")};
  overflow-y: hidden;
  transition: 0.2s all ease-in-out;
  transition-property: height;

  h1 {
    margin-bottom: 10px;
  }

  svg {
    height: 50px;
    width: auto;
    margin-right: 10px;
    transition: 0.2s all ease-in-out;
    transition-property: fill;

    &:hover {
      fill: rgb(255, 192, 69);
    }
  }
`;
