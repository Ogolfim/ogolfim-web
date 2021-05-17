import React, { useCallback, useState } from 'react'
import { Districts, Province, Role } from 'ogolfim'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/SubmitButton/styles';


import {
  Main,
  Select
} from '../../styles/pages/programador-carreira/developerForm'

import validator from '../../formValidators/developerForm'
import { GetStaticPaths, GetStaticProps } from 'next'
import api from '../api'

interface FormData {
  name: string 
  email: string 
  phone: string
  bairro: string
  portfolio: string
  experience: string
  yoe: number
}

interface Props {
  provinces: Province[],
  role: string
}


const  DeveloperForm: React.FC<Props> = ({ provinces, role }) => {
  const router = useRouter()
  const [ districts, setDistricts] = useState<Districts>()
  const [ provinceId, setProvinceId] = useState<number>()
  const [ districtId, setDistrictId] = useState<number>()

  const [ provinceError, setProvinceError] = useState('')
  const [ districtError, setDistrictError] = useState('')
  const [ cvError, setVcError] = useState('');
  const [ isSubmitting, setIsSubmitting ] = useState(false)

  const [ cv, setCv ] = useState<File>()

  
  const setProvince = useCallback((provinceName: string) => {

    provinces.forEach(province => {

      if(province.name === provinceName) {
        setDistricts(province.districts);

        setProvinceId(province.id);
      }
    })
  }, [provinces])
  
  const formSubmit = (form: FormData)  => {
    if(!provinceId || !districtId) {
      setProvinceError('Precisamos da província')
      setDistrictError('Precisamos saber do seu distrito')
      return
    }

    if(!cv) {
      return setVcError('Upload do seu CV');
    }

    const formData = new FormData();

    formData.append("name", form.name)
    formData.append("phone", form.phone)
    formData.append("email", form.email)
    formData.append("provinceId", String(provinceId))
    formData.append("districtId", String(districtId))
    formData.append("bairro", form.bairro)
    formData.append("experience", form.experience)
    formData.append("portfolio", form.portfolio)
    formData.append("yoe", String(form.yoe))
    formData.append("cv", cv )
    formData.append("role", role)

    api.post('/team', formData)
    .then(response => {
      
      setIsSubmitting(false)

      router.push('/iniciar/success')

    })
    .catch(error => {
      setIsSubmitting(false)
      console.log(error.response)
    })
  }

  return (
    <div>
      <Head>
        <meta name="title" content={`${role}`} />
        <meta name="robots" content="index" />
        <meta
          name="description"
          content={`Faça parte da equipa Ogolfim, ${role}`}
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
        <Formik
          initialValues={{ 
            name: '', 
            email: '', 
            phone: '',
            bairro: '',
            portfolio: '',
            experience: '',
            yoe: 3
          }}
          validationSchema={validator}
          onSubmit={(values) => {
            setIsSubmitting(true)
            formSubmit(values);
          }}
        >
          <Form className="form">
            <fieldset>
              <legend>{role}</legend>

              <label htmlFor="email">Qual é o seu endereço de email? *</label>
              <Field name="email" type="email" />
              <ErrorMessage component="span" name="email" />

              <label htmlFor="name">Qual é o seu nome? *</label>
              <Field name="name" type="text" />
              <ErrorMessage component="span" name="name" />

              <label htmlFor="provinces">Seleciona a sua província *</label>
              <Select 
                id="provinces" 
                onChange={e => setProvince(e.target.value)} 
              >
                <option hidden value="" >Seleciona província</option>
                <option value="Maputo" >
                  Maputo
                </option>
                <option value="Maputo (cidade)" >
                  Maputo (cidade)
                </option>
                <option value="Cabo Delgado" >
                  Cabo Delgado
                </option>
                <option value="Gaza" >
                  Gaza
                </option>
                <option value="Inhambane" >
                  Inhambane
                </option>
                <option value="Sofala" >
                  Sofala
                </option>
                <option value="Manica" >
                  Manica
                </option>
                <option value="Tete" >
                  Tete
                </option>
                <option value="Zambézia" >
                  Zambézia
                </option>
                <option value="Nampula" >
                  Nampula
                </option>
                <option value="Niassa" >
                  Niassa
                </option>
              </Select>
              <span>{provinceError}</span>

              <label htmlFor="districts">Seleciona o seu distrito *</label>
              <Select 
                name="districts" 
                id="districts" 
                onChange={e => {

                  districts?.forEach(district => {

                    if(district.name === e.target.value) {

                      setDistrictId(district.id);

                    }
                  })
                }}
              >
                <option hidden value="" >Seleciona distrito</option>
                {
                  districts && (
                    districts.map( district => (
                      <option 
                        key={district.id} 
                        value={district.name}
                      >
                        {district.name}
                      </option>
                    ))
                  )
                }
              </Select>
              <span>{districtError}</span>

              <label htmlFor="bairro">Qual é o seu bairro? *</label>
              <Field name="bairro" type="text" />
              <ErrorMessage component="span" name="bairro" />

              <label htmlFor="portfolio">Onde podemos saber mais sobre si? *</label>
              <Field name="portfolio" type="url" placeholder="URLs do linkedin, github e/ou portfolio" />
              <ErrorMessage component="span" name="portfolio" />

              <label htmlFor="experience">Qual é a sua mais impressionante realização de trabalho? *</label>
              <Field name="experience" as="textarea" />
              <ErrorMessage component="span" name="experience" />

              <label htmlFor="yoe">Quantos anos de experiência tem? *</label>
              <Field name="yoe" type="number" min="2" max="100" accept=".pdf,.doc" />
              <ErrorMessage component="span" name="yoe" />

              <label htmlFor="cv">Teu CV *</label>
              <input 
                id="cv" 
                name="cv" 
                type="file" 
                accept=".pdf,.doc" 
                onChange={e => {
                  if(!e.target.files)
                  return

                  setCv(e.target.files[0])
                }}
              />
              <span>{cvError}</span>

              <label htmlFor="phone">Qual é o seu número de telemóvel? *</label>
              <Field name="phone" type="tel" placeholder="Telefone" />
              <ErrorMessage component="span" name="phone" />
            </fieldset>

            <Button type="submit">
              {isSubmitting ? 'Enviando' : 'Enviar' }  
            </Button>
          </Form>
        </Formik>
      </Main>

      <Footer />
    </div>
  )
}



export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/roles')

  const paths = response.data.map((role: Role) => {
    return { params: { role: role.role } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { role } = context.params

  const provinces =  await api.get('/provinces')

  return {
    props: {
      provinces: provinces.data,
      role
    }
  }
}

export default DeveloperForm;

