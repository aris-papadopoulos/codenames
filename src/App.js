import React from 'react';
import image from './agents.png';
import { cards } from './cards';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Codenames</code>
        </p>
        <img src={image} className="image-logo" alt="logo" />
        <button className="create-game" onClick={createGame}>
          New Game
        </button>
        <button className="create-map" onClick={null}>
          Create Map
        </button>
      </header>
    </div>
  );
}

// Randomly picks 25 cards to start a new game
function createGame() {
    const gameCards = pickCards();

    console.log(gameCards);
}

function pickCards() {
    let gameCards = [];
    while (gameCards.length < 24) {
        const card = Math.floor(Math.random() * cards.length);
        if (!gameCards.includes(card)) {
            gameCards.push(card);
        }
    }
    return gameCards;
}

export default App;
