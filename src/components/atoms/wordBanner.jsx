import styled from "styled-components";
import { Bold } from "../molecules/country";

const BannerStyed = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 40px auto 0 auto;
`;

export default function WordBanner({ word }) {
  return (
    <BannerStyed>
      <p>
        Search results for: <Bold>{word}</Bold>{" "}
      </p>
    </BannerStyed>
  );
}
