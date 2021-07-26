import React, {useState, useEffect} from 'react';
import LoginPage from './LoginPage';
// import axios from 'axios'
// import Schema from 'schema'
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
//         setFriends(res.data)
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


// const validate = (name, value) => {
//     reach(schema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
//   }


const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    // validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
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

//   useEffect(() => {
//     schema.isValid(formValues).then(valid => setDisabled(!valid))
//   }, [formValues])


    return(
        <form>
          <LoginPage 
           values={formValues}
           change={inputChange}
           submit={formSubmit}
           disabled={disabled}
           errors={formErrors}
          />
        </form>
    )
}


