import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Projeto BID Simulado. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
