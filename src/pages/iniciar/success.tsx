import React from 'react'
import Head from 'next/head'

import SoftwareAnimation from '../../assets/animations/Software';
import Header from '../../components/Header';
import { Main } from '../../styles/pages/iniciar/success';

const  IniciarSuccess: React.FC = () => {

  return (
    <div>
      <Head>
        <meta name="title" content="Usamos Softwares A Seu Favor" />
        <meta name="robots" content="none" />
        <meta
          name="description"
          content="Construimos software que acompanha o seu 
            negocio a longo prazo. Transforme os seuss
            desafios mais défices em impacto tangível"
        />
        <meta 
          name="keywords" 
          content="
          software, softwares, api, apis, automação, Ogolfim, internet, negócio, negócios, web, programador, programadores
          "
        />
        <title>Ogolfim - Ligue-nos</title>
      </Head>

      <Header />   

      <Main>
        <div>
          <h2>
            Moldando o futuro da tecnologia
          </h2>
          <p>Abra a sua caixa de email, enviamos um email.</p>
          <div>
            <SoftwareAnimation />
          </div>
        </div>
      </Main>
    </div>
  )
}

export default IniciarSuccess