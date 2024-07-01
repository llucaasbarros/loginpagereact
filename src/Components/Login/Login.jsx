import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados: " + username + " " + password);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Efetue o Login</h1>
                <div className='input-field'>
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <FaLock className='icon' />
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type='checkbox' />
                        Lembre de mim
                    </label>
                    <a href='#'>Esqueci minha Senha</a>
                </div>

                <button>Entrar</button>

                <div className='signup-link'>
                    <p>
                        Não tem uma conta? <a href='#'>Cadastrar-se</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
