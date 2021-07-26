import React from 'react'

export default function Register (props) {
   
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
        <form id='registration'onSubmit={onSubmit}>
            <div className ='submit'>
                <h2>Registration</h2>

                <div className='errors'>
                <div>{errors.user}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                </div>

            </div>

            <div>
        <label>Instructor
        <input
            type='radio'
            name='instructor'
            value='instructor'
            onChange={onChange}
            checked={values.user === 'instructor'}
          />
        </label>

        <label>Client
        <input
            type='radio'
            name='client'
            value='client'
            onChange={onChange}
            checked={values.user === 'client'}
          />
        </label>

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
                    name='passoword'
                    type='text'
                />
            </label>
        </div>

        </div>

        <button id='register-button' disabled={disabled}>Register</button>


        </form>
    )

}