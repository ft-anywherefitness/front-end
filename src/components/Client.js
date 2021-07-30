import React, { useState } from 'react' 
import ClientForm from '../components/ClientForm'
import axios from 'axios'
// import Schema from '../validation/Schema'
// import {reach} from 'yup'

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
   //text inputs
  class_name:'',
  class_location:'',
  //dropdown
  start_time:'',
  duration: 60,

  //radio
  intensity_level: '',
}

// const initialFormErrors = {
//    //text inputs
//   name:'',
//   location:'',
//   //dropdown
//   time:'',

//   //radio
//   intensity_level: '',
// }


const initialClasses = []

const initialDisabled = true

export default function InitialClient() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
    const [classes, setClasses] = useState(initialClasses)
    const [formValues, setFormValues] = useState(initialFormValues)
    // const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled) //eslint-disable-line


  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////

// const getClasses = () => {
 
//     axios.get('')
//       .then(res => {
//         setClient(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }


  const postNewClass = newClass => {
    axios.post('https://fit-anywhere.herokuapp.com/api/classes/client', newClass)
      .then(res => {
        setClasses([res.data, ...classes])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }


  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////


// const validate = (name, value) => {
//     reach(Schema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
//   }


const inputChange = (name, value) => {
    // validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }


  const formSubmit = () => {
    const newClass = {
      class_name: formValues.class_name.trim(),
      class_type: 'boxing',
      intensity_level: 'easy',
      class_location: formValues.class_location.trim(),
      start_time:formValues.start_time.trim(),
      duration: 60,
      instructor_id: 1
    }
    postNewClass(newClass)
  }

    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////

//   useEffect(() => {
//     getClient()
//   }, [])

  // useEffect(() => {
  //   Schema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, [formValues])



    return(
        <div>
            <ClientForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            // errors={formErrors}
            />
        </div>
        )
    
}

