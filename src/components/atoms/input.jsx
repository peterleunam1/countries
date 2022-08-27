import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconFont } from "../../utils/icon";

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  border: none;
  background-color: transparent;
`;

const FormStyled = styled.form`
  width: ${(props) => props.width};
  height: 23px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  visibility: ${(props) => props.visibility};
`;

export default function Input({ width, visibility, bg }) {
  const [keyword, setkeyword] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setkeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      alert("Please enter a keyword");
      return;
    } else {
      navigate(`/search/${keyword}`);
    }
  };
  return (
    <FormStyled
      onSubmit={handleSubmit}
      width={width || "70%"}
      visibility={visibility || "visible"}
      bg={bg || "#fff"}
    >
      <IconFont
        className="fa-solid fa-magnifying-glass"
        size="20px"
        color={({ theme }) => theme.colors.accent}
        hoverColor="black"
      />
      <InputStyled
        type="text"
        placeholder="Search for a country ..."
        onChange={handleChange}
      />
    </FormStyled>
  );
}
