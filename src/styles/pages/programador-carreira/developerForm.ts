import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem 6vw 6rem;

  @media (min-width: 768px) {
    margin: 6rem 6vw 13rem;
  }

  .form {
    max-width: 30rem;

    @media (min-width: 992px) {
      min-width: 50rem;
    }
  }

  .form > fieldset {
    border: none;
  }

  .form > fieldset > legend {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.9em;
    margin-bottom: 3rem;
  }

  .form > fieldset label {
    font-size: 1.1em;
    margin-top: 1rem;
    display: block;
  }

  .form > fieldset > span {
    font-size: 0.8em;
    margin-left: 1rem;
    color: var(--color-error);
  }

  .form > fieldset input,
  .form > fieldset textarea {
    margin-bottom: 0.3rem;
  }

  .form > fieldset #cv {
    padding: 0;
    cursor: pointer;
  }

  .form > fieldset #cv::file-selector-button,
  .form > fieldset #cv::-webkit-file-upload-button {
    padding: 0.79em 1.3rem;
    background-color: var(--color-blue);
    color: var(--color-white);
    border: none;
    border-radius: 6rem;
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 2.3rem;
  padding: 0 0.9rem;
  margin: 0.3rem 0; 

  border: none;
  border-radius: 1rem;
  outline: none;

  padding: 0 0.9rem;
  background-color: var(--color-blue-transparent);
`;