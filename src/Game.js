import React, { useState, useEffect, useRef } from 'react';
import Key from './Key';
import Card from './Card';
import './game.scss';

const Game = (props) => {

    const [game, setGame] = useState(null);
    const [key, setKey] = useState(null);
    const prevGame = usePrevious(game);

    useEffect(() => {
        const { id } = props.match.params;
        if (JSON.stringify(prevGame) !== JSON.stringify(game)) {
            const gameArray = decodeBase64(id);
            setGame(gameArray);
            const key = createKey();
            setKey(key);
        }
    }, [props.match.params, prevGame, game]);
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="cards-wrapper">
                    {(game) ?
                    game.map(i => {
                        return <Card key={i} index={i} />
                    })
                    : null}
                </div>
                <Key data={key} />
            </header>
        </div>
    );
}

function decodeBase64(string) {
    const decodedString = window.atob(string);
    const gameArray = JSON.parse(decodedString);

    return gameArray;
}

function createKey() {
    // Define which team starts
    let  keyArray = [];
    const initNumber = Math.floor(Math.random() * 2);
    const initiator = (initNumber) ? 'blue' : 'red';

    // Create array of elements
    // "arr" has 8 blue cards, 8 red, 7 neutral and 1 executor card. 
    let elemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4];
    // The last card depends on which team starts first (team who starts first has 1 more card)
    (initiator === 'blue') ? elemsArray.push(1) : elemsArray.push(2)
    console.log(initiator);

    // Create random map array
    while (keyArray.length < 25) {
        const index = Math.floor(Math.random() * elemsArray.length);
        keyArray.push(elemsArray[index]);
        elemsArray.splice(index, 1);
    }

    return keyArray;
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
