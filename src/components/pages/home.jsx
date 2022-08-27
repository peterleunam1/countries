import { useContext, useState } from "react";
import { useNav } from "../../hooks/useNav";
import { useCountriesByContinent } from "../../hooks/useCountriesByContinent";
import Context from "../../context/countriesContext";
import ListCountries from "../organisms/listOfCountries";
import Header from "../organisms/header";
import Select from "../atoms/select";
import continents from "../../utils/continents";
import Skeleton from "../molecules/skeleton";

export default function Home() {
  const [selected, setSelected] = useState("");

  const { isActive } = useNav();
  const { countries } = useContext(Context);
  const { countriesByContinents, loading } = useCountriesByContinent(selected);

  const handleChange = (e) => {
    setSelected(() => e.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <Header isActive={isActive} />
      <Select handleChange={handleChange} options={continents} />
      {loading ? (
        <Skeleton />
      ) : countriesByContinents ? (
        <ListCountries countries={countriesByContinents} />
      ) : (
        <ListCountries countries={countries} />
      )}
    </>
  );
}
