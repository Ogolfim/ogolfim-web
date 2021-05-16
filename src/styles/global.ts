import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-white);
  color: var(--color-dark);
  font-size: 1em;
  font-family: 'Hurme Geometric Sans 1', sans-serif;
  letter-spacing: 0.02em;
}



h1, h2, h3, h4 {
  font-family: 'Hurme Geometric Sans 1 Black', sans-serif;
}

button {
  font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
}

input {
  width: 100%;
  height: 2.3rem;
  padding: 0 0.9rem;
  margin-top: 1rem; 
}

textarea {
  width: 100%;
  height: 8.3rem;
  padding: 0.9rem;
}

input,
textarea {
  border: none;
  border-radius: 1rem;
  outline: 0;

  background-color: var(--color-blue-transparent);

  &::placeholder {
    font-family: 'Hurme Geometric Sans 1', sans-serif;
    color: var(--color-dark);
  }
}

:root { 
    --color-white: #fff;
    --color-dark: #000;
    --color-primary: #000624;
    --color-blue: #15233E;
    --color-blue-transparent: rgba(21,35,62,0.4);
    --color-blue-light: #00E7C3;
    --color-orange: orange;
    
    --color-error: #dc3545;
    --color-success: #198754;
  }
`;