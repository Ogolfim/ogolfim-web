import React from 'react';
import { Container } from './styles';

interface Props {
  leftText: string
  rightText: string
}

const BottomSpeeds: React.FC<Props> = ({leftText, rightText}) => (
  <Container>
    <p>{leftText}</p>
    <p>{rightText}</p>
  </Container>
)

export default BottomSpeeds;