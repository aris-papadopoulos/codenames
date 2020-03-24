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
    let  mapArray = [];
    const initNumber = Math.floor(Math.random() * 2);
    const initiator = (initNumber) ? 'blue' : 'red';

    // Create array of elements
    // "arr" has 8 blue cards, 8 red, 7 neutral and 1 executor card. 
    let elemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4];
    // The last card depends on which team starts first (team who starts first has 1 more card)
    (initiator === 'blue') ? elemsArray.push(1) : elemsArray.push(2)
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
