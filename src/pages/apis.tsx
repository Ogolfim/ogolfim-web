import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import APICircles from '../assets/animations/APICircles'
import SoftwareAnimation from '../assets/animations/Software'
import Button from '../components/NavButton'


import {
  Main,
  Presence, 
  PresenceMain,
  TitleDesktop,
  TitleMobile,
  Worker,
  ButtonContainer,
  SoftwareAnimationContainer,
  WorkerHeader,
  WorkerMain,
  ImageContainer,
  Start
} from '../styles/pages/apis'

const  Apis: React.FC = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="index" />
        <meta name="title" content="Use nossas APIs para fácil e melhor gerência dos seu negócios" />
        <meta
          name="description"
          content="APIs personalizadas. Ferramentas e plataformas que colocam você no 
          control do seu negócio em tempo real. Faça integração no seu site, app ou sistema."
        />
        <meta 
          name="keywords" 
          content="
          software, softwares, api, apis, automação, Ogolfim, internet, negócio, negócios, web, programador, programadores
          "
        />
        <title>Ogolfim - Automação</title>
      </Head>

      <Header />      

      <Main>
        <Presence>
          <PresenceMain>
            <TitleDesktop>
              Use nossas APIs para fácil e melhor gerência dos seu 
              negócios
            </TitleDesktop>
            <SoftwareAnimationContainer>
              <SoftwareAnimation />
            </SoftwareAnimationContainer>
            <TitleMobile>
              Use nossas APIs para fácil e melhor gerência dos seu 
              negócios
            </TitleMobile>
          </PresenceMain>

          <ButtonContainer>
            <Button
              text="Iniciar agora"
              useClipPath={false}
              url="/iniciar"
            />
          </ButtonContainer>
        </Presence>
        <Worker>
          <WorkerHeader>
            <h2>
              Qualquer indústria.
              Qualquer desafio
            </h2>
            <p>
              Diga-nos as suas necessidades e 
              construimos as soluções ideais para o seu negocio.
            </p>
          </WorkerHeader>
          <WorkerMain>
            <p>
              APIs personalizadas. Ferramentas e plataformas que colocam você no 
              control do seu negócio em tempo real. Faça integração no seu site, app ou sistema.
            </p>
            <ImageContainer>
              <APICircles />
            </ImageContainer>
          </WorkerMain>
          <Start>
            <span>
              <h3>Inicie Agora</h3>
              <p>
                Pague enquanto esta escalando sem esforço. 
                Transforme os seus desafios mais difíceis em impacto tangível do negócio.
              </p>
            </span>
            <ButtonContainer>
              <Button
                text="Iniciar agora"
                useClipPath={true}
                url="/iniciar"
              />
            </ButtonContainer>
          </Start>
        </Worker>
      </Main>

      <Footer />
    </div>
  )
}

export default Apis;