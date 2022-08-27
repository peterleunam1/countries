import { useContext } from "react";
import Context from "../context/countriesContext";

const randomNamesCountries = () => {
  const miContext = useContext(Context);
  const { countries } = miContext;

  const names = countries.map((country) => country.name);
  const randomNames = [];

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * names.length);
    const randomCountry = names[random];
    randomNames.push(randomCountry, ". ");
  }

  return randomNames;
};

export default randomNamesCountries;
