import { CountriesContextProvider } from "./context/countriesContext";
import { ThemeContextProvider } from "./context/contextTheme";
import CountriesRouter from "./routes/countriesRouter";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeContextProvider>
      <CountriesContextProvider>
        <CountriesRouter />
      </CountriesContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
