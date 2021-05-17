import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { DataContext } from '../../contexts'

import Button from '../../components/SubmitButton/styles';
import { Main, RadiosContainer, PersonInfo } from '../../styles/pages/iniciar';
import validator from '../../formValidators/iniciar';
import api from '../api';

interface FormData {
  name: string
  phone: string
  email: string
}


const  Start: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const router = useRouter();
  const [ service, setService ] = useState('Criar software');

  const formSubmit = (form: FormData)  => {
    api.post('/client', {
      ...form,
      service,
    })
    .then(response => {

      setData({...data, token: response.data.token});

      router.push('/iniciar/empresa')
    })
    .catch(error => {
      router.push('/iniciar');
    })
  }

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
        <title>Ogolfim</title>
      </Head>

      <Header />      

      <Main>

        <Formik
          initialValues={{ name: '', email: '', phone: ''}}
          validationSchema={validator}
          onSubmit={(values) => {
            formSubmit(values);
          }}
        >
          <Form className="form">
            <RadiosContainer>
              <label htmlFor="criar">
                <input 
                  type="radio" 
                  id="criar" 
                  checked={service === 'Criar software'} 
                  name="service" 
                  value="Criar software"
                  onChange={e => setService(e.target.value)}
                />
                <div></div>
                Quero criar software do zero
              </label>

              <label htmlFor="otimizar">
                <input 
                  type="radio" 
                  id="otimizar" 
                  checked={service === 'Otimizar software'} 
                  name="service" 
                  value="Otimizar software" 
                  onChange={e => setService(e.target.value)}
                />
                <div></div>
                Já tenho software. Quero só otimizar
              </label>

              <label htmlFor="novas-funcionalidades">
                <input 
                  type="radio" 
                  id="novas-funcionalidades" 
                  name="service" 
                  value="Adicionar novas funcionalidades software" 
                  checked={service === 'Adicionar novas funcionalidades software'}
                  onChange={e => setService(e.target.value)}
                />
                <div></div>
                Já tenho software. Quero adicionar novas funcionalidades
              </label>
            </RadiosContainer>

            <PersonInfo>
              <label htmlFor="name">Seu nome</label>
              <Field name="name" type="text" placeholder="Seu nome" />
              <ErrorMessage component="span" name="name" />

              <label htmlFor="phone">Telefone</label>
              <Field name="phone" type="tel" placeholder="Telefone" />
              <ErrorMessage component="span" name="phone" />

              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage component="span" name="email" />
            </PersonInfo>

            <Button type="submit">
              Enviar
            </Button>
          </Form>
        </Formik>
      </Main>

      <Footer />
    </div>
  )
}

export default Start;