import React, { useState } from 'react';
import './style.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

import api from '../../services/api'

export default function NewRunning() {
  const [startPlace, setstartPlace] = useState('');
  const [finishPlace, setfinishPlace] = useState('');
  const telephone = localStorage.getItem('userPhone');
  const history = useHistory();
  async function handleNewIncident(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const data = {
      telephone,
      startPlace,
      finishPlace,
    };

    try {
      const res = await api.post('rides', data,
        {
          headers: {
            'x-access-token': `${token}`
          }
        });
      console.log(data)

      //////// mandar para a nova tela de acompahamento da corrida
      history.push('/race/new', res.data);

    } catch (err) {
      //alert('Erro ao solicitar corrida, tente novamente!')
      alert(err.response.data.message);
    }

  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Me Leva Ai" />
          <h1>Cadastrar nova corrida</h1>
          <p>Informe a sua Origem e o seu Destino que o Me Leva Aí te leva!.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>

        </section>
        <form onSubmit={handleNewIncident}>

          <input
            placeholder="Origem"
            value={startPlace}
            onChange={e => setstartPlace(e.target.value)}
          />
          <input
            placeholder="Destino"
            value={finishPlace}
            onChange={e => setfinishPlace(e.target.value)}
          />

          <button className="button" type="submit">Solicitar</button>

        </form>
      </div>
    </div>
  );
}
