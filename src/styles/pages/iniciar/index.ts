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

  .form > fieldset + fieldset {
    margin-top: 3rem;
  }
`;


export const RadiosContainer = styled.fieldset`
  > label {
    display: flex;
    align-items: center;
    margin-bottom: 0.9rem;

    cursor: pointer;
  }

  > label > input {
    display: none;
  }

  > label > div {
    width: 1.25em;
    height: 1.25em;

    border: 2px solid var(--color-primary);
    border-radius: 50%;
    margin-right: 1rem;

    box-sizing: border-box;
    padding: 0.2rem;
  }

  > label > div::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--color-primary);
    border-radius: 50%;

    transform: scale(0);
    transition: transform 0.3s;
  }

  input:checked + div::after {
    transform: scale(1);
  }
`;

export const PersonInfo = styled.fieldset`
  > label {
    display: none;
  }

  > span {
    font-size: 0.8em;
    margin-left: 1rem;
    color: var(--color-error);
  }
`;