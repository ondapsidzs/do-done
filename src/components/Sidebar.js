import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  Container,
  Content,
  Header,
  Logo,
  Time,
  Username,
  UsernameContainer,
  UserPic,
  TodosContainer,
  Uncompleted,
  Completed,
  // Articles,
  CalendarContainer,
} from "./styles/Sidebar.styles";

const Sidebar = ({
  Name,
  uncompleted,
  completed,
  articles,
  login,
  onChange,
  value,
  menuOpen,
  timeSet,
}) => {
  return (
    <>
      <Container menuOpen={menuOpen}>
        <Content>
          <Header>
            <Logo className="yellow">do:done</Logo>
            <Time className="yellow">{timeSet}</Time>
            <UsernameContainer className="gray">
              <UserPic src={UserPic} alt="" onClick={login}></UserPic>
              <Username onClick={login}>{Name}</Username>
            </UsernameContainer>
            <TodosContainer>
              your to-dos
              <Uncompleted onClick={uncompleted}>uncompleted</Uncompleted>
              <Completed onClick={completed}>completed</Completed>
              {/* <Articles onClick={articles}>articles</Articles> */}
            </TodosContainer>
          </Header>
          <CalendarContainer>
            calendar
            <Calendar onChange={onChange} value={value} />
          </CalendarContainer>
        </Content>
      </Container>
    </>
  );
};

export default Sidebar;

Username.defaultProps = {
  children: "User",
};
