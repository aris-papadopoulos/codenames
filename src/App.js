import React from 'react';
import image from './agents.png';
import { cards } from './cards';
import history from './utilities';
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
      </header>
    </div>
  );
}

// Randomly picks 25 cards to start a new game
function createGame() {
    const cards = pickCards();

    var myJSON = JSON.stringify(cards);
    const encodedGame = window.btoa(myJSON);

    console.log(myJSON, encodedGame);
    history.push(`/game/${encodedGame}`);
}

function pickCards() {
    let gameCards = [];
    while (gameCards.length < 25) {
        const card = Math.floor(Math.random() * cards.length);
        if (!gameCards.includes(card)) {
            gameCards.push(card);
        }
    }
    return gameCards;
}


export default App;
