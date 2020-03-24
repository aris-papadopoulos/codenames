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
      </header>
    </div>
  );
}

// Randomly picks 25 cards to start a new game
function createGame() {
    const cards = pickCards();
    const map = createMap();

    console.log(cards, map);
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

function createMap() {
    // Define which team starts
    let i, elemsArray = [], mapArray = [];
    const initNumber = Math.floor(Math.random() * 2);
    const initiator = (initNumber) ? 'blue' : 'red';

    // Create array of elements
    const blue = (initiator === 'blue') ? 9 : 8;
    const red = (initiator === 'red') ? 9 : 8;
    for (i = 0; i < blue; i++) elemsArray.push(1);
    for (i = 0; i < red; i++) elemsArray.push(2);
    for (i = 0; i < 7; i++) elemsArray.push(3);
    elemsArray.push(4);
    console.log(initiator);

    // Create random map array
    while (mapArray.length < 25) {
        const index = Math.floor(Math.random() * elemsArray.length);
        mapArray.push(elemsArray[index]);
        elemsArray.splice(index, 1);
    }

    return mapArray;
}

export default App;
