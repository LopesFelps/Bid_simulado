import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <div className="card-header">
        <h3>{player.nome}</h3>
      </div>
      <div className="card-body">
        <p><strong>ID:</strong> {player.identificacao}</p>
        <p><strong>Contrato:</strong> {player.tipoContrato}</p>
        <p><strong>Nascimento:</strong> {new Date(player.dataNascimento).toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
