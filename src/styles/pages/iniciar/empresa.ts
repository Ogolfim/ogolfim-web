import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    margin-top: 5rem;
    padding: 0 6vw 6rem;

    @media (min-width: 992px) {
      min-width: 50rem;
      padding: 0 6vw 9rem;
    }
  }

  .form > fieldset {
    border: none;
  }

  .form > fieldset:nth-child(1) > input {
    margin-top: 0.3rem;
  }

  .form > div {
    font-size: 0.9em;
    margin-left: 1rem;
    text-align: center;
    color: var(--color-error);
  }

  .form > button {
    margin-top: 2rem;
  }

  .form > fieldset:nth-child(1) > div {
    font-size: 0.8em;
    margin-left: 1rem;
    color: var(--color-error);
  }

  .form > fieldset + fieldset {
    margin-top: 3rem;

    @media (min-width: 786px) {
      margin-top: 5rem;
    }
  }

  .form > fieldset:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    margin-bottom: 1rem;

    @media (min-width: 576px) {
      gap: 2.3rem;
    }
  }

  .form > fieldset:nth-child(2) legend {
    margin-bottom: 1rem;
  }

  .form > fieldset:nth-child(2) label {
    width: 9rem;
    height: 1.6rem;
    border-radius: 1rem;
    cursor: pointer;
    background-color: var(--color-blue-transparent);
  }

  .form > fieldset:nth-child(2) label input {
    display: none;
  }

  .form > fieldset:nth-child(2) label div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
    
    transition: transform 0.3s;
  }

  input:checked + div {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`;
