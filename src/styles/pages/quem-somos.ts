import styled from 'styled-components'


export const Main = styled.main`
  overflow: hidden;
`;

export const MainHeader = styled.div`

`;

export const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  background: var(--color-orange);

  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 17vw;

  color: var(--color-white);
  
  > span {
    width: 100%;
    display: inline-block;
    text-align: center;

    font-size: 1.4rem;
    letter-spacing: 0.02em;

    @media (min-width: 786px) {
      font-size: 2.3rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.6rem;
    }
  }
`;

export const BackButton = styled.button`
  width: 6rem;
  height: 1.8rem;
  position: absolute;
  top: 3vw;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  color: var(--color-white);

  font-size: 0.9em;

  > span {
    position: relative;

    animation-name: backButtonAnimate;
    animation-duration: 1.9s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    right: 0.7rem;
  }

  > span #backIcon {
    width: 0.7rem;
  }

  @keyframes backButtonAnimate {
    0% {
      right: 0.2rem;
    }

    70% {
      right: 0.5rem;
    }

    100% {
      right: 0.2rem;
    }
  }
`;

export const Ogolfim = styled.div`
  margin: 4rem 6vw 0;

  display: flex;
  justify-content: center;

  > span {
    max-width: 60rem;
    display: inline-block;

    font-size: 1.1em;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin: 6rem 0;

  @media (min-width: 768px) {
    margin: 10rem 0;
  }
`;

export const Contain = styled.div`
  margin: 0 6vw;

  &::before {
    content: '';
    position: absolute;
    left: 6%;
    height: 160vh;
    width: 0.23rem;
    background-color: black;

    @media (min-width: 360px) {
      height: 120%;
    }

    @media (min-width: 375px) {
      height: 110%;
    }

    @media (min-width: 411px) {
      height: 105%;
    }

    @media (min-width: 530px) {
      height: 90%;
    }

    @media (min-width: 768px) {
      height: 86%;
    }

    @media (min-width: 800px) {
      height: 70%;
    }

    @media (min-width: 992px) {
      height: 56%;
    }

    @media (min-width: 1200px) {
      height: 100%;
    }
  }

  > div:nth-child(1) {
    padding-top: 3rem;
  }

  @media (min-width: 768px) {
    margin: 0 9vw;
    
    &::before {
      left: 50%
    }

    > div + div {
      padding-top: 5rem
    }

    > div:nth-child(1) {
      padding-right: 6rem;
    }

    > div:nth-child(2) {
      padding-left: 6rem;
    }
  }
`;

export const MinContain = styled.div`
  padding-left: 2.5rem;

  > div > h2 {
    font-family: 'Hurme Geometric Sans 1 SemiBold', sans-serif;
    font-size: 1.9em;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
  }

  > div > p {
    line-height: 1.3em;
  }

  @media (min-width: 768px) {
    padding-left: 0;
    display: flex;

    > div {
      width: 50%;
    }

    > div > h2 {
      font-size: 2.3em;
    }
  }

  @media (min-width: 1200px) {
    > div > h2 {
      font-size: 2.5em;
    }
  }
`;

export const HowToRegIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.23rem solid black;
  border-radius: 50%;
  background-color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -119vw;
  left: calc(-6vw - 2.7rem);

  z-index: 1;

  @media (min-width: 360px) {
    top: -94vw;
    left: calc(-6vw - 2.63rem);
  }

  @media (min-width: 375px) {
    top: -91vw;
    left: calc(-6vw - 2.57rem);
  }

  @media (min-width: 411px) {
    top: -77vw;
    left: calc(-6vw - 2.4rem);
  }

  @media (min-width: 414px) {
    top: -77vw;
    left: calc(-6vw - 2.4rem);
  }

  @media (min-width: 530px) {
    top: -45vw;
    left: calc(-6vw - 2rem);
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -1.3rem;
    left: 1.1rem;
  }
`;

export const TrendingUpIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.23rem solid black;
  border-radius: 50%;
  background-color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  left: calc(-6vw - 2.7rem);
  top: 3vw;

  z-index: 1;

  @media (min-width: 360px) {
    left: calc(-6vw - 2.63rem);
  }

  @media (min-width: 375px) {
    left: calc(-6vw - 2.57rem);
  }

  @media (min-width: 411px) {
    left: calc(-6vw - 2.4rem);
  }

  @media (min-width: 414px) {
    left: calc(-6vw - 2.4rem);
  }

  @media (min-width: 530px) {
    left: calc(-6vw - 2rem);
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -2rem;
    left: calc(100% - 4.93rem);
  }
`;