import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterGetStart from '../components/FooterGetStart'
import Robot from '../assets/animations/Robot'
import { 
  Main, 
  Contain, 
  RobotContainer,
  RobotContainerOnMobile
} from '../styles/pages/software-revolucionario'

const  Revolucionario: React.FC = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="index" />
        <meta name="title" content="Usamos Softwares A Seu Favor" />
        <meta
          name="description"
          content="Construimos software que acompanha o seu 
          negocio a longo prazo. Transforme os seuss
          desafios mais défices em impacto tangível"
        />
        <meta 
          name="keywords" 
          content="
          software, softwares, automation, OGolfim, ogolfim, website, websites, internet, negócio, negócios, web, programador, programadores, copywriting
          "
        />
        <title>Ogolfim - Software Revolucionário</title>
      </Head>

      <Header />      

      <Main>
        <Contain>
          <RobotContainerOnMobile>
            <Robot />
          </RobotContainerOnMobile>
          <h1>
            Vamos transformar a tecnologia a seu favor. Liga-nos retornamos com um plano
          </h1>
          <p>
            Trazemos a melhor equipe para trabalhar somente no seu projeto. 
            Sempre trabalhamos no que tem maior valor para o seu negocio. 
            Passamos tempo a aprender verdadeiramente o seu negócio, isto garante 
            gerar a melhor solução para o seu problema.
          </p>
          <span>
            Contacto: +258 852192413
          </span>
        </Contain>
        <RobotContainer>
          <Robot />
        </RobotContainer>
      </Main>

      <FooterGetStart />

      <Footer />
    </div>
  )
}

export default Revolucionario