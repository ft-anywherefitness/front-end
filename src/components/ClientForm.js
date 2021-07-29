import React from 'react' 
// import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledClient = styled.div`
display:flex;
justify-content:center;
border:5px solid black;
height:100vh;
background-image: url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
background-repeat: no-repeat;
background-size:cover;
background-position:center;
object-fit: contain;

button{
    display:flex;
    justify-content:center;
    border-radius:5px;
    background-color:#ccccff;
    width:15%;
    margin-left:50%;
    margin-top:10%;
    margin-bottom:15%;
    
    }
    
    button:hover{
    background-color: grey;
    color: white;
    }

    h2{
        color:#ccffff;

    }
    

    .container{
        background-color:black;
        color:white;
        width:100%;
        border-radius:20px;
        padding:5%;
        border:5px solid;
        border-image: linear-gradient(to right, red, purple) 1;
        margin-top: 20%;
    }

    #search{
        margin-left:42%;
        padding:2%;
    }
`


export default function Client(props){
    const{
        values,
        submit,
        change,
        
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = (evt) => {
        const { name, value, type} = evt.target
        change(name, value, type)
    }


    return(
        <StyledClient>
            
        <form className = 'client-container' onSubmit = {onSubmit}>
            <div className='container'>
            <h2>Search Custom Workout Class</h2>

            {/* <div className = 'errors'>
                <div>{errors.name}</div>
                <div>{errors.location}</div>
                <div>{errors.time}</div>
            </div> */}

            <div>
            <label>Name
                <input
                    value={values.class_name}
                    onChange={onChange}
                    name='class_name'
                    type='text'
                    placeholder = 'Enter a class name'
                />
            </label>
        </div>
           

        <div>
            <label>Location
                <input
                    value={values.class_location}
                    onChange={onChange}
                    name='class_location'
                    type='text'
                    placeholder = 'Enter a location'
                />
            </label>
        </div>

        <div> 
            <h3>Difficulty Level</h3>

        <label>Easy
            <input 
              type='radio'
              name='intensity_level'
              value = 'easy'
              onChange={onChange}
              checked={values.intensity_level === 'easy'}
            />
        </label>

        <label>Intermediate
            <input 
              type='radio'
              name='intensity_level'
              value = 'intermediate'
              onChange={onChange}
              checked={values.intensity_level === 'intermediate'}
            />
        </label>

        <label>Advanced
            <input 
              type='radio'
              name='intensity_level'
              value = 'advanced'
              onChange={onChange}
              checked={values.intensity_level === 'advanced'}
            />
        </label>
        </div>

        <div> 
            
        <h3>ClassType</h3>
                <input
                    value={values.class_type}
                    onChange={onChange}
                    name='class_type'
                    type='text'
                    placeholder = 'Enter a class'
                />
        </div>

        <div> 
            <h3>Time Duration</h3>
        <label>Time Select
          <select
            value={values.start_time}
            onChange={onChange}
            name='start_time'
            >
            <option value=''>- Select a time -</option>
            <option value='06:00:00'>6:00 AM - 7:00 AM</option>
            <option value='07:00:00'>7:00 AM - 8:00 AM</option>
            <option value='08:00:00'>8:00 AM - 9:00 AM</option>
            <option value='09:00:00'>9:00 AM - 10:00 AM</option>
            <option value='10:00:00'>10:00 AM - 11:00 AM</option>
            <option value='11:00:00'>11:00 AM - 12:00 PM</option>
            <option value='12:00:00'>12:00 PM - 1:00 PM</option>
            <option value='01:00:00'>1:00 PM - 2:00 PM</option>
            <option value='02:00:00'>2:00 PM - 3:00 PM</option>
            <option value='03:00:00'>3:00 PM - 4:00 PM</option>
            <option value='04:00:00'>4:00 PM - 5:00 PM</option>
            <option value='05:00:00'>5:00 PM - 6:00 PM</option>
            <option value='06:00:00'>6:00 PM - 7:00 PM</option>
            <option value='07:00:00'>7:00 PM - 8:00 PM</option>
            <option value='08:00:00'>8:00 PM - 9:00 PM</option>
            <option value='09:00:00'>9:00 PM - 10:00 PM</option>
            <option value='10:00:00'>10:00 PM -11:00 PM</option>
          </select>
        </label>
        </div>
    

        <button id='search'>Search Class</button>
        </div>
       </form>
  
       </StyledClient>
    )
}

