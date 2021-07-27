import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
    password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long')
})

export default formSchema