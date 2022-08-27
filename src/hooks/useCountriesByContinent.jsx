import { useState, useEffect } from "react";
import getCountriesByContinent from "../services/getCountriesByContinents";

export function useCountriesByContinent(continent) {
  const [countriesByContinents, setCountriesByContinents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCountriesByContinent(continent).then((continents) => {
      setCountriesByContinents(continents);
      setLoading(false);
    });
  }, [continent]);

  return { countriesByContinents, loading };
}
