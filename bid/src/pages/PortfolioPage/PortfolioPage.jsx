import React from 'react';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './PortfolioPage.css';

const PortfolioPage = ({ players }) => {
  return (
    <div className="portfolio-page">
      <h2>Galeria de Jogadores Cadastrados</h2>
      {players.length === 0 ? (
        <p>Nenhum jogador cadastrado ainda.</p>
      ) : (
        <div className="player-gallery">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
