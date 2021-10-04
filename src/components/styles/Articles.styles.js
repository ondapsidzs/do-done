import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(${({ show }) => (show ? "0" : "1000px")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.4s all ease-in-out;
  transition-property: transform, opacity;

  > p {
    margin-top: 10px;
    font-weight: 400;
  }
`;
export const Content = styled.div`
  border-radius: 20px;
  padding: 20px;
  border: white 1px solid;

  * {
    color: white;
  }
`;
