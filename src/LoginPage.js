import React from 'react'



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

            <div className = 'erros'>
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
            <button disabled = {disabled}>submit</button>

        </form>
    )
}