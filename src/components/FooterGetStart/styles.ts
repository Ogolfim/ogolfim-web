import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 7rem;
  padding: 2rem 6vw;

  background-color: var(--color-primary);
  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h3 {
    margin-bottom: 0.9rem;
    font-size: 1.6rem;
  }

  > p {
    margin-bottom: 1.3rem;
  }

  @media (min-width: 786px) {
    margin-top: 12rem;

    > h3 {
      font-size: 2.3em;
    }

    > p {
      max-width: 43rem;
      margin-bottom: 1rem;
    }
  }
`;