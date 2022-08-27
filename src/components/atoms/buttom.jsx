import styled from "styled-components";

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:hover {
    border: 1px solid gray;
  }
`;

export default function Button({ children, width, height, onClick }) {
  return (
    <ButtonStyle
      width={width || "150px"}
      height={height || "40px"}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
