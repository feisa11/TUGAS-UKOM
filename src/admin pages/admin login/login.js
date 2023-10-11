import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <p className='title'>Login</p>
      <form  className='form'>

          <div className='input'>
              <input type="text" placeholder="Email or Phone" id="username" className='placeholder'/>
          </div>


          <div className='input'>
              <input type="password" placeholder="Password" id="password" className='placeholder'/>            
          </div>

          <button><Link to="/home" className='link'>Log In</Link></button>
      </form>
    </div>
  )
}

export default Login