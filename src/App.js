import React from 'react';
import image from './agents.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Codenames</code>
        </p>
        <img src={image} className="image-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Game
        </a>
      </header>
    </div>
  );
}

export default App;
