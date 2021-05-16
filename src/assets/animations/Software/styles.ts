import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  > svg {
    width: 70em;
  }

  > svg #brain-bottom {
    animation-name: brainBottomRight;
    animation-duration: 5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  @keyframes brainBottomRight {
    0% {
      transform: translateY(0)
    }

    50% {
      transform: translateY(7px)
    }

    100% {
      transform: translateY(0)
    }
  }
`;   