import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledHome = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;

img{
    margin-top: 2%;
    width: 70%;
}


button{
    margin: 1.2%;
    padding: 0.5%;
    background-color: white;
    justify-content:center;
    border-radius:5px;
    background-color:#ccccff;
    width:15%
}

button:hover{
    background-color: grey;
    color: white;
}

p{
    margin: 2%;
}
`




export default function Home(){
    
    return (
    <StyledHome>
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
            <img src = 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'></img>

            <p>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.</p>

        </div>
    </StyledHome>
    )
}