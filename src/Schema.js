import * as yup from 'yup'

const formSchema = yup.object().shape({

    user:yup
    .string()
    .oneOf(['instructor', 'client'], 'type of user is required'),
    username:yup
    .string()
    .trim()
    .required('Username is required')
    .min(3,'username must be at least 3 characters'),
    password:yup
    .string()
    .required('Password is required')
    .min(8,'password must be at least 9 characters length long'),
  


}
)

export default formSchema;
