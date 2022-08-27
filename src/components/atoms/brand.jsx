import styled from "styled-components";
import Logo from "../../assets/travelling.png";
import { Link } from "react-router-dom";

const BrandStyled = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  width: max-content;
`;
const LogoStyled = styled.img`
  width: 45px;
`;
const TextStyled = styled.h3`
  font-size: 1.14rem;
  color: ${(props) => props.color};
  margin-left: 8px;
  @media (max-width: 450px) {
    display: none;
  }
`;

export default function Brand({ color }) {
  return (
    <Link to="/">
      <BrandStyled>
        <LogoStyled src={Logo} alt="logo" />
        <TextStyled color={color}>Where in the world?</TextStyled>
      </BrandStyled>
    </Link>
  );
}
