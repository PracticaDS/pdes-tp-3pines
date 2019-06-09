import React from 'react';
import '../../styles/Login.scss'

const handleChange = (usuario, setearUsuario) => {
  setearUsuario(usuario)
}

const Login = ({login, setearUsuario}) => {
  return (
    <div className="app-contenedor">
      <div className="login-container">
        <h1>Bienvenide a la Revolución Industrial!</h1>
        <div className="login-form">
          <input name='input' onChange={(event) => handleChange(event.target.value, setearUsuario)}/>
          <button type='button' onClick={login}>✓</button>
        </div>
      </div>
    </div>
  )
};

export default Login