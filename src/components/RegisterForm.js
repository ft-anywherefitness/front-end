import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledRegister = styled.div`
display:flex;
justify-content:center;
align-items:center;
border:5px solid black;
height:100vh;

button{
    display:flex;
    justify-content:center;
    border-radius:5px;
    background-color:#ccccff;
    }
    
    button:hover{
    background-color: grey;
    color: white;
    }

    h2{
        margin-left:30%;
    }

    .registerDiv{
        padding:15%;
        height:50vh;
        width:150%;
        box-shadow:5px 10px 8px 10px #888888;
    }

    #register-button{
        margin-top:20%;
        margin-left:40%;
        padding:3%;
    }

    #home-but{
        margin-bottom:30%;
        margin-left:50%;
    }
    
   
`
export default function RegisterForm (props) {
   
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
        change(name,value,type)
    }

    return (
    <StyledRegister>
        <form id='registration' onSubmit={onSubmit}>
            <Link to ='/'>
                <button id='home-but'>Home</button>
            </Link>
            <div className ='registerDiv'>
                <h2>Registration</h2>

                <div className='errors'>
                <div>{errors.user}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                </div>
              
           

    <div id='type-user'>
        <label>Instructor
        <input
            type='radio'
            name='user'
            value='instructor'
            onChange={onChange}
            checked={values.user === 'instructor'}
          />
        </label>

        <label>Client
        <input
            type='radio'
            name='user'
            value='client'
            onChange={onChange}
            checked={values.user === 'client'}
          />
        </label>
        </div>

        <div id='username-input'>
            <label>Username
                <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                />
            </label>
        </div>

        <div id='password-input'>
            <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
            </label>
        </div>

   

        <button id='register-button' disabled={disabled}>Register</button>

        </div>
        </form>
       
        </StyledRegister>
    )

}