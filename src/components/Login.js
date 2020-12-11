import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import './styles/Login.css';


function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = () => {
        props.history.push('/dashboard');
    }

    return (
        <div className="LoginStyleP">
            <div className="LoginStyleH">
                <h2>Login</h2><br /><br />
                <div>
                    <h3>Usuario</h3><br/>
                    <input type="text" {...username} autoComplete="new-password" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <h3>Contraseña</h3><br />
                    <input type="password" {...password} autoComplete="new-password" />
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <input className="btn btn-dark" type="button" value={loading ? 'Loading...' : 'Ingresar'} onClick={handleLogin} disabled={loading} /><br />
            </div>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;
