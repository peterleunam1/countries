import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../context/countriesContext";
import Navbar from "../molecules/navbar";

import DetailContent from "../organisms/detailContent";

export default function Detail() {
  const { name } = useParams();

  const { countries } = useContext(Context);

  const thisCountry = countries.filter((country) => country.name === name);

  return (
    <div>
      <Navbar isActive="true" />
      <DetailContent country={thisCountry} />
    </div>
  );
}
