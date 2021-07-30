import React, {useState} from "react"
import axios from 'axios'
import InstructorForm from '../components/InstructorForm'
// import Schema from '../validation/Schema'
// import {reach} from 'yup'

const initialFormValues = {
//text inputs
  class_name:'',
  class_location:'',
  registered:0,
  max_size:0,
  class_type:'',
  duration:60,

//dropdown
  start_time:'',

//radio
  intensity_level:'',

}

const initialFormErrors = {
  class_name:'',
  class_location:'',
  registered:0,
  max_size:0,
  class_type:'',  
  start_time:'',
  intensity_level:'',
}

const initialClasses = []
const initialDisabled = true

const Instructor = (props) => {
  const [classes, setClasses] = useState(initialClasses)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) //eslint-disable-line
  const [disabled, setDisabled] = useState(initialDisabled) //eslint-disable-line


// const getUserId = () => {
//     console.log('checking user id', props.loggedIn)
//     // axios.get(`http://localhost:5000/api/auth/${props.loggedIn}`)
//     // .then(res => {
//     //   console.log("get what users", res.data)
//     //   setUserId(res.data)
//     // })
//     //   .catch(err => {
//     //     console.log(err)
//     // })
//   }

  const postNewClass = newClass => {

    // axios.get(`http://localhost:5000/api/auth/${props.loggedIn}`)
    // .then(res => {
    //   newClass.user_id = res.data.user_id
    // })
    //   .catch(err => {
    //     console.log(err)
    // })

    axios.post('https://fit-anywhere.herokuapp.com/api/classes/instructor', newClass)
    .then(res => {
      setClasses([res.data, ...classes])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

const formSubmit = () => {
    const newClass = {
      class_name: formValues.class_name.trim(),
      class_location: formValues.class_location.trim(),
      registered: parseInt(formValues.registered),
      max_size: parseInt(formValues.max_size),
      start_time: formValues.start_time.trim(),
      class_type:formValues.class_type.trim(),
      intensity_level:formValues.intensity_level.trim(),
      duration: 60,
      instructor_id: props.loggedIn
    }
    postNewClass(newClass)
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
        <div>
          
          <InstructorForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
         
        </div>
      );
      
  }

  export default Instructor;