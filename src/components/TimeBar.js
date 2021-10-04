import React from "react";

import { Container, LeftContent, RightContent } from "./styles/Timebar.styles";

const TimeBar = ({ day, date, time, state }) => {
  return (
    <>
      <Container>
        <LeftContent>
          <div>{!state ? "todos for" : "completed todos for"}</div>
          <div>{day ? day : "day"}</div>
          <div>{date ? date : "Sep 22, 2021"}</div>
        </LeftContent>
        <RightContent>
          <div>current time</div>
          <div>{time ? time : "5:00 am"}</div>
        </RightContent>
      </Container>
    </>
  );
};

export default TimeBar;
