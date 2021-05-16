import React, { memo } from 'react';
import FooterGetStart from '../FooterGetStart';
import { Container } from './styles';


const EasyStart: React.FC = memo(() => (
  <Container>
    <div>
      <h2>
        Transforme os seus desafios mais 
        difíceis em impacto tangível
      </h2>
      <p>
        Ao reunir empresas ambiciosas e engenheiros talentosos com tecnologia, 
        estamos a fazer com que o futuro do trabalho chegue mais rápido
      </p>
    </div>
    <FooterGetStart />
  </Container>
))

export default EasyStart;