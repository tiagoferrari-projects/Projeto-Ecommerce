import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    
    <div>
    <h1>Login</h1>
    <button><Link to={`/home`}></Link>Home</button>
    </div>
  )
}

export default Login