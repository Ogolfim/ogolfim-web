import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 3.6rem);

  display: flex;
  justify-content: center;
  padding: 0 6vw;

  background-color: var(--color-primary);

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--color-white);
  }

  > div h2 {
    font-weight: normal;
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.6em;
    margin-bottom: 0.3rem;

    @media (min-width: 992px) {
      font-size: 1.9em;
    }
  }

  > div > div {
    width: 9rem;
    margin-top: 6rem;

    @media (min-width: 992px) {
      width: 13rem;
    }
  }
`;