import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {
  Main,
  Form 
} from '../../styles/pages/programador-carreira'

const  Developer: React.FC = () => {
  return (
    <div>
      <Head>
        <meta name="title" content="Emprego para programador" />
        <meta name="robots" content="index" />
        <meta
          name="description"
          content="Faça parte da equipa Ogolfim, vejá as vagas existentes"
        />
        <meta 
          name="keywords"
          content="
            software, softwares, automation, OGolfim, ogolfim, website, websites, internet, negócio, negócios, web, programador, programadores, copywriting
          "
        />
        <title>Ogolfim - Programador</title>
      </Head>

      <Header />      

      <Main>
        <h2>
          Cultura de colaboração
        </h2>
        <p>
          Os nossos projetos e negócios são impulsionados por um objetivo 
          unificador - ajudar uns aos outros 
          a vencer nossos desafios e alcançar grandes ambições.
        </p>
        <p>
          Faça parte da equipa OGolfim, vejá as vagas existentes a baixo.
        </p>
        <Form>
          <div>
            <Link 
              href="/programador-carreira/Desenvolvedor Fullstack - Javascript, Typescript E Node.js"
            >
              <a>
                 Desenvolvedor Fullstack - Javascript, Typescript E Node.js
              </a>
            </Link>
          </div>
          <div>
            <Link 
              href="/programador-carreira/Desenvolvedor Frontend - React.js" 
            >
              <a>
                Desenvolvedor Frontend - React.js
              </a>
            </Link>
          </div>
          <div>
            <Link 
              href="/programador-carreira/Desenvolvedor Backend - Node.js"  
            >
              <a>
                Desenvolvedor Backend - Node.js
              </a>
            </Link>
          </div>
          <div>
            <Link 
              href="/programador-carreira/Graphic Designer - UI E UX" 
            >
              <a>
                Graphic Designer - UI E UX
              </a>
            </Link>
          </div>
        </Form>
      </Main>

      <Footer />
    </div>
  )
}

export default Developer;