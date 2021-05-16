import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: .6rem;
  
  align-items: center;
  flex-direction: column;
  color: var(--color-white);
`;

export const Text = styled.div`
  opacity: 0.8;
`;

export const Bar = styled.div`
  width: 3.9rem;
  height: 3.9rem;
 
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1.3px solid rgba(0, 231, 195, 0.3);
  
  position: relative;
`;

export const SVG = styled.svg`
  width: 3.9rem;
  height: 3.9rem;
`;

export const Percentage = styled.span`
  position: absolute;
  font-size: 1.6em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > span:nth-child(1) {
    font-size: 0.9em;
  }

  > span:nth-child(2) {
    font-size: 0.4em;
  }
`;

