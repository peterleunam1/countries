import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconFont } from "../../utils/icon";
import Button from "../atoms/buttom";

const ButtonTitle = styled.div`
  margin-left: 10px;
`;

export default function BackButtom() {
  return (
    <Link to="/">
      <Button width="110px" height="30px">
        <IconFont
          className="fa-solid fa-arrow-left-long"
          size="20px"
          color={({ theme }) => theme.colors.other}
          hoverColor="black"
        />
        <ButtonTitle>Back</ButtonTitle>
      </Button>
    </Link>
  );
}
