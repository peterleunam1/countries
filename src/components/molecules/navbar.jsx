import styled from "styled-components";
import Input from "../atoms/input";
import Brand from "../atoms/brand";
import Button from "../atoms/buttom";
import { useContext } from "react";
import Context2 from "../../context/contextTheme";
import { IconFont } from "../../utils/icon";

const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  background-color: ${(props) =>
    props.isActive ? ({ theme }) => theme.colors.background : "transparent"};
  box-shadow: ${(props) =>
    props.isActive ? ({ theme }) => theme.colors.boxshadow : "none"};
`;
const SeparatorMode = styled.p`
  margin: 0 10px;
`;

export default function Navbar({ isActive }) {
  const { theme, toggleTheme } = useContext(Context2);

  return (
    <NavbarStyled isActive={isActive}>
      <Brand
        color={isActive ? ({ theme }) => theme.colors.text : "#ccc"}
      ></Brand>
      <Input
        width="40%"
        visibility={isActive ? "visible" : "hidden"}
        bg={({ theme }) => theme.colors.inputs}
      />
      <Button onClick={toggleTheme} width="80px" height="30px">
        <IconFont
          className="fa-solid fa-moon"
          size="18px"
          color={({ theme }) => theme.colors.text}
          hoverColor="black"
        />
        <SeparatorMode>/</SeparatorMode>
        <IconFont
          className="fa-regular fa-sun"
          size="18px"
          color={({ theme }) => theme.colors.text}
          hoverColor="black"
        />
      </Button>
    </NavbarStyled>
  );
}
