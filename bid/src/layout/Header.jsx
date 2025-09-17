import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/" className="logo-container">
        <h1>BID Simulado</h1>
      </Link>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Início</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Galeria</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Registrar Jogador</NavLink>
      </nav>
    </header>
  );
};

export default Header;
