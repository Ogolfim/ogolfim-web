import styled from 'styled-components';


export const Main = styled.main`
  margin: 3rem 6vw 6rem;

  @media (min-width: 768px) {
    margin: 6rem 6vw 9rem;
  }
  
  > h2 {
    font-size: 3em;
    margin-bottom: 0.3rem;
  }
`;

export const Form = styled.form`
  margin-top: 6rem;

  @media (min-width: 768px) {
    margin-top: 9rem;
  }

  > div {
    margin-bottom: 1.3rem;
  }

  > div a {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1em;

    @media (min-width: 768px) {
      font-size: 1.3em;
    }

    @media (min-width: 1400px) {
      font-size: 1.6em;
    }
  }
`;