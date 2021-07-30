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
        padding:5rem;
        height:50vh;
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
            <div className ='registerDiv'>
                <h2>Registration</h2>

                <div className='errors'>
                <div>{errors.role}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                </div>
              
           

    <div id='type-user'>
        <label>Instructor
        <input
            type='radio'
            name='role'
            value='instructor'
            onChange={onChange}
            checked={values.role === 'instructor'}
          />
        </label>

        <label>Client
        <input
            type='radio'
            name='role'
            value='client'
            onChange={onChange}
            checked={values.role === 'client'}
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