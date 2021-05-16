import styled from 'styled-components';

export const Container = styled.div`
  width: 11.6rem;
  height: 2.1rem;
  border: 2px solid var(--color-blue-light);

  cursor: pointer;
  position: relative;


  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    text-decoration: none;
    
    color: var(--color-dark);
    background-color: transparent;
  }

  > span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0rem;
    background: var(--color-blue-light);
      
    clip-path: circle(0% at 100% 0%);
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover > span {
    clip-path: circle(143% at 100% 0%);
  }
`;