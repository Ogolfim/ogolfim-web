import styled from 'styled-components';


const Button = styled.button`
  width: 100%;
  height: 2.3rem;
  padding: 0 0.9rem;

  border: none;
  border-radius: 1rem;
  outline: 0;

  font-size: 1.1em;
  margin-top: 1rem;
  color: var(--color-white);
  background-color: var(--color-primary);

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;