import * as yup from 'yup'

const formSchema = yup.object().shape({
<<<<<<< HEAD
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
=======

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
>>>>>>> b9d26d699de0a8d9f4129956f8a6c01060d0435a
