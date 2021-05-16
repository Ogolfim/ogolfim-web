import styled from 'styled-components';

export const Container = styled.footer`
  padding: 6vw;
  background-color: var(--color-primary);
  color: var(--color-white);

  @media (min-width: 786px) {
    display: flex;
    justify-content: space-between;

    padding: 2rem 6vw;
  }

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 0.3rem;

    @media (min-width: 786px) {
      > p, > span {
        margin: .3rem;
      }
    }
  }

  > div:nth-child(1) > p {
    display: none;

    @media (min-width: 786px) {
      display: block;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > div:nth-child(2) > a {
    width: 100%;
    text-align: center;
    padding: 0.9rem;
    margin: 1rem 0;

    border-radius: 1rem;
    background-color: var(--color-blue-transparent);
    color: var(--color-orange);
  }

  > div:nth-child(2) > a:hover {
    opacity: 0.9;
  }

  > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > div:nth-child(3) > a {
    width: 100%;
    text-align: center;
    padding: 0.9rem;
    margin: 1rem 0;

    border-radius: 1rem;
    background-color: var(--color-blue-transparent);
    color: var(--color-orange);
  }

  > div:nth-child(3) > a:hover {
    opacity: 0.9;
  }

  > div:nth-child(3) > span {
    font-size: 0.8em;
  }
`;