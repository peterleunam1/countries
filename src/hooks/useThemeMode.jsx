import { useState } from "react";

export function useThemeMode() {
  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    console.log("clickk");
    if (theme === "default") {
      setTheme("dark");
      return;
    }

    setTheme("default");
  };

  return [theme, toggleTheme];
}

export default useThemeMode;
