import React from 'react'
import {Link} from 'react-router-dom'



export default function Login(props){

    const {
        values,
        submit,
        change,
        disabled,
        errors,
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
        <form className = 'login-container' onSubmit = {onSubmit}>
            <h2>User Login</h2>

            <div className = 'login-page-home-button'>
            <Link to ='/'>
                <button>Home</button>
            </Link>

            <Link to ='/Client'>
                <button>Client</button>
            </Link>
            </div>


            <div className = 'errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>


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
            <Link to = '/client'>
            <button disabled = {disabled}>submit</button>
            </Link>

        </form>
    )
}