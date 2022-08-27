import { useState, useEffect } from "react";

export function useAllCountries(data) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data().then((countries) => {
      setCountries(countries);
      setLoading(false);
    });
  }, []);

  return { countries, loading };
}
