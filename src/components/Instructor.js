import React, {useState,useEffect} from "react"
// import axios from 'axios'
import InstructorForm from '../components/InstructorForm'
import Schema from '../validation/Schema'
import {reach} from 'yup'

const initialFormValues = {
//text inputs
  name:'',
  location:'',
  attendees:'',
  size:'',

//dropdown
time:'',

//checkbox

easy: false,
intermediate: false,
advanced: false,
yoga:false,
pilates:false,
strength:false,
cardio:false,
}

const initialFormErrors = {
    name:'',
    time:'',
    location:'',
    attendees:'',
    size:'',
}

const initialUser = []
const initialDisabled = true

const Instructor = () => {
  const [users, setUsers] = useState(initialUser)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)    


// const getUsers = () => {
//     axios.get('https://reqres.in/api/orders')
//     .then(res => {
//       setUsers(res.data)
//     })
//       .catch(err => {
//         console.log(err)
//     })
//   }

//   const postNewUser = newUser => {
//     axios.post('https://reqres.in/api/users', newUser)
//     .then(res => {
//       setUsers([res.data, ...users])
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     .finally(() => {
//       setFormValues(initialFormValues)
//     })
//   }

const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      location: formValues.location.trim(),
      attendees: formValues.attendees.trim(),
      size: formValues.size.trim(),
      time:formValues.time.trim(),
    }
    // postNewUser(newUser)
  }

  const validate = (name,value) => {
    reach(Schema,name)
    .validate(value)
    .then(() => setFormErrors({...formErrors,[name]: ''}))
    .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  }
  

    const inputChange = (name, value) => {
        validate(name,value)
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

    //   useEffect(() => {
    //     getUsers()
    //   }, [])

      useEffect(() => {
        Schema.isValid(formValues)
        .then(valid => setDisabled(!valid))
      }, [formValues])

      return (
        <form>
          
          <InstructorForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
         
        </form>
      );
      
  }

  export default Instructor;