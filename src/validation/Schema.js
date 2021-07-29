// import * as yup from 'yup'

// const formSchema = yup.object().shape({

//     // login/registration page
//     username: yup
//     .string()
//     .trim()
//     .required('Username is required')
//     .min(3, 'Username must be at least 3 characters long'),
//     password: yup
//     .string()
//     .trim()
//     .required('Password is required')
//     .min(3, 'Password must be at least 3 characters long'),

//     //instructor/client page
//     user:yup
//     .string()
//     .oneOf(['instructor', 'client'], 'type of user is required'),

//     name:yup
//     .string()
//     .trim()
//     .required('Name is required')
//     .min(2,'name must be at least 2 characters long'),
//     location:yup
//     .string()
//     .trim()
//     .required('Location is required'),
//     attendees:yup 
//     .string()
//     .trim(),
//     size:yup 
//     .string()
//     .trim(),
//     time:yup
//     .string()
//     .oneOf(['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm']),

// easy:yup.boolean(),
// intermediate:yup.boolean(),
// advanced:yup.boolean(),



// })

// export default formSchema