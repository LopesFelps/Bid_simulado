import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import SubmitButton from '../SubmitButton/SubmitButton';
import './FormComponent.css';

const FormComponent = ({ onAddPlayer }) => {
  const [playerData, setPlayerData] = useState({
    nome: '',
    hora: '',
    dataNascimento: '',
    tipoContrato: '',
    identificacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlayer(playerData);
    alert(`Jogador ${playerData.nome} adicionado com sucesso!`);
    setPlayerData({ nome: '', hora: '', dataNascimento: '', tipoContrato: '', identificacao: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <InputField label="Nome Completo" type="text" name="nome" value={playerData.nome} onChange={handleChange} />
      <InputField label="Hora do Registro" type="time" name="hora" value={playerData.hora} onChange={handleChange} />
      <InputField label="Data de Nascimento" type="date" name="dataNascimento" value={playerData.dataNascimento} onChange={handleChange} />
      <InputField label="Tipo de Contrato" type="text" name="tipoContrato" value={playerData.tipoContrato} onChange={handleChange} />
      <InputField label="Identificação (ID)" type="text" name="identificacao" value={playerData.identificacao} onChange={handleChange} />
      <SubmitButton text="Adicionar Jogador" />
    </form>
  );
};

export default FormComponent;
