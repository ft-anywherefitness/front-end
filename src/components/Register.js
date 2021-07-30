import React, {useState } from "react"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import RegisterForm from './RegisterForm'
// import Schema from '../validation/Schema'
// import {reach} from 'yup'


const initialFormValues = {
    //radio
    role:'',
    //text inputs
    username:'',
    password:'',
}

const initialFormErrors = {
    role:'',
    username:'',
    password:'',
}

const initialUser = []
const initialDisabled = true

const Register = () => {
  const [users, setUsers] = useState(initialUser)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) //eslint-disable-line
  const [disabled, setDisabled] = useState(initialDisabled) //eslint-disable-line

  const { push } = useHistory()


// const getUsers = () => {
//     axios.get('https://reqres.in/api/orders')
//     .then(res => {
//       setUsers(res.data)
//     })
//       .catch(err => {
//         console.log(err)
//     })
//   }

  const postNewUser = newUser => {
    axios.post('http://localhost:5000/api/auth/register', newUser)
    .then(res => {
      setUsers([res.data, ...users])
      push('/Login')
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

const formSubmit = () => {
    const newUser = {
      role: formValues.role.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }

  // const validate = (name,value) => {
  //   reach(Schema,name)
  //   .validate(value)
  //   .then(() => setFormErrors({...formErrors,[name]: ''}))
  //   .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  // }
  

    const inputChange = (name, value) => {
        // validate(name,value)
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

    //   useEffect(() => {
    //     getUsers()
    //   }, [])

      // useEffect(() => {
      //   Schema.isValid(formValues)
      //   .then(valid => setDisabled(valid))
      // }, [formValues])

      return (
        <div>
          
          <RegisterForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
         
        </div>
      );
      
  }

  export default Register;