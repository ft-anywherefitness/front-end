import React, { useState, useEffect } from 'react' 
import ClientForm from '../components/ClientForm'
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


const initialClient = []

const initialDisabled = true

export default function InitialClient() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
    const [client, setClient] = useState(initialClient)
    const [formValues, setFormValues] = useState(initialFormValues)
    // const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////

// const getClient = () => {
 
//     axios.get('')
//       .then(res => {
//         setClient(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }


//   const postNewClient = newClient => {
//     axios.post('', newClient)
//       .then(res => {
//         setClient([res.data, ...clients])
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
    const newClient = {
      name: formValues.name.trim(),
      location: formValues.location.trim(),
      time:formValues.time.trim(),
    }
    console.log(newClient)
    // postNewClient(newClient)
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
        <form>
            <ClientForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            // errors={formErrors}
            />
        </form>
        )
    
}

