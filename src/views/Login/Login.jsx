import React from 'react';
import './index.scss';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <Header />
      <form className='login__form'>
        <h2>Acesse com seu login ou cadastre-se!</h2>
        <h3>Você pode entrar com o seu CPF</h3>
        <div className='login__input-wrapper'>
          <label htmlFor="name">Digite seu CPF:</label>
          <input type="text" placeholder='Nome Completo' id='name' className='login__input-name' />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder='********' />
        </div>
        <button type='submit'><Link to={`/home`}>Entrar</Link></button>
      </form>
    </section>
  )
}

export default Login;