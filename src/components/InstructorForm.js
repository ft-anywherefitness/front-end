import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledInstructor = styled.div`
display:flex;
justify-content:center;
border:5px solid black;
height:100vh;
background-image: url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
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

h1{
    color:#ccffff;
    margin-left:20%;
}

.formDiv{
    background-color:black;
    color:white;
    width:100%;
    height:70vh;
    border-radius:20px;
    padding:5%;
    border:5px solid;
    border-image: linear-gradient(to right,  #ffccff, #66ffff) 1;
}

#create{
    margin-left:42%;
}

`

   

export default function InstructorForm (props) {
    const {
    values,
    submit,
    change,
    disabled,
    errors,
    } = props
    
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    

    return (
        <StyledInstructor>
          
        <form onSubmit={onSubmit}>
           
                <Link to = '/'>
                    <button>Home</button>
                </Link>
                <div className='formDiv'>
                <h1>Create Your Class</h1>

                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.location}</div>
                <div>{errors.attendees}</div>
                <div>{errors.size}</div>
                <div>{errors.time}</div>
                </div>
           

        <div>
            <label>Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>
        </div>
           

        <div>
            <label>Location
                <input
                    value={values.location}
                    onChange={onChange}
                    name='location'
                    type='text'
                />
            </label>
        </div>

        <div>
            <label>Current number of registered attendees
                <input
                    value={values.attendees}
                    onChange={onChange}
                    name='attendees'
                    type='text'
                />
            </label>
        </div>

        <div>
            <label>Max class size
                <input
                    value={values.size}
                    onChange={onChange}
                    name='size'
                    type='text'
                />
            </label>
        </div>


        <div> 
            <h3>Difficulty Level</h3>

        <label>Easy
            <input 
              type='checkbox'
              name='easy'
              onChange={onChange}
              checked={values.easy}
            />
        </label>

        <label>Intermediate
            <input 
              type='checkbox'
              name='intermediate'
              onChange={onChange}
              checked={values.intermediate}
            />
        </label>

        <label>Advanced
            <input 
              type='checkbox'
              name='advanced'
              onChange={onChange}
              checked={values.advanced}
            />
        </label>
        </div>

        <div> 
            <h3>Class Type</h3>

        <label>Yoga
            <input 
              type='checkbox'
              name='yoga'
              onChange={onChange}
              checked={values.yoga}
            />
        </label>

        <label>Pilates
            <input 
              type='checkbox'
              name='pilates'
              onChange={onChange}
              checked={values.pilates}
            />
        </label>

        <label>Strength
            <input 
              type='checkbox'
              name='strength'
              onChange={onChange}
              checked={values.strength}
            />
        </label>

        <label>Cardio
            <input 
              type='checkbox'
              name='cardio'
              onChange={onChange}
              checked={values.cardio}
            />
        </label>
        </div>

        <div> 
            <h3>Time Duration</h3>
        <label>Time Select
          <select
            value={values.time}
            onChange={onChange}
            name='time'
            >
            <option value=''>- Select a time -</option>
            <option value='6am'>6:00 AM - 7:00 AM</option>
            <option value='7am'>7:00 AM - 8:00 AM</option>
            <option value='8am'>8:00 AM - 9:00 AM</option>
            <option value='9am'>9:00 AM - 10:00 AM</option>
            <option value='10am'>10:00 AM - 11:00 AM</option>
            <option value='11am'>11:00 AM - 12:00 PM</option>
            <option value='12pm'>12:00 PM - 1:00 PM</option>
            <option value='1pm'>1:00 PM - 2:00 PM</option>
            <option value='2pm'>2:00 PM - 3:00 PM</option>
            <option value='3pm'>3:00 PM - 4:00 PM</option>
            <option value='4pm'>4:00 PM - 5:00 PM</option>
            <option value='5pm'>5:00 PM - 6:00 PM</option>
            <option value='6pm'>6:00 PM - 7:00 PM</option>
            <option value='7pm'>7:00 PM - 8:00 PM</option>
            <option value='8pm'>8:00 PM - 9:00 PM</option>
            <option value='9pm'>9:00 PM - 10:00 PM</option>
            <option value='10pm'>10:00 PM -11:00 PM</option>
          </select>
        </label>
        </div>
    

        <button id='create' disabled={disabled}>Create Class</button>
        </div>
        </form>
        </StyledInstructor>
    )


}
