 import * as Yup from 'yup';

const validator = Yup.object({
  name: Yup.string()
    .min(2, 'Deve ter 2 caracteres ou mais')
    .max(40, 'Deve ter 40 caracteres ou menos')
    .required('Precisamos do seu nome'),
  email: Yup.string()
    .email('Email invalido')
    .required('Precisamos do seu email'),
  phone: Yup.string()
    .max(15, 'Numero the telefone invalido')
    .required('Precisamos do seu numero de telefone'),
  bairro: Yup.string()
    .max(40, 'Deve ter 40 caracteres ou menos')
    .required('Precisamos saber do seu bairro'),
  portfolio: Yup.string()
    .url('Link invalido. Link deve iniciar por http:// ou https://')
    .required('Onde podemos saber mais sobre você'),
  experience: Yup.string()
    .min(10, 'Deve ter 10 caracteres ou mais')
    .max(300, 'Deve ter 300 caracteres ou menos')
    .required('Fale-nos da sua experiência'),
  yoe: Yup.number()
    .min(2, '2 é o mínimo número de anos para ser OGolfim')
    .max(100, '100 é o máximo número de anos para ser OGolfim')
    .required('Quantos anos de experiência tem?'),
})


export default validator;