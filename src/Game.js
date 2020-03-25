import React, { useState, useEffect, useRef } from 'react';
import { cards } from './cards';
import './game.scss';

const Game = (props) => {

    const [game, setGame] = useState(null);
    const prevGame = usePrevious(game);

    useEffect(() => {
        const { id } = props.match.params;
        if (JSON.stringify(prevGame) !== JSON.stringify(game)) {
            const gameArray = decodeBase64(id);
            setGame(gameArray);
        }
    });
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="cards-wrapper">
                    {(game) ?
                    game.map(i => {
                        return <span key={i}>{cards[i]}</span>
                    })
                    : null}
                </div>
            </header>
        </div>
    );
}

function decodeBase64(string) {
    const decodedString = window.atob(string);
    const gameArray = JSON.parse(decodedString);

    return gameArray;
}

// Hook - Used to keep prevProps on functional components
function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

export default Game;
