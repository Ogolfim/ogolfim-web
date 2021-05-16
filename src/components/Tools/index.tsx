import React from 'react';
import { Container } from './styles';

import ToolsImage from '../../assets/images/tools';


const Tools = () => (
  <Container>
    <div>
      <ToolsImage/>
    </div>
    <div>
      <h4>Ferramentas e habilidades</h4>
      <p>
        Escrever código é uma embarcação complexa. Colocamos
        o melhor ambiente e ferramentas a nossos desenvolveres
        para a melhor experiência e caminharmos a uma melhor 
        base de código.
      </p>
    </div>
  </Container>
)

export default Tools;