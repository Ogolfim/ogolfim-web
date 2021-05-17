import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Robot from '../../assets/animations/Robot'

import {
  Main,
  Contain, 
  RobotContainer,
  MainHeader,
  TextDesktop,
  TextMobile
} from '../../styles/pages/contacts'

import Button from '../../components/SubmitButton/styles'

import validator from '../../formValidators/contactsForm'
import api from '../api';
import { DataContext } from '../../contexts'

interface FormData {
  name: string
  companyName: string
  email: string
  phone: string
  message: string
}

const  Contacts: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const router = useRouter()
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  

  const formSubmit = (form: FormData)  => {
    api.post('/help', form)
    .then(response => {

      setData({...data, user: {name: form.name}})
      
      setIsSubmitting(false)
      router.push('/contacts/success')
    })
    .catch(error => {
      setIsSubmitting(false)
    })
  }

  return (
    <div>
      <Head>
        <meta name="title" content="Usamos Softwares A Seu Favor" />
        <meta name="robots" content="index" />
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
        <Contain>
          <MainHeader>
            <TextDesktop>
              <h1>
                Transforme a tecnologia a seu favor. Liga-nos retornamos com um plano
              </h1>
              <p>
                Somos OGolfim. Transformamos os seus desafios mais difíceis em impacto tangível do negócio.
              </p>
            </TextDesktop>
            <RobotContainer>
              <Robot />
            </RobotContainer>
            <TextMobile>
              <h1>
                Transforme a tecnologia a seu favor. Liga-nos retornamos com um plano
              </h1>
              <p>
                Somos OGolfim. Transformamos os seus desafios mais difíceis em impacto tangível do negócio.
              </p>
            </TextMobile>
          </MainHeader>

          <Formik
            initialValues={{ name: '', companyName: '', email: '', message: '', phone: ''}}
            validationSchema={validator}
            onSubmit={(values) => {
              setIsSubmitting(true)
              formSubmit(values);
            }}
          >
            <Form className="form">
              <fieldset>
                <legend>Fale-nos sobre você</legend>

                <label htmlFor="companyName">First Name</label>
                <Field name="companyName" type="text" placeholder="Nome da empresa" />
                <ErrorMessage component="span" name="companyName" />
        
                <label htmlFor="name">Seu nome</label>
                <Field name="name" type="text" placeholder="Seu nome" />
                <ErrorMessage component="span" name="name" />
        
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage component="span" name="email" />

                <label htmlFor="phone">Telefone</label>
                <Field name="phone" type="tel" placeholder="Telefone" />
                <ErrorMessage component="span" name="phone" />
              </fieldset>

              <fieldset>
                <legend>No que podemos ajudar?</legend>
                <label htmlFor="message">No que podemos ajudar?</label>
                <Field name="message" as="textarea" />
                <ErrorMessage component="span" name="message" />
              </fieldset>
      
              <Button type="submit">
                {isSubmitting ? 'Enviando' : 'Enviar' }  
              </Button> 
            </Form>
          </Formik>
        </Contain>
      </Main>

      <Footer />
    </div>
  )
}

export default Contacts;