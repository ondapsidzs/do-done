import styled from "styled-components";

export const Container = styled.div`
  height: 700px;
  width: 100%;
  background: white;
  border-radius: 20px;

  @media screen and (max-width: 1100px) {
    height: 80vh;
    display: ${({ menuOpen }) => (menuOpen ? "static" : "none")};
  }
`;
export const Content = styled.div`
  position: relative;
  padding: 30px;

  @media (orientation: landscape) and (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;
export const Header = styled.div``;
export const Logo = styled.h1`
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
`;
export const Time = styled.p`
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 0.8rem;
  font-weight: 700;

  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
`;
export const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 50px;
  background: rgb(241, 241, 241);
  margin-top: 30px;

  > * {
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    margin-top: 10px;
  }
`;
export const UserPic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  background-color: rgb(255, 164, 58);
`;
export const Username = styled.p`
  margin-left: 10px;
  font-weight: 400;
`;
export const TodosContainer = styled.div`
  margin-top: 20px;
  font-weight: 800;
  font-size: 1.25rem;

  > div {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 10px;
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;
    color: white;
    border-radius: 50px;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Uncompleted = styled.div`
  background: rgb(255, 192, 69);
`;
export const Completed = styled.div`
  background: rgb(255, 164, 58);
`;
export const Articles = styled.div`
  background: rgb(196, 196, 196);
`;
export const CalendarContainer = styled.div`
  margin-top: 20px;
  font-weight: 800;
  font-size: 1.25rem;

  .react-calendar {
    font-family: "Montserrat", sans-serif;
    font-size: 0.65rem;
    text-align: center;
    margin-top: 10px;
    box-sizing: border-box;

    * {
      text-decoration: none;
    }

    button {
      &:active {
        background: black;
      }
      &:enabled:hover {
        background: rgb(255, 192, 69);
      }
      &:enabled:focus {
        background: rgb(255, 164, 58);
      }
    }
  }

  @media (orientation: landscape) and (max-width: 1100px) {
    margin-left: 20px;
  }
`;
