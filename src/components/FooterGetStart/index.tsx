import React, { memo } from 'react';
import Button from '../NavButton';
import { Container } from './styles';


const FooterGetStart: React.FC = memo(() => (
  <Container>
    <h3>
      Fácil iniciar
    </h3>
    <p>
      Pague enquanto esta escalando sem esforço. Transforme os seus desafios 
      mais difíceis em impacto tangível do negócio.
    </p>
    <Button
      text="Iniciar Agora"
      url="/iniciar"
      useClipPath={false}
    />
  </Container>
))

export default FooterGetStart;