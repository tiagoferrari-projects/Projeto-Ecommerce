import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SendVerifier from './SendVerifier';
import LoginVerifier from './LoginVerifier';


const Login = () => {
  return (
    <section className='login'>
      <Header />
      <form onSubmit={SendVerifier} className='login_form'>
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF </h2>
        <div className='login_input-wrapper'>
          
          <label htmlFor="name">Digite seu CPF:</label>
          <input type="text" 
          placeholder='Nome Completo' 
          id='name' className='login_input-name' onKeyUp={LoginVerifier}/>
          <span className='verifier' id='name'></span>
          
          <label htmlFor="password">Senha:</label>
          <input type="password" id='password' placeholder='*******************'onKeyUp={LoginVerifier}/>
        <span className='verifier' id='password'></span>
        </div>

        <button type='submit'>
          <Link className='button' to={"/home"}>Entrar</Link>
        </button>

        <span className='verifierSend'></span>

      </form>
      
      
    </section>
  )
};

export default Login;