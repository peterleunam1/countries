import styled from "styled-components";
import BackButtom from "../molecules/backButtom";
import { Bold } from "../molecules/country";

const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 30%;
  height: 65vh;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 30px;

  @media (max-width: 450px) {
    width: 60%;
  }
`;
const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const NotFoundTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <BackButtom />
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <Bold>Page not found</Bold>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
