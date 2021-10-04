import styled from "styled-components";

import { AiFillPlusCircle } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  margin-top: 30px;
`;
export const Plus = styled(AiFillPlusCircle)`
  display: ${({ show }) => (show ? "block" : "none")};
  fill: rgb(255, 164, 58);
  height: 50px;
  width: auto;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
