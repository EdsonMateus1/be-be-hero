import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import './style.css';

export default function NewIncident(){
    return(
        <div className="incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be Hero" />
            <h1>Castrar novo caso</h1>
            <p>Descreve o caso detalhadamente para encotrar um Be hero </p>
            <Link className="back-link" to="/profile" >
              <FiArrowLeft  size={16} color="#E02041" />
                         Volte para Home
            </Link>
          </section>
          <form>
              <input placeholder="Titulo do caso"></input>
              <textarea placeholder="Descricao"></textarea>
              <input placeholder="valor em reais"></input>
  
              <button className="button" type="submit" >Cadastrar</button>
  
          </form>
        </div>
      </div>
    )
}