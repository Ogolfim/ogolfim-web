import React from 'react'
import Head from 'next/head'
import { RocketIcon, PerformIcon } from '../assets/icons'

import Header from '../components/Header'
import Footer from '../components/Footer'
import NavButton from '../components/NavButton'
import Progress from '../components/Progress'
import Speed from '../components/Speed'
import BottomSpeeds from '../components/BottomSpeeds'
import Tools from '../components/Tools'
import EasyStart from '../components/EasyStart'

import {
  Main,
  Presence,
  Worker,
  WorkerSteps,
  WorkerMain,
  TopSpeeds
} from '../styles/pages/home'

const  Home: React.FC = () => {
  return (
    <div>
      <Head>
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
        <title>Ogolfim</title>
      </Head>

      <Header />      

      <Main>
        <Presence>
          <h1>
            Usamos Softwares A Seu Favor
          </h1>
          <p>
            Adaptamos o seu negocio com grande potencial à revolução digital.
            Vamos além para criar a solução ideal que corresponda às suas necessidades únicas.
          </p>
          <NavButton
            text="Iniciar agora"
            url="/criar-meu-software"
            useClipPath={true}
          />
        </Presence>
        <Worker>
          <WorkerSteps>
            <Progress
              percentage={100}
              text="Design"
              animationDelay={0}
            />
            <Progress
              percentage={100}
              text="Desenvolvimento"
              animationDelay={2}
            />
            <Progress
              percentage={100}
              text="Testes"
              animationDelay={5}
            />
            <Progress
              percentage={100}
              text="Entrega"
              animationDelay={7}
            />
            <Progress
              percentage={100}
              text="Manutenção"
              animationDelay={10}
            />
          </WorkerSteps>
          <WorkerMain>
            <TopSpeeds>
              <Speed
                Icon={PerformIcon}
                title="Construa mais rápido que nunca"
                bodyText="
                  Construimos software que acompanhe o seu
                  negócio a longo prazo. Transformar os seus
                  desafios mais difíceis em impacto tangível é a
                  nossa ambição. Estamos aqui para ajudá-lo a
                  mover-se mais rápido.
                "
                linkText="Entre em contacto"
                url="/ligue-nos"
              />
              <Speed
                Icon={RocketIcon}
                title="Revolucionário, mas rocha sólida"
                bodyText="
                  Sejá colocando um produto completamente novo,
                  modernizando sua tecnologia principal ou apoiando
                  a sua equipe de tecnologia. Ideias revolucionarias
                  precisam de software sólido. Nós fazemos dar certo.
                "
                linkText="Diga-me mais"
                url="/software-revolucionário-saber-mais"
              />
            </TopSpeeds>
            <BottomSpeeds
              leftText="
                Os teus objetivos tornam-se os nossos objetivos.
                Passamos tempo a aprender verdadeiramente o seu
                negócio, e mais importante, as suas ambições. Isto
                garante gerar a melhor solução no nosso caminho
                para o sucesso.
              "
              rightText="
                Uma vez o software em produção, o nosso trabalho
                não para. Apoiamos as suas ambições em tempo real
                e continuamos interagindo. Construímos as funcionalidades
                de que realmente precisa, para criar o impacto que deseja.
              "
            />
          </WorkerMain>
        </Worker>

        <Tools />

        <EasyStart />

      </Main>

      <Footer />
    </div>
  )
}

export default Home;