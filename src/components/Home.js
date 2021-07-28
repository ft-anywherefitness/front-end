import React from 'react'
import {Link} from 'react-router-dom'


export default function Home(){
    

    return (
        <div className = 'home-page'>
            <header className = 'home-header'>
                <h1>Anywhere Fitness</h1>

                <Link to= '/'>
                <button>Home</button>
                </Link>

                <Link to= '/Login'>
                <button>Login</button>
                </Link>

                <Link to = '/Register'>
                <button>Register</button>
                </Link>

                <Link to= '/Client'>
                <button>Client</button>
                </Link>

                <Link to = '/Instructor'>
                <button>Instructor</button> 
                </Link>

                
            </header>
        </div>
    )
}