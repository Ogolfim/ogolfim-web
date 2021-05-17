 import * as Yup from 'yup';

const validator = Yup.object({
  companyName: Yup.string()
    .min(2, 'Deve ter 2 caracteres ou mais')
    .max(40, 'Deve ter 40 caracteres ou menos')
    .required('Precisamos do nome da sua empresa'),
  website: Yup.string()
    .url('Link invalido. Link deve iniciar por http:// ou https://'),
  employees: Yup.string()
  .oneOf(['<=5', '<=15', '<=50', '<=100', '<=500', '>500'])
  .required('Qual é o número atual de empregados na sua empresa')
})

export default validator;