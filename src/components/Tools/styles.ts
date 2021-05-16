import styled from 'styled-components';


export const Container = styled.div`
  padding: 0 6vw;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div:nth-child(1) {
    width: 100%;
    height: 6rem;
    margin-bottom: 3rem;

    > svg {
      width: 100%;
      height: 100%;
    }
  }

  > div:nth-child(2) {
    max-width: 40rem;

    > h4 {
      font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
      font-size: 1.7em;
      margin-bottom: 0.8rem;
    }
  }

  @media (min-width: 786px) {
    flex-direction: initial;
    justify-content: center;
    margin: 10rem 6vw 0;

    > div:nth-child(2) {
      height: 13rem;
      width: 100%;
    }

    > div:nth-child(2) > h4 {
        font-size: 2.3em;
        margin-bottom: 0.8rem;
    }

    > div:nth-child(2) > p {
      max-width: 30rem;
    }
  }
`;