import React, {useState,useEffect} from "react"
import axios from 'axios'
import InstructorForm from '../components/InstructorForm'
// import Schema from '../validation/Schema'
// import {reach} from 'yup'

const initialFormValues = {
//text inputs
  class_name:'',
  class_location:'',
  registered:'',
  max_size:'',
  class_type:'',

//dropdown
  start_time:'',

//radio
  intensity_level:'',
}

const initialFormErrors = {
  class_name:'',
  class_location:'',
  registered:'',
  max_size:'',
  class_type:'',  
  start_time:'',
  intensity_level:'',
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

  const postNewUser = newUser => {
    axios.post('', newUser)
    .then(res => {
      setUsers([res.data, ...users])
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
      class_name: formValues.class_name.trim(),
      class_location: formValues.class_location.trim(),
      registered: formValues.registered.trim(),
      max_size: formValues.max_size.trim(),
      start_time:formValues.start_time.trim(),
      class_type:formValues.class_type.trim(),
      intensity_level:formValues.intensity_level.trim(),
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
      //   .then(valid => setDisabled(!valid))
      // }, [formValues])

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