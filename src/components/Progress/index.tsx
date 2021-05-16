import { useCallback, useEffect, useRef, useState } from 'react';
import Circle from './Circle';
import { 
  Container,
  Bar,
  Percentage,
  SVG,
  Text
} from './styles';

interface Props {
  percentage: number
  text: string
  animationDelay: number
}

const Progress = ({percentage, text, animationDelay}: Props) => {
  const [ spanElement, setSpanElement ] = useState(<span>0</span>)
  const spanRef = useRef<HTMLSpanElement>(null);
  let counter = 0;
  
  const renderPercentage = useCallback(() => {
    if(spanRef.current) {
      counter++;
      spanRef.current.textContent = String(counter);
    }
  }, [counter])
  
  
  useEffect(() => {
    let isMounted = true;
    const percentageRenderHandler = async () => {
      setTimeout(() => {
        setSpanElement(<span ref={spanRef}>0</span>)
      }, animationDelay * 1000)
    }
    
    percentageRenderHandler().then(() => {
      if (isMounted) {
        setInterval(() => {
        
          if(counter === percentage) return clearInterval();
          
          renderPercentage();
          
        }, (30 * percentage) / 100)
      }
    })

    return () => { isMounted = false };
  }, [animationDelay, counter, percentage, renderPercentage])

  return (
    <Container>
      <Bar>
        <SVG>
          <Circle percentage={percentage} animationDelay={animationDelay} />
        </SVG>
        <Percentage>
          {spanElement}
          <span>%</span>
        </Percentage>
      </Bar>
      <Text>{text}</Text>
    </Container>
    )
  };
  
  
  export default Progress; 