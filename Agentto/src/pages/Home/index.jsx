import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Calendario from '../../components/calendario';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bem-vindo à Agentto</h2>
      <p>Gerencie seus eventos com facilidade!</p>

      <div className="home-grid">
        <Link to="/evento-detalhes" className="grid-item">Eventos</Link>
        <Link to="/financeiro" className="grid-item">Financeiro</Link>
        <Link to="/prestadores" className="grid-item">Prestadores de Serviço</Link>
      </div>

      <div className="calendar">
        <h3>Calendário de Eventos</h3>
        <Calendario />
      </div>
    </div>
  );
};

export default Home;
