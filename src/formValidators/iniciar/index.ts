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
    .min(9, 'Numero the telefone invalido')
    .max(15, 'Numero the telefone invalido')
    .required('Precisamos do seu numero de telefone')
})


export default validator;
