import * as yup from 'yup'

const formSchema = yup.object().shape({
    username:yup
    .string()
    .trim()
    .required('Username is required')
    .min(3,'name must be at least 3 characters'),
    password:yup
    .string()
    .required('Password is required')
    .min(8,'password must be at least 9 characters length long'),
    user:yup
    .string()
    .oneOf(['instructor', 'client'], 'type of user is required'),


}
)

export default formSchema;