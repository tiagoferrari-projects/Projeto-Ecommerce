import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1>Home</h1>
    <button><Link to={`/products/1`}></Link>Produto</button>
    </div>
  )
}

export default Home