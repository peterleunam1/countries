
import styled from "styled-components";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ContainerCountry = styled.article`
  height: 41vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4%);
  }
`;
const FlagCountry = styled.div`
  width: 100%;
  min-height: 140px;
`;
const InfoCountry = styled.div`
  width: 80%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NameCountry = styled.h3`
  font-weight: bold;
  color: #000;
  margin: 0;
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`;
const ListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const Item = styled.li`
  color: #000;
  margin: 3px 0;
`;


export default function SkeletonStyled() {
    return (
       <ContainerCountry>
        <Skeleton count={5}/>
      </ContainerCountry>
    );
  }