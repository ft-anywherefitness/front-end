import React from 'react'
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
    border-image: linear-gradient(to right,  #ffccff
, #66ffff) 1;
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
        const { name, value, type } = evt.target
        change(name, value, type)
    }
    

    return (
        <StyledInstructor>
          
        <form onSubmit={onSubmit}>
           
                <div className='formDiv'>
                <h1>Create Your Class</h1>

                <div className='errors'>
                <div>{errors.class_name}</div>
                <div>{errors.class_location}</div>
                <div>{errors.registered}</div>
                <div>{errors.max_size}</div>
                <div>{errors.start_time}</div>
                <div>{errors.class_type}</div>
                <div>{errors.intensity_level}</div>
                </div>
           

        <div>
            <label>Name
                <input
                    value={values.class_name}
                    onChange={onChange}
                    name='class_name'
                    type='text'
                    placeholder='Please enter a name'
                />
            </label>
        </div>
           

        <div>
            <label>Location
                <input
                    value={values.class_location}
                    onChange={onChange}
                    name='classs_location'
                    type='text'
                    placeholder='Please enter a location'
                />
            </label>
        </div>

        <div>
            <label>Current number of registered attendees
                <input
                    value={values.registered}
                    onChange={onChange}
                    name='registered'
                    type='number'
                    placeholder='Optional'
                />
            </label>
        </div>

        <div>
            <label>Max class size
                <input
                    value={values.max_size}
                    onChange={onChange}
                    name='max_size'
                    type='number'
                    placeholder='Optional'
                />
            </label>
        </div>


        <div>
            <label>Class Type
                <input
                    value={values.class_type}
                    onChange={onChange}
                    name='class_type'
                    type='number'
                    placeholder='Please enter class type'
                />
            </label>
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
            <option value='6:00:00'>6:00 AM - 7:00 AM</option>
            <option value='7:00:00'>7:00 AM - 8:00 AM</option>
            <option value='8:00:00'>8:00 AM - 9:00 AM</option>
            <option value='9:00:00'>9:00 AM - 10:00 AM</option>
            <option value='10:00:00'>10:00 AM - 11:00 AM</option>
            <option value='11:00:00'>11:00 AM - 12:00 PM</option>
            <option value='12:00:00'>12:00 PM - 1:00 PM</option>
            <option value='13:00:00'>1:00 PM - 2:00 PM</option>
            <option value='14:00:00'>2:00 PM - 3:00 PM</option>
            <option value='15:00:00'>3:00 PM - 4:00 PM</option>
            <option value='16:00:00'>4:00 PM - 5:00 PM</option>
            <option value='17:00:00'>5:00 PM - 6:00 PM</option>
            <option value='18:00:00'>6:00 PM - 7:00 PM</option>
            <option value='19:00:00'>7:00 PM - 8:00 PM</option>
            <option value='20:00:00'>8:00 PM - 9:00 PM</option>
            <option value='21:00:00'>9:00 PM - 10:00 PM</option>
            <option value='22:00:00'>10:00 PM -11:00 PM</option>
          </select>
        </label>
        </div>
 
        <div>
        <label>Easy
        <input
            type='radio'
            name='intensity_level'
            value='easy'
            onChange={onChange}
            checked={values.intensity_level === 'easy'}
          />
        </label>
        

        <label>Intermediate
        <input
            type='radio'
            name='intensity_level'
            value='intermediate'
            onChange={onChange}
            checked={values.intensity_level === 'intermediate'}
          />
        </label>
      

        <label>Advanced
        <input
            type='radio'
            name='intenisity_level'
            value='advanced'
            onChange={onChange}
            checked={values.intensity_level === 'advanced'}
          />
        </label>
        </div>

        <button id='create' disabled={disabled}>Create Class</button>
        </div>
        </form>
        </StyledInstructor>
    )


}
