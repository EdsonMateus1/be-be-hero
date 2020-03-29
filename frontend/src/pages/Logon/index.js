import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions',{id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');

        } catch (error) {
            alert('Falha no login tente novamente!');
        }
    }


    return (
        <div className="logon-container" >
            <section className="form">
                <img src={logoImg} alt="Be Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Entre com seu longin</h1>
                    <input placeholder="ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    ></input>
                    <button className="button" type="submit" >Login</button>
                    <Link className="back-link" to="/register" >
                        <FiLogIn size={16} color="#E02041" />
                        Realize Seu Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
};