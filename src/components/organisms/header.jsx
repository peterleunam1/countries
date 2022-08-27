import styled from "styled-components";
import Input from "../atoms/input";
import Navbar from "../molecules/navbar";
import { Bold } from "../molecules/country";
import randomNamesCountries from "../../helpers/randomNamesCountries";
import Banner from "../../assets/Banner.png";

const HeaderStyled = styled.header`
  width: 100%;
  height: 75vh;
  background-image: url("${Banner}");
  background-size: cover;
  background-position-y: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    height: 85vh;
  }
`;
const HeaderContent = styled.div`
  width: 48%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3%;
  
  @media (max-width: 900px) {
    width: 65%;
  }
  @media (max-width: 450px) {
    width: 80%;
    margin-top: 0;
  }
  @media (max-width: 350px) {
    width: 85%;
    justify-content: space-around;
  }
`;
const HeaderTextTitle = styled.h1`
  color: #fff;
`;
const HeaderText = styled.p`
  color: #fff;
  margin-top: 10px;
  @media (max-width: 450px) {
    margin-top: 30px;
  }
`;

export default function Header({ isActive }) {
  const names = randomNamesCountries();
  return (
    <HeaderStyled>
      <Navbar isActive={isActive}></Navbar>
      <HeaderContent>
        <HeaderTextTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nulla provident doloremque harum iure illum?
        </HeaderTextTitle>
        <Input width="93%" />
        <HeaderText>
          <Bold>Trends: </Bold>
          {names}
        </HeaderText>
      </HeaderContent>
    </HeaderStyled>
  );
}
