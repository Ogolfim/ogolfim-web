import React, { memo, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterGetStart from '../FooterGetStart';
import { Container } from './styles';


const EasyStart: React.FC = memo(() => {
  
    useEffect(() => {
      setTimeout(() => {
        AOS.init({
          once: true, 
        })
      }, 0)
    }, [])

 return (
    <Container>
      <div>
        <h2>
          Transforme os seus desafios mais 
          difíceis em impacto tangível
        </h2>
        <p data-aos='fade-up-right'>
          Ao reunir empresas ambiciosas e engenheiros talentosos com tecnologia, 
          estamos a fazer com que o futuro do trabalho chegue mais rápido
        </p>
      </div>
      <FooterGetStart />
    </Container>
  )
})

export default EasyStart;