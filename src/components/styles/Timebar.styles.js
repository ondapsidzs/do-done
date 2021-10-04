import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  border: 1px solid white;
  border-radius: 20px;
  padding: 30px;
  align-items: center;
`;
export const LeftContent = styled.div`
  > div {
    color: white;
    font-weight: 700;
    font-size: 1.25rem;

    &:nth-of-type(3) {
      font-size: 3rem;
    }
  }
`;
export const RightContent = styled.div`
  text-align: right;

  > div {
    color: white;
    font-weight: 700;

    &:nth-of-type(2) {
      font-size: 2rem;
    }
  }
`;
