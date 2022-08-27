import styled from "styled-components";

export const IconFont = styled.i`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: bolder;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor};
  }
`;
