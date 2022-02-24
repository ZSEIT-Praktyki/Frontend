import * as yup from 'yup'

export default yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  name: yup
    .string()
    .min(1, 'Please enter valid email')
    .required('Name is required'),
  surname: yup
    .string()
    .min(1, 'Please enter valid email')
    .required('Surname is required'),
  phone: yup
    .string()
    .min(9, 'Must be a 9 number')
    .required('Phone is required'),
})
