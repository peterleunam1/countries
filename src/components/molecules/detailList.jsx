import styled from "styled-components";
import { Bold } from "../molecules/country";
const DetailListStyled = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
const DetailListItem = styled.li`
  margin: 12px 200px 12px 0;
  width: 100%;
  @media (max-width: 900px) {
    width: 80%;
    margin: 12px 130px 12px 0;
  }
`;

export default function DetailList({
  nativeName,
  population,
  region,
  subregion,
  capital,
  currencies,
  idioms,
  topLevelDomain,
}) {
  return (
    <DetailListStyled>
      <div>
        <DetailListItem>
          <Bold>Native name: </Bold>
          {nativeName}
        </DetailListItem>
        <DetailListItem>
          <Bold>Population: </Bold>
          {population}
        </DetailListItem>
        <DetailListItem>
          <Bold>Region: </Bold>
          {region}
        </DetailListItem>
        <DetailListItem>
          <Bold>Subregion: </Bold>
          {subregion}
        </DetailListItem>
        <DetailListItem>
          <Bold>Capital: </Bold>
          {capital}
        </DetailListItem>
      </div>
      <div>
        <DetailListItem>
          <Bold>Top Level Domain: </Bold>
          {topLevelDomain}
        </DetailListItem>
        <DetailListItem>
          <Bold>Currencies: </Bold>
          {currencies.map((currency) => currency.name)}
        </DetailListItem>
        <DetailListItem>
          <Bold>Languages: </Bold>
          {idioms}
        </DetailListItem>
      </div>
    </DetailListStyled>
  );
}
