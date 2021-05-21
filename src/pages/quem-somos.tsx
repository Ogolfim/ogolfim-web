import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import AOS from 'aos';
import 'aos/dist/aos.css';


import Footer from '../components/Footer'

import {
  Main,
  MainHeader,
  Background,
  Title,
  BackButton,
  Ogolfim,
  Section,
  Contain,
  MinContain,
  TrendingUpIconContainer,
  HowToRegIconContainer
} from '../styles/pages/quem-somos'
import { useRouter } from 'next/router'
import { BackIcon } from '../assets/icons'

import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined'
import HowToRegIcon from '@material-ui/icons/HowToReg'

const  QuemSomos: React.FC = () => {
  const [ aos, setAos ] = useState('fade-left');
  const router = useRouter()

  useEffect(() => {
    if(window.innerWidth > 768) 
    return setAos('fade-right')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        once: true, 
      })
    }, 0)
  }, [])
  
  return (
    <div>
      <Head>
        <meta name="robots" content="none" />
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
        <title>Sobre Ogolfim</title>
      </Head>

      <Main>
        <MainHeader>
          <Background>
            <img
              src='./big-data-background.svg' 
              alt="software Matola"
            />
          </Background>

          <Title>
            <span>
              Sobre Ogolfim
            </span>
          </Title>

          <BackButton
            onClick={router.back}
          >
            <span>
              <BackIcon />
            </span>
            voltar
          </BackButton>
        </MainHeader> 

        <Ogolfim>
          <span>
            Somos uma empresa de software Moçambicana, no mercado desde junho de 2020. O nosso objetivo transformar a forma como os nossos clientes trabalham nos seus negocios, colocando automação e simplificar as suas tarefas.
          </span>
        </Ogolfim>

        <Section>
          <Contain>
            <MinContain data-aos={aos}>
              <div>
                <h2>
                  Compromisso
                </h2>
                <p>
                  Usar a tecnologia para casos que realmente importam e ajudam desenvolvem a forma que trabalhamos.
                  A tecnologia pode ser a nossa maior distração, como  Ogolfim, a nossa primeira ação é descobrir se
                  realmente a tecnologia é necessária para a execução da determinada tarefa, colocar a tecnologia 
                  no lugar onde foi criada para ficar, que é facilitar a forma como trabalhamos e aumentar a nossa 
                  produtividade.
                </p>
              </div>
              <div>
                <HowToRegIconContainer>
                  <HowToRegIcon />
                </HowToRegIconContainer>
              </div>
            </MinContain>

            <MinContain data-aos='fade-left'>
              <div>
                <TrendingUpIconContainer>
                  <TrendingUpOutlinedIcon />
                </TrendingUpIconContainer>
              </div>

              <div>
                <h2>
                  O futuro performático
                </h2>
                <p>
                  Grande impacto na forma de vida e uma contribuição importante na lucratividade.
                </p>
                <p>
                  Criamos o futuro da tecnologia racional, com significado e focado nas necessidades 
                  das pessoas. A complementaridade da sustentabilidade e da digitalização irá produzir 
                  oportunidades incríveis e iniciara uma nova era de trabalho. Queremos fazer a diferença 
                  pela forma como os nossos produtos são usados pela sociedade.
                </p>
              </div>
            </MinContain>
          </Contain>
        </Section>
      </Main>

      <Footer />
    </div>
  )
}

export default QuemSomos