import React from "react"
import { useFetch } from "../hooks/useFetch";
import getAllCountries from "../services/getAllCountries";

const Context = React.createContext({

});

export function CountriesContextProvider({ children }) {

    const { countries } = useFetch(getAllCountries);
    return <Context.Provider value={{countries}}>
        {children}
    </Context.Provider>
}


export default Context