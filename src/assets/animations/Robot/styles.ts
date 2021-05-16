import styled from 'styled-components';

export const Container = styled.div`
  > svg #robot-container #robot {
    animation-name: robotUpDown;
    animation-delay: 0s;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes robotUpDown {
    0% {
      transform: translateY(0)
    }

    50% {
      transform: translateY(-30px)
    }

    100% {
      transform: translateY(0)
    }
  }
`;