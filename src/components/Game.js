import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { history, encodeGame, decodeBase64 } from '../utilities';
import { texts } from '../texts';
import Key from './Key';
import Card from './Card';
import '../styles/game.scss';

const Game = (props) => {
    
    const { addToast } = useToasts();

    const [game, setGame] = useState(null);
    const { lang, id } = props.match.params;
    const prevID = usePrevious(id);

    useEffect(() => {
        const { id } = props.match.params;
        if (prevID !== id) {
            const gameArray = decodeBase64(id);
            setGame(gameArray);
        }
    }, [props.match.params, prevID]);
    
    const createNewGame = (lang) => {
        const encodedGame = encodeGame(lang);
        history.push(`/game/${lang}/${encodedGame}`);
    }

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(window.location.href);
            addToast(texts[lang].copyURLsuccess, { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
        }
        catch(err) {
            addToast(texts[lang].copyURLfail, { appearance: 'error' })
        }
    }

    return (
        <div className="App">
            <header className="Game-header">
                <Link className="link" to={'/'}>{texts[lang].homepage}</Link>
                <div>
                    <button onClick={() => createNewGame(lang)}>{texts[lang].newGame}</button>
                    <button onClick={() => copyToClipboard()}>{texts[lang].copyURL}</button>
                </div>
            </header>
            <main>
                <div className="cards-wrapper">
                    {(game) ?
                    game.map(i => {
                        return <Card key={i} lang={lang} index={i} />
                    })
                    : null}
                </div>
                <Key lang={lang} />
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
