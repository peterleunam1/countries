import styled from "styled-components";
import Header from "../organisms/header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNav } from "../../hooks/useNav";
import getCountry from "../../services/getCountry";
import ListCountries from "../organisms/listOfCountries";
import WordBanner from "../atoms/wordBanner";
import Skeleton from "../molecules/skeleton";

const NotFoundStyled = styled.div`
  width: 90%;
  margin: 40px auto;
  padding: 10px 20px;
  background: #ef9a9a;
  border-radius: 5px;
  color: #000;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

export default function Search() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isActive } = useNav();

  useEffect(() => {
    setLoading(true);
    getCountry(name).then((country) => {
      setCountry(country);
      setLoading(false);
    });
  }, [name]);

  const notFound = () => {
    return (
      <NotFoundStyled>
        <h2>Not found</h2>
        <p>Enter a valid country name</p>
      </NotFoundStyled>
    );
  };
  return (
    <>
      <Header isActive={isActive} />
      <WordBanner word={name} />
      {loading ? (
        <Skeleton />
      ) : country ? (
        <ListCountries countries={country} />
      ) : (
        notFound()
      )}
    </>
  );
}
