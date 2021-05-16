import styled from 'styled-components';


export const Container = styled.div`
  max-width: 26rem;

  border-radius: 1rem;
  margin: 1.3rem 2rem;
  padding: 2rem 1.9rem;

  background-color: var(--color-blue-transparent);
  color: var(--color-white);

  > p {
    margin-bottom: 0.9rem;
    opacity: 0.9;
  }

  @media (min-width: 786px) {
    max-width: 60rem;
    display: flex;

    > p {
      margin: 0 0.9rem;
    }
  }

  margin-bottom: 3rem;
`;