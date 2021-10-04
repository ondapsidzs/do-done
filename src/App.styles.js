import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export const Header = styled.div`
  display: none;
  position: ${({ menuOpen }) => (false ? "fixed" : "block")};
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;
export const Logo = styled.h1`
  color: white;
  cursor: default;
  z-index: 100;
`;
export const Menu = styled(BiMenu)`
  fill: white;
  cursor: pointer;
  height: 30px;
  width: auto;
  z-index: 100;

  &:hover {
    opacity: 0.6;
  }
`;
export const Close = styled(IoClose)`
  fill: white;
  cursor: pointer;
  height: 30px;
  width: auto;
  z-index: 100;

  &:hover {
    opacity: 0.6;
  }
`;
export const Content = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  padding-top: 20px;

  @media (max-width: 1100px) {
    width: 80vw;
    justify-content: center;
  }
`;
export const LeftContent = styled.div`
  width: 270px;
  position: fixed;
  z-index: 10;

  @media (orientation: landscape) and (max-width: 1100px) {
    width: 600px;
  }
`;
export const RightContent = styled.div`
  position: absolute;
  width: 700px;
  right: 0;
  padding-bottom: 20px;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const BackgroundAsset1 = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -100;
  height: 400px;
  width: auto;
`;
export const BackgroundAsset2 = styled.img`
  position: fixed;
  left: 80px;
  bottom: 0;
  z-index: -100;
  height: 100vh;
  width: auto;

  @media (max-width: 1100px) {
    left: 20px;
    height: 80vh;
    opacity: 0.5;
  }
`;
export const Uncompleted = styled.div`
  position: absolute;
  transform: translateX(${({ show }) => (show ? "0" : "1000px")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.4s all ease-in-out;
  transition-property: transform, opacity;
  width: 100%;
`;
export const CompletedTodos = styled.div`
  position: absolute;
  transform: translateX(${({ show }) => (show ? "0" : "1000px")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.4s all ease-in-out;
  transition-property: transform, opacity;
  width: 100%;
`;
export const LoginNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 20px;

  b {
    font-weight: 400;
    color: rgb(255, 192, 69);
  }
`;
export const Background = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    position: fixed;
    z-index: 5;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }
`;
export const PopUp = styled.div`
  position: fixed;
  padding: 20px;
  background: white;
  z-index: 100;
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: default;
  transform: translateY(${({ popUpOpen }) => (popUpOpen ? "0" : "-300px")});
  opacity: ${({ popUpOpen }) => (popUpOpen ? "1" : "0")};
  transition: 0.4s all ease-in-out;
  transition-property: opacity, transform;
`;
