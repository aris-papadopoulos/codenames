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
        <button className="create-map" onClick={createMap}>
          Create Map
        </button>
      </header>
    </div>
  );
}

export default App;
