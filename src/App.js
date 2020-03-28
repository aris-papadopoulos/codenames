import React from 'react';
import image from './agents.png';
import { cards } from './cards';
import history from './utilities';
import './App.scss';

const title = 'Κωδική Ονομασία';
const newGame = 'Νέο παιχνίδι';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="typewriter">
                    <code style={{animation: `typing 2.75s steps(${title.length * 2}, end), blink-caret .75s step-end infinite`}}>{title}</code>
                </div>
                <img src={image} className="image-logo" alt="logo" />
                <button className="create-game" onClick={createGame}>{newGame}</button>
            </header>
        </div>
    );
}

// Randomly picks 25 cards to start a new game
function createGame() {
    const cards = pickCards();

    var myJSON = JSON.stringify(cards);
    const encodedGame = window.btoa(myJSON);

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
