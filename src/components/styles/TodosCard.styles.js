import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 30px;
  margin-top: 30px;

  > div {
    display: flex;
    align-items: center;

    &.header {
      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  > p {
    margin-top: 10px;
    word-wrap: break-word;
  }
`;
export const Time = styled.h1`
  font-size: 30px;
`;
export const Title = styled.h1`
  margin-left: 30px;
  font-size: 30px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
export const Important = styled.p`
  font-size: 0.75rem;
  margin-left: 20px;
  background: rgb(255, 164, 58);
  padding: 5px 10px;
  color: white;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
export const Option = styled(BsThreeDots)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  height: 20px;
  width: auto;
`;
export const Options = styled.div`
  position: absolute;
  top: 40px;
  right: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  height: 70px;
  width: 200px;
  border-radius: 10px;
  font-size: 0.75rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;

  > div {
    cursor: pointer;
    margin-top: 5px;

    > b {
      font-weight: 700;
    }
  }
`;
