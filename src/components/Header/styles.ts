import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 3.6rem;

  /* background-color: var(--color-primary); */

  > div {
    width: 88%;
    height: 100%;
    margin: 0 6%;

    display: flex;
    align-items: center; 
    justify-content: space-between; 

    > nav {
      width: 100%;
      height: calc(50% - 5rem);
      position: absolute;
      top: 3.5rem;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--color-primary);

      z-index: 10;

      @media (min-width: 738px) {
        width: fit-content;
        height: 100%;
        position: unset;
        background-color: var(--color-white);

        z-index: 0;
      }
    }
  }
`;

export const LogoContainer = styled.div`
  > a {
    display: flex;
    flex: 1;
    align-items: center;
  }
  > a img {
    width: 7rem;
  }
`;

export const MenuToggleBar= styled.button`
  width: 33;
  height: 18;
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;

  outline: none;
  border: none;
  cursor: pointer;

  @media (min-width: 738px) {
    display: none;
  }
`;

export const Options = styled.ul`
  position: relative;

  @media (min-width: 738px) {
    display: flex;
  }
`;

export const Option = styled.li`
  list-style: none;
  line-height: 1.6;

  > a {
    text-decoration: none;
    color: var(--color-white);
    letter-spacing: 0.2em;

    > .left {
      padding-left: 0.5rem;
      padding-right: 0rem;

      transition: padding 0.5s ease-out;
    }
    
    > .right {
      padding-left: 0rem;
      padding-right: 0.5rem;

      transition: padding 0.5s ease-out;
    }
    
    &:hover {
      .left {
        padding-left: 0rem;
        padding-right: 0.5rem;
      }

      .right {
        padding-left: 0.5rem;
        padding-right: 0rem;
      } 
    }
  }
  @media (min-width: 738px) {
    margin-left: 2rem;
    letter-spacing: 0.2em;
    
    > a {
      color: var(--color-dark);
    }
  }
`;