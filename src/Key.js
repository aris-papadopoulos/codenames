import React, { useState, useEffect } from 'react';
import './key.scss';

const Key = () => {
    
    const [key, setKey] = useState({encoded: ''});

    useEffect(() => {
        if (!key.array) {
            createKey();
        }
    }, [key, setKey]);

    const createKey = () => {
        let key = createNewKey();
        console.log(key);

        var myJSON = JSON.stringify(key);
        const encoded = window.btoa(myJSON);
        key = {...key, encoded}

        console.log(key);

        setKey(key);
    }

    return (
        <div className="key-wrapper">
            <div className="key">
                <div className="key__outer">
                    <div className="key__inner">
                        {(key.array) ?
                            key.array.map((el, i) => {
                                let classValue;
                                if      (el === 1) { classValue = 'blue' }
                                else if (el === 2) { classValue = 'red' }
                                else if (el === 3) { classValue = 'neutral' }
                                else if (el === 4) { classValue = 'executor' }
                            return <span key={i} className={`key-element ${classValue}`}></span>
                        })
                        : null}
                            <span className={`indicator ${key.init} top`}></span>
                            <span className={`indicator ${key.init} bottom`}></span>
                            <span className={`indicator ${key.init} left`}></span>
                            <span className={`indicator ${key.init} right`}></span>
                    </div>
                </div>
            </div>
            <div className="key-form">
                <button onClick={() => createKey()}>Δημιουργία</button>
                <button>Εισαγωγή</button>
                <input type="text" className="key__code" defaultValue={key.encoded} onChange={null} />
            </div>
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
