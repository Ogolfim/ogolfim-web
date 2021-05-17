import styled from 'styled-components';


export const Main = styled.main`
  margin: 6vw 6vw 6rem;

  @media (min-width: 786px) {
    display: flex;
  }
`;

export const Contain = styled.div`
  > h1 {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.7em;
    margin-top: 4rem;
    margin-bottom: 0.9rem;
  }

  > p {
    margin-bottom: 2rem;
  }

  @media (min-width: 786px) {
    padding-right: 9rem;
  }

  @media (min-width: 992px) {
    padding-right: 13rem;
  }
`;


export const RobotContainerOnMobile = styled.div`
  padding: 0 11vw;

  @media (min-width: 786px) {
    position: absolute;
    left: -999px;
  }
`;

export const RobotContainer = styled.div`
  position: absolute;
  left: -999px;

  @media (min-width: 786px) {
    width: 60rem;
    height: 100%;
    position: initial;
    left: 0px;

    margin-right: 0.9vw;
  }
`;