import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

export const Contain = styled.div`
  margin: 3rem 6vw 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 6rem 6vw 13rem;
  }


  .form {
    max-width: 50rem;
    margin-top: 6rem;

    @media (min-width: 992px) {
      min-width: 43rem;
    }
  }

  .form > fieldset {
    border: none;
  }

  .form > fieldset > label {
    display: none;
  }

  .form > fieldset > span {
    font-size: 0.8em;
    margin-left: 1rem;
    color: var(--color-error);
  }

  .form > button {
    background-color: var(--color-blue-light);
  }

  .form > fieldset textarea,
  .form > fieldset input {
    height: 2.6rem;
    color: var(--color-white);
    
    &::placeholder {
      color: var(--color-white);
    }
  }

  .form > fieldset + fieldset {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .form > fieldset > legend {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.1em;
    margin-bottom: 0.6rem;
  }

  .form > fieldset > textarea {
    width: 100%;
    height: 8.3rem;
    padding: 0.9rem;
    
    border: none;
    border-radius: 1rem;
    outline: 0;
    
    background-color: var(--color-blue-transparent);
  }
`;

export const RobotContainer = styled.div`
  width: 13rem;

  @media (min-width: 768px) {
    width: 29rem;
  }
`;

export const MainHeader = styled.div`
  max-width: 80rem;
  height: calc(100vh - 3.6rem);

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: initial;

    height: fit-content;
  }
`;


export const TextMobile = styled.div`
  margin: 3rem 0 0;

  > h1 {
    font-size: 1.5em;
    text-transform: capitalize;
    margin-bottom: 0.7rem;
  }

  > p {
    font-size: 0.9em;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;


export const TextDesktop = styled.div`
  padding-right: 3rem;
  display: none;

  > h1 {
    font-size: 1.6em;
    text-transform: capitalize;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 992px) {
    padding-right: 6rem;

    > h1 {
      font-size: 1.9em;
      text-transform: capitalize;
      margin-bottom: 1.6rem;
    }
  }
`;


