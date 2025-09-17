import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Bem-vindo ao Sistema de Registro de Jogadores</h2>
      <p>Uma simulação inspirada no Boletim Informativo Diário (BID) da CBF.</p>
      <div className="home-actions">
        <Link to="/portfolio" className="action-button">Ver Jogadores</Link>
        <Link to="/register" className="action-button primary">Registrar Novo Jogador</Link>
      </div>
    </div>
  );
};

export default HomePage;
