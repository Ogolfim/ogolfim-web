import styled from 'styled-components';


export const Main = styled.main`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-bottom: 7rem;
  }

  @media (min-width: 1400px) {
    margin-bottom: 9rem;
  }
`;

export const Presence = styled.div`
  height: calc(100vh - 3.6rem);
  padding: 4rem 6vw;

  background-color: var(--color-primary);
  color: var(--color-white);
`;

export const PresenceMain = styled.div`
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TitleMobile = styled.h1`
  font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
  font-size: 1.5em;
  font-weight: normal;
  text-transform: capitalize;

  margin-top: 3rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TitleDesktop = styled.h1`
  font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
  font-size: 1.5em;
  font-weight: normal;
  text-transform: capitalize;

  margin-top: 3rem;

  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-right: 0.9rem;
  }

  @media (min-width: 992px) {
    max-width: 36rem;
    font-size: 1.9em;
  }

  @media (min-width: 1200px) {
    max-width: 39rem;
    margin-right: 1.3rem;
  }

  @media (min-width: 1400px) {
    font-size: 2.3em;
  }
`;

export const SoftwareAnimationContainer = styled.div`
  @media (min-width: 576px) {
    max-width: 30rem;
  }

  @media (min-width: 768px) {
    max-width: 23rem;
  }

  @media (min-width: 992px) {
    max-width: 30rem;
  }

  @media (min-width: 1400px) {
    max-width: 36rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;

  @media (min-width: 992px) {
    display: initial;
  }
`;

export const Worker = styled.div`
  width: 100%;
  padding: 0 6vw;
`;

export const WorkerHeader = styled.div`
  margin: 3rem 0;

  @media (min-width: 768px) {
    max-width: 50rem;
  }

  > h2 {
    font-size: 2.1em;
    margin-bottom: 0.3rem;

    @media (min-width: 768px) {
      font-size: 2.9em;
    }
  }
`;

export const WorkerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 9rem 0;

    > p {
      max-width: 33rem;
    }
  }

  @media (min-width: 1400px) {
    margin: 10rem 0;

    > p {
      max-width: 39rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 10rem;
  margin-top: 1rem;

  @media (min-width: 576px) {
    width: 16rem;
    margin-top: 3rem;
  }
`;

export const Start = styled.div`
  margin-top: 5rem;

  @media (min-width: 768px) {
    max-width: 50rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  > span {
    margin-bottom: 1.3rem;
  }

  > span h3 {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-weight: normal;
    font-size: 2em;

    margin-bottom: 0.3rem;

    @media (min-width: 768px) {
      margin-bottom: 0.6rem;
    }
  }
`;


