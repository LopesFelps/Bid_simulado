import React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';
import './RegistrationPage.css';

const RegistrationPage = ({ onAddPlayer }) => {
  return (
    <div className="registration-page">
      <h2>Formulário de Registro</h2>
      <p>Preencha os dados abaixo para cadastrar um novo jogador no sistema.</p>
      <FormComponent onAddPlayer={onAddPlayer} />
    </div>
  );
};

export default RegistrationPage;
