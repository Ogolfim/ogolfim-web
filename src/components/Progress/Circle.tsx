import styled from 'styled-components';

interface Props {
  percentage: number
  animationDelay: number
}

const AnimationCircle = styled.circle<Props>`
  position: relative;
  transform: scale(0.943);
  transform-origin: center;
  fill: none;
  stroke: var(--color-blue-light);
  stroke-width: 2px;
  stroke-dasharray: 200px;
  stroke-dashoffset: 200px;

  animation-name: progress${Props => Props.percentage};
  animation-delay: ${Props => Props.animationDelay}s;
  animation-duration: ${Props => animationDuration(Props.percentage)}s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes progress${Props => Props.percentage} {
    0% {
      stroke-dashoffset: 200px;
    }
    100% {
      stroke-dashoffset: calc(200px - (200px * ${Props => Props.percentage}) / 100);
    }
  }
`;

export const animationDuration = (progressPercentage: number) => {
  const time = 3.6;
  return (time * progressPercentage) / 100;
}

const Circle: React.FC<Props> = ({percentage, animationDelay}) => {
  return(
    <AnimationCircle
      percentage={percentage}
      animationDelay={animationDelay}
      cx='50%'
      cy='50%'
      r="50.8%"
    ></AnimationCircle>
  )
}

export default Circle;