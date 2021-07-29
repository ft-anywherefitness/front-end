import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
// import axios from 'axios'
import Schema from '../validation/Schema'
import {reach} from 'yup'


//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
    username: '',
    password: '',
}



const initialFormErrors = {
    username: '',
    password: '',
}

const initialLogin = []
const initialDisabled = true

export default function InitialLogin(){
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
const [login, setLogin] = useState(initialLogin)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)




  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////

// const getLogin = () => {
 
//     axios.get('')
//       .then(res => {
//         setLogin(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }


//   const postNewLogin = newLogin => {
//     axios.post('', newFriend)
//       .then(res => {
//         setLogin([res.data, ...friends])
//       })
//       .catch(err => {
//         console.log(err)
//       })
//       .finally(() => {
//         setFormValues(initialFormValues)
//       })
//   }


  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////


const validate = (name, value) => {
    reach(Schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }


const inputChange = (name, value) => {
    validate(name,value)
    setFormValues({ 
      ...formValues,
      [name]: value 
    })
  }



  const formSubmit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    console.log(newLogin)
    // postNewLogin(newLogin)
  }


    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////

//   useEffect(() => {
//     getFriends()
//   }, [])

  useEffect(() => {
    Schema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])


    return(
        <form>
          <LoginForm 
           values={formValues}
           change={inputChange}
           submit={formSubmit}
           disabled={disabled}
           errors={formErrors}
          />
        </form>
    )
}


