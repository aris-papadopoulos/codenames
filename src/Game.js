import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { history, encodeGame, decodeBase64 } from './utilities';
import Key from './Key';
import Card from './Card';
import './game.scss';

const Game = (props) => {
    
    const { addToast } = useToasts();

    const [game, setGame] = useState(null);
    const { id } = props.match.params;
    const prevID = usePrevious(id);

    useEffect(() => {
        const { id } = props.match.params;
        if (prevID !== id) {
            const gameArray = decodeBase64(id);
            setGame(gameArray);
        }
    }, [props.match.params, prevID]);
    
    const createNewGame = () => {
        const encodedGame = encodeGame();
        history.push(`/game/${encodedGame}`);
    }

    const copyToClipboard = (text) => {
        try {
            navigator.clipboard.writeText(window.location.href);
            addToast('Το URL αντιγράφηκε στο clipboard. Τώρα μπορείτε να το μοιράσετε στους συμπαίκτες σας', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
        }
        catch(err) {
            addToast('Σφάλμα αντιγραφής URL', { appearance: 'error' })
        }
    }

    return (
        <div className="App">
            <header className="Game-header">
                {/* <code>{title}</code> */}
                <Link className="link" to={'/'}>Αρχική</Link>
                <div>
                    <button onClick={() => createNewGame()}>Νέο παιχνίδι</button>
                    <button onClick={() => copyToClipboard()}>Αντιγραφή URL</button>
                </div>
            </header>
            <main>
                <div className="cards-wrapper">
                    {(game) ?
                    game.map(i => {
                        return <Card key={i} index={i} />
                    })
                    : null}
                </div>
                <Key />
            </main>
        </div>
    );
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
