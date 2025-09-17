// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './App.css';

function App() {
  // Estado com jogadores fictícios para iniciar a galeria
  const [players, setPlayers] = useState([
    { nome: 'Arthur Viana', identificacao: 'BR12345', tipoContrato: 'Profissional', dataNascimento: '2004-03-15' },
    { nome: 'Beatriz Campos', identificacao: 'BR67890', tipoContrato: 'Amador', dataNascimento: '2002-11-22' },
    { nome: 'Carlos Eduardo', identificacao: 'BR54321', tipoContrato: 'Profissional', dataNascimento: '2001-07-08' },
  ]);

  const handleAddPlayer = (newPlayer) => {
    setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/portfolio"
              render={() => <PortfolioPage players={players} />}
            />
            <Route
              path="/register"
              render={() => <RegistrationPage onAddPlayer={handleAddPlayer} />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
