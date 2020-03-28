import React, { useState } from 'react';
import image from './agents.png';
import gr from './assets/flags/greece.svg';
import uk from './assets/flags/uk.svg';
import { texts } from './texts';
import { history, encodeGame } from './utilities';
import './App.scss';

function App() {
    
    const [lang, setLang] = useState('el');

    return (
        <div className="App">
            <header className="App-header">
                <div className="typewriter">
                    <code style={{animation: `typing 2.5s steps(${texts[lang].title.length * 2}, end), blink-caret .75s step-end infinite`}}>{texts[lang].title}</code>
                </div>
                <img src={image} className="image-logo" alt="logo" />
                <button className="create-game" onClick={() => createNewGame(lang)}>{texts[lang].newGame}</button>
            <div className="language">
                <p>{texts[lang].language}:</p>
                <div>
                    <button onClick={() => setLang('el')}><img className={(lang === 'el') ? 'active' : ''} src={gr} alt="greek flag"/></button>
                    <button onClick={() => setLang('en')}><img className={(lang === 'en') ? 'active' : ''} src={uk} alt="uk flag"/></button>
                </div>
            </div>
            </header>
        </div>
    );
}

const createNewGame = (lang) => {
    console.log(lang);
    const encodedGame = encodeGame(lang);
    history.push(`/game/${lang}/${encodedGame}`);
}

export default App;
