import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 13rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div:nth-child(1) {
    margin: 0 6vw;
  }

  > div:nth-child(1) > h2 {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.7em;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 786px) {
    margin-top: 16rem;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      text-align: center;
      max-width: 55rem;
    }

    > div:nth-child(1) > p {
      max-width: 43rem;
    }

    > div:nth-child(1) > h2 {
      font-size: 2.3em;
    }
  }
`;