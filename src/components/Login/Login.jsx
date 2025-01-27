import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';

import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " - " + Password);

        //console.log(username, Password); mostrar no inspencionar//
        //console.log("Envio")//
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>

            <div className="Input-field">
                <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className='icons'/>
            </div>

            <div className="Input-field">
                <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icons'/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href='#'>Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
