import styled from "styled-components";
import { useState } from "react";
import SelectPng from "../../assets/down-arrow.png";

const SelectStyled = styled.select`
  width: 30%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  padding: 0 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.other};
  background-color: ${({ theme }) => theme.colors.secondary};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${SelectPng});
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) center;
  background-size: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.2s ease-in-out;
  margin: 40px 0 0 64px;
  display: grid;
  place-content: center;

  @media (max-width: 450px) {
    width: 50%;
  }
`;

const OptionStyled = styled.option`
    color: ${({ theme }) => theme.colors.other}
    font-size: 1rem;
    text-transform: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    border:  ${({ theme }) => theme.colors.border};
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.2s ease-in-out;
`;

export default function Select({ options, handleChange }) {
  // Options is an array of objects with the following structure: {id: "", name: "", emoji: ""}

  return (
    <>
      <SelectStyled defaultValue={"DEFAULT"} onChange={handleChange}>
        <OptionStyled value="DEFAULT" disabled>
          Filter by region
        </OptionStyled>
        {options.map(({ id, name, emoji }) => (
          <OptionStyled key={id} value={name}>
            {emoji} {name}
          </OptionStyled>
        ))}
      </SelectStyled>
    </>
  );
}
