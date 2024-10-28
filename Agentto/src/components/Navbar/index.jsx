import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/evento-detalhes">Eventos</Link></li>
        <li><Link to="/financeiro">Financeiro</Link></li>
        <li><Link to="/prestadores">Prestadores de Serviço</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
