import styled from "styled-components";
import { keyframes } from "styled-components";

const skeleton = keyframes`
  0% {
    background-color: #878e96;
    }
    100% {
    background-color: #c6c8c963 ;
    }
`;
const ListSkeleton = styled.div`
  width: 90%;
  margin: 40px auto 100px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`;
const SkeletonContent = styled.div`
  height: 41vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.secondary};
`;
const SkeletonImg = styled.div`
  width: 80%;
  height: 120px;
  margin-bottom: 20px;
  //   background: #ccc;
  border-radius: 5px;
  animation: ${skeleton} 1.2s linear infinite alternate;
`;
const SkeletonBar = styled.div`
  width: 80%;
  height: 20px;
  // background: #fff;
  margin: 5px 0;
  animation: ${skeleton} 1.2s linear infinite alternate;
  border-radius: 5px;
`;
export default function Skeleton() {
  return (
    <ListSkeleton>
      <SkeletonContent>
        <SkeletonImg />
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
      </SkeletonContent>
      <SkeletonContent>
        <SkeletonImg />
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
      </SkeletonContent>
      <SkeletonContent>
        <SkeletonImg />
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
      </SkeletonContent>
      <SkeletonContent>
        <SkeletonImg />
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
        <SkeletonBar></SkeletonBar>
      </SkeletonContent>
    </ListSkeleton>
  );
}
