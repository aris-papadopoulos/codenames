import React from 'react';
import image from './agents.png';
// import { cards } from './cards';
import { history, encodeGame } from './utilities';
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
                <button className="create-game" onClick={createNewGame}>{newGame}</button>
            </header>
        </div>
    );
}

const createNewGame = () => {
    const encodedGame = encodeGame();
    history.push(`/game/${encodedGame}`);
}

export default App;
