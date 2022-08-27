import React from "react";
import { useThemeMode } from "../hooks/useThemeMode";

const Context2 = React.createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <Context2.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context2.Provider>
  );
}

export default Context2;
