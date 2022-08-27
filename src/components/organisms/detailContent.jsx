import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../atoms/buttom";
import { IconFont } from "../../utils/icon";
import { Bold } from "../molecules/country";
import DetailList from "../molecules/detailList";
import Context from "../../context/countriesContext";
import { useContext } from "react";
import BackButtom from "../molecules/backButtom";

const DetailContentAllStyled = styled.div`
  margin: 11vh auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  height: 69vh;
  padding-top: 40px;

  @media (max-width: 670px) {
    padding-top: 20px;
  }
`;
const DetailContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70vh;

  @media (max-width: 670px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
const DetailFlag = styled.img`
  width: 35%;
  height: 290px;

  @media (max-width: 900px) {
    width: 40%;
    height: 240px;
    margin-right: 4%;
  }

  @media (max-width: 670px) {
    width: 55%;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
`;
const DetailContentInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 55%;

  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 670px) {
    width: 85%;
  }
`;
const DetailBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
  }
`;
const DetailBorderItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 12px;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    width: 100%;
    margin: 12px 0;
  }
`;
const DetailBorderItem = styled.li`
  margin: 5px 10px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function DetailContent({ country }) {
  const { countries } = useContext(Context);
  return (
    <DetailContentAllStyled>
      <BackButtom />
      {country.map((country) => (
        <DetailContentWrapper key={country.name}>
          <DetailFlag src={country.png} alt={country.name} />
          <DetailContentInfo>
            <h1>
              {country.name}{" "}
              <IconFont
                className="fa-solid fa-copy"
                size="20px"
                color="#000"
                hoverColor="black"
              />
            </h1>
            <DetailList {...country} />
            <DetailBorder>
              <Bold>Border countries: </Bold>
              <DetailBorderItems>
                {!country.borders
                  ? "No borders"
                  : country.borders.map((border) => (
                      <DetailBorderItem key={border}>
                        <Link
                          to={`/countries/${
                            countries.find(
                              (country) => country.alpha3Code === border
                            ).name
                          }`}
                        >
                          <Button width="min-width" height="30px">
                            {
                              countries.find(
                                (country) => country.alpha3Code === border
                              ).name
                            }
                          </Button>
                        </Link>
                      </DetailBorderItem>
                    ))}
              </DetailBorderItems>
            </DetailBorder>
          </DetailContentInfo>
        </DetailContentWrapper>
      ))}
    </DetailContentAllStyled>
  );
}
