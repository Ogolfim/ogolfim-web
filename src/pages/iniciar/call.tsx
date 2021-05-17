import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { PhoneIcon } from '../../assets/icons'
import Header from '../../components/Header'
import Button from '../../components/SubmitButton/styles'

import { months, weekDays } from '../../utils/calendar/days'
import { 
  Main,
  Container,
  CalenderHeader,
  CalendarContainer
} from '../../styles/pages/iniciar/call'

import axios from 'axios';
import { DataContext } from '../../contexts'


const  Call: React.FC = () => {
  const { data } = useContext(DataContext)
  const router = useRouter()
  const [date, setDate] = useState(new Date());
  const [ month, setMonth ] = useState('');
  const [ day, setDay ] = useState(1);
  const [ weekDay, setWeekDay ] = useState('');
  const [ year, setYear ] = useState(2021);
  
  useEffect(() => {
    setMonth(months[date.getMonth()])
    setWeekDay(weekDays[date.getDay()])
    setDay(date.getDate())
    setYear(date.getFullYear())
  }, [date]) 

  const api = useRef(axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "authorization": `beerer ${data?.token}`
    }
  }))


  const FormHandler = () => {
    api.current.post('/client', { callDate: date })
    .then(response => {
      router.push('/iniciar/success')
    })
    .catch(err => {
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
        <Container>
          <CalenderHeader>
            <h1>Vamos agendar uma conversa pelo telefone</h1>
            <p>
              Agenda uma conversa connosco para que possamos entender melhor os detalhares do seu negocio
            </p>
          </CalenderHeader>
          <CalendarContainer>
            <h3><PhoneIcon />{`${weekDay} ${day} ${month} ${year}`}</h3>
            <Calendar
              className="ogolfim"
              onChange={(dade: Date) => {setDate(dade)}}
              value={date}
            />
          </CalendarContainer>
        </Container>
        <Button type="button" onClick={FormHandler}>
          Submeter data
        </Button>
      </Main>
    </div>
  )
}

export default Call;