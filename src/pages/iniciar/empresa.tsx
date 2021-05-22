import React, { useContext, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { DataContext } from '../../contexts'

import Button from '../../components/SubmitButton/styles'
import { Main } from '../../styles/pages/iniciar/empresa'
import validator from '../../formValidators/iniciar/empresa'

import axios from 'axios'

interface FormData {
  companyName: string
  website: string
  employees: string
}


const  Empresa: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const router = useRouter();

  const api = useRef(axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "authorization": `beerer ${data?.token}`
    }
  }))

  const formSubmit = (form: FormData)  => {
    api.current.post('/client', form)
    .then(response => {
      
      setData({...data, token: response.data.token})
      
      router.push('/iniciar/call')
    })
    .catch(error => {
      
      router.push('/iniciar')
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
          initialValues={{companyName: '', website: '', employees: ''}}
          validationSchema={validator}
          onSubmit={(values) => {
            formSubmit(values)
          }}
          >
            <Form className="form">
              <fieldset>
                <label htmlFor="companyName">Nome da Empresa</label>
                <Field name="companyName" type="text" />
                <ErrorMessage component="div" name="companyName" />

                <br/><br/>
                <label htmlFor="website">
                  Website da empresa (se não tiver deixa em branco)
                </label>
                <Field name="website" type="url" placeholder="Link do website" />
                <ErrorMessage component="div" name="website" />
              </fieldset>

              <fieldset>
                <legend>Número atual de empregados na sua empresa</legend>

                <label>
                  <Field name="employees" type="radio" value="<=5"  />
                  <div>5 ou menos</div>
                </label>

                <label>
                  <Field name="employees" type="radio" value="<=15"  />
                  <div>15 ou menos</div>
                </label>

                <label>
                  <Field name="employees" type="radio" value="<=50"  />
                  <div>50 ou menos</div>
                </label>
                <label>
                  <Field name="employees" type="radio" value="<=100"  />
                  <div>100 ou menos</div>
                </label>
                <label>
                  <Field name="employees" type="radio" value="<=500"  />
                  <div>500 ou menos</div>
                </label>
                <label>
                  <Field name="employees" type="radio" value=">500"  />
                  <div>Mais de 500</div>
                </label>
              </fieldset>
              <ErrorMessage component="div" name="employees" />

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

export default Empresa