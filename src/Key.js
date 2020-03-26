import React, { useState, useEffect } from 'react';
import './key.scss';

const initialKey = {encoded: ''};

const Key = () => {
    
    const [key, setKey] = useState(initialKey);
    const [buttonSelection, setButtonSelection] = useState(false);
    const [insertion, setInsertion] = useState('');

    const createKey = () => {
        let key = createNewKey();

        var myJSON = JSON.stringify(key);
        const encoded = window.btoa(myJSON);
        key = {...key, encoded}

        setKey(key);
    }

    const renderButton = () => {
        if (!buttonSelection) {
            return  <>
                        <button onClick={() => { setButtonSelection(1); createKey() }}>Δημιουργία</button>
                        <button onClick={() => setButtonSelection(2)}>Εισαγωγή</button>
                    </>
        }
        else if (buttonSelection === 1) {
            return  <>
                        <button onClick={navigator.clipboard.writeText(key.encoded)}>Αντιγραφή</button>
                        <button onClick={() => { setButtonSelection(false); setKey(initialKey) }}>Επαναφορά</button>
                    </>
        }
        else if (buttonSelection === 2) {
            return  <>
                        <input type="text" className="key__code" value={insertion} onChange={e => setInsertion(e.target.value)}/>
                        <button onClick={null} className="go">OK</button>                        
                        <button onClick={() => { setButtonSelection(false); }}>Πίσω</button>
                    </>
        }
    }

    return (
        <div className="key-wrapper">
            <h2>Κλειδί αρχικατάσκοπου</h2>
            <div className="key-form">
                {renderButton()}
            </div>
            {(key.array) ?
                <div className="key">
                    <div className="key__outer">
                            <div className="key__inner">
                                {key.array.map((el, i) => {
                                        let classValue;
                                        if      (el === 1) { classValue = 'blue' }
                                        else if (el === 2) { classValue = 'red' }
                                        else if (el === 3) { classValue = 'neutral' }
                                        else if (el === 4) { classValue = 'executor' }
                                    return <span key={i} className={`key-element ${classValue}`}></span>
                                })}
                                <span className={`indicator ${key.init} top`}></span>
                                <span className={`indicator ${key.init} bottom`}></span>
                                <span className={`indicator ${key.init} left`}></span>
                                <span className={`indicator ${key.init} right`}></span>
                            </div>
                    </div>
                </div>
            : null}
        </div>
    );
}

function createNewKey() {
    // Define which team starts
    let  keyArray = [];
    const initNumber = Math.floor(Math.random() * 2);
    const initiator = (initNumber) ? 'blue' : 'red';

    // Create array of elements
    // "arr" has 8 blue cards, 8 red, 7 neutral and 1 executor card. 
    let elemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4];
    // The last card depends on which team starts first (team who starts first has 1 more card)
    (initiator === 'blue') ? elemsArray.push(1) : elemsArray.push(2);

    // Create random map array
    while (keyArray.length < 25) {
        const index = Math.floor(Math.random() * elemsArray.length);
        keyArray.push(elemsArray[index]);
        elemsArray.splice(index, 1);
    }

    const keyObject = {
        array: keyArray,
        init: initiator
    }

    return keyObject;
}

export default Key;
