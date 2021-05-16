import styled from 'styled-components';

export const Container = styled.div`
  max-width: 26rem;

  border-radius: 1rem;
  margin: 1.3rem 2rem;
  padding: 2rem 1.9rem;

  background-color: var(--color-blue-transparent);
  color: var(--color-white);

  > svg {
    width: 3.9rem;
    height: 2.8rem;
    margin-bottom: 0.8rem;
  }

  > h2 {
    font-size: 1.3em;
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    margin-bottom: 0.6rem;
  }

  > p {
    opacity: 0.9;
    margin-bottom: 0.6rem;
  }

  > a {
    color: var(--color-orange);

    &:hover {
      opacity: 0.9;
    }
  }
`;