import React from "react";
import { useThemeMode } from "../hooks/useThemeMode";

const Context = React.createContext({});

export function ButtonToggleProvider({ children }) {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
