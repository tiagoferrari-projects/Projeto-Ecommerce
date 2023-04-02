import dncLogo from '../../assets/dncLogo.png';
import './index.scss';

import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <img className='header__img' src={dncLogo} alt="DNC Logo" />
        </div>
    )
}

export default Header;