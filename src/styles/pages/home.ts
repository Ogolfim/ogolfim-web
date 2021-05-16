import styled from 'styled-components';


export const Main = styled.main`
  flex: 1;
  margin: 6vw 0 0;
  position: relative;
  overflow: hidden;
`;

export const Presence = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 6vw;

  > h1 {
    font-size: 2.9em;
  }

  > p {
    margin-bottom: 1rem;
    max-width: 50rem;
  }

  @media (min-width: 786px) {
    > h1 {
      font-size: 3.1em;
    }

    > p {
      margin-top: 0.3rem;
      margin-bottom: 1.3rem;
    }
  }
`;

export const Worker = styled.div`
  margin-top: 3rem;
  background-color: var(--color-primary);
  
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 786px) {
    margin: 3rem 6rem;
  }
`;

export const WorkerSteps = styled.div`
  max-width: 33rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 2.6rem;
  padding: 0 .6rem;
`;

export const WorkerMain = styled.div`
  @media (min-width: 786px) {
    margin: 0 5vw;
  }
`;

export const TopSpeeds = styled.div`
  margin-top: 3rem;
  
  @media (min-width: 786px) {
    display: flex;
  }
`;