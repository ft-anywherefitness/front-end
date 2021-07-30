import React from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div`
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
    
    .loginDiv{
        padding:15%;
        height:50vh;
        width:150%;
        box-shadow:5px 10px 8px 10px #888888;
    }

    #submit{
        padding:3%;
        margin-top:10%;
        margin-left:40%;
    }

    #login-button{
        margin-top:25%;
    }
`


export default function Login(props){

    const {
        values,
        submit,
        change,
        disabled, //eslint-disable-line
        errors, //eslint-disable-line
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = evt => {
        const {name, value, type} = evt.target
        change(name,value, type)
    }

    return(
        <StyledLogin>
        <form className = 'login-container' onSubmit = {onSubmit}>


            <div className='loginDiv'>
            <h1>User Login</h1>


            {/* <div className = 'errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div> */}


        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}

            <div className = 'login-inputs'>
                <label> Username
                <input 
                name = 'username'
                type = 'text'
                placeholder = 'Enter a Username'
                value = {values.username}
                onChange = {onChange}
                />
                </label>

                <label>Password
                    <input 
                    name = 'password'
                    type = 'text'
                    placeholder = 'Enter a Password'
                    value = {values.password}
                    onChange = {onChange}
                    />
                </label>
            </div>
            <button id='submit'>submit</button>
            </div>
        </form>
        </StyledLogin>
    )
}