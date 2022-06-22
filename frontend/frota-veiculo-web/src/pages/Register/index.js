import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function Register() {
  // criando os estados para manipular os inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    // Objeto que está sendo instanciado pelo input e será utilizado na API
    const data = { name, email, telephone, password };

    try {
      const res = await api.post('user', data);
      alert(`Seu ID de acesso: ${res.data.telephone}`);
      history.push('/');
    }
    catch (err) {
      alert(err.response.data.message);
    }
  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Me Leva Ai" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e solicite uma corrida no Me Leva Ai!.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao Login
          </Link>

        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}

          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            type={'password'}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}
