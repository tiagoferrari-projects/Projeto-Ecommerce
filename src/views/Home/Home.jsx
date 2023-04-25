import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'


const Home = () => {
  return (
    <div className='home'>
      <HeaderMenu />
    </div>
  )
}

export default Home