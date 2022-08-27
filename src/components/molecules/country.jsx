import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerCountry = styled.article`
  height: 41vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4%);
  }
`;
const FlagCountry = styled.img`
  width: 100%;
  min-height: 140px;
`;
const InfoCountry = styled.div`
  width: 80%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NameCountry = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`;
const ListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const Item = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin: 3px 0;
`;
export const Bold = styled.strong`
  font-weight: 500;
`;

export default function Country({ name, capital, population, png, region }) {
  return (
    <Link to={`/countries/${name}`}>
      <ContainerCountry>
        <FlagCountry src={png} alt={name} />
        <InfoCountry>
          <NameCountry>{name}</NameCountry>
          <ListItem>
            <Item>
              <Bold>Population: </Bold>
              {population}
            </Item>
            <Item>
              <Bold>Region: </Bold>
              {region}
            </Item>
            <Item>
              <Bold>Capital: </Bold>
              {capital}
            </Item>
          </ListItem>
        </InfoCountry>
      </ContainerCountry>
    </Link>
  );
}
