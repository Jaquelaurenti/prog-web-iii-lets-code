import React from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function FinishRace(props) {

  const history = useHistory();

  const newHour = newHourRandom(new Date(2012, 0, 1));

  function newHourRandom(date) {
    var atualDate = new Date();
    var localDate = new Date(date.getTime() + Math.random() * (atualDate.getTime() - date.getTime()));

    return localDate.getHours() + ':' + localDate.getMinutes();
  }

  async function handleRegister(event) {
    event.preventDefault();

    // Objeto que está sendo instanciado pelo input e será utilizado na API
    const data = { "type": "finish" };
    const token = localStorage.getItem('token');

    try {
      await api.patch('rides/' + props.location.state._id, data,
        {
          headers: {
            'x-access-token': `${token}`
          }
        });
      history.push('/profile');
    }
    catch (err) {
      alert(err.response.data);
    }
  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Me Leva Ai" />
          <h1>Estamos chegando ao fim</h1>
          <p>Verique se não ficou nenhum pertence do passageiro no Me Leva Aí!.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Histórico de Corridas
          </Link>

        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Veículo"
            value={props.location.state.vehicle.licensePlate}
            disabled={true}
          />
          <input
            type="Destino"
            placeholder="Destino"
            value={props.location.state.finishPlace}
            disabled={true}
          />
          <input
            placeholder="Hora de chegada"
            value={newHour}
            disabled={true}
          />

          <button className="button" type="submit">Finalizar Corrida</button>

        </form>
      </div>
    </div>
  );
}
