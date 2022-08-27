import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "../utils/themes";
import Context2 from "../context/contextTheme";
import Detail from "../components/pages/detail";
import Home from "../components/pages/home";
import NotFound from "../components/pages/notFound";
import Search from "../components/pages/search";
import GlobalStyles from "../GlobalStyles";
import Skeleton from "../components/molecules/skeleton";

export default function CountriesRouter() {
  const { theme } = useContext(Context2);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:name" element={<Detail />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
