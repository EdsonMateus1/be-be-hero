import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be hero" />
                <span> Bem vindo </span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste:</p>

                    <strong>Descricao:</strong>
                    <p>teste:</p>

                    <strong>Valor:</strong>
                    <p>teste:</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>



                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste:</p>

                    <strong>Descricao:</strong>
                    <p>teste:</p>

                    <strong>Valor:</strong>
                    <p>teste:</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>


                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste:</p>

                    <strong>Descricao:</strong>
                    <p>teste:</p>

                    <strong>Valor:</strong>
                    <p>teste:</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste:</p>

                    <strong>Descricao:</strong>
                    <p>teste:</p>

                    <strong>Valor:</strong>
                    <p>teste:</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

           


           

           

        </div>
    )
}
