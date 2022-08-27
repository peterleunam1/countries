import styled from "styled-components";
import Country from "../molecules/country";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListCountriesContainer = styled.div`
  width: 90%;
  margin: 40px auto 100px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`;

export default function ListCountries({ countries }) {
  return (
    <ListCountriesContainer>
      {countries.map(({ name, capital, population, png, region }) => (
        <Country
          key={name}
          name={name}
          capital={capital}
          population={population}
          png={png}
          region={region}
        />
      ))}
    </ListCountriesContainer>
  );
}
