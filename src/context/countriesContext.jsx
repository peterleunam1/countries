import React from "react";
import getAllCountries from "../services/getAllCountries";
import { useAllCountries } from "../hooks/useAllCountries";

const Context = React.createContext({});

export function CountriesContextProvider({ children }) {
  const { countries } = useAllCountries(getAllCountries);

  return <Context.Provider value={{ countries }}>{children}</Context.Provider>;
}

export default Context;
