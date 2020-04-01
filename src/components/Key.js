import React, { useState } from 'react';
import { decodeBase64 } from '../utilities';
import { useToasts } from 'react-toast-notifications';
import { texts } from '../texts';
import '../styles/key.scss';


const initialKey = {encoded: ''};

const Key = (props) => {

    const { lang } = props;
    
    const [key, setKey] = useState(initialKey);
    const [buttonSelection, setButtonSelection] = useState(false);
    const [insertion, setInsertion] = useState('');

    const { addToast } = useToasts();

    const createKey = () => {
        let key = createNewKey();

        var myJSON = JSON.stringify(key);
        const encoded = window.btoa(myJSON);
        key = {...key, encoded}

        setKey(key);
    }

    const decodeKey = (key) => {
        const decodedKey = decodeBase64(key);
        setKey(decodedKey);
        setButtonSelection(1);
    }

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(key.encoded);
            addToast(texts[lang].copyKeySuccess, { appearance: 'success', autoDismiss: true })
        }
        catch(err) {
            addToast(texts[lang].copyKeyFail, { appearance: 'error' })
        }
    }

    const renderButton = () => {
        if (!buttonSelection) {
            return  <>
                        <button onClick={() => { setButtonSelection(1); createKey() }}>{texts[lang].create}</button>
                        <button onClick={() => setButtonSelection(2)}>{texts[lang].insert}</button>
                    </>
        }
        else if (buttonSelection === 1) {
            return  <>
                        <button onClick={() => copyToClipboard(key.encoded)}>{texts[lang].copy}</button>
                        <button onClick={() => { setButtonSelection(false); setKey(initialKey) }}>{texts[lang].reset}</button>
                    </>
        }
        else if (buttonSelection === 2) {
            return  <>
                        <input type="text" className="key__code" value={insertion} onChange={e => setInsertion(e.target.value)}/>
                        <button onClick={() => decodeKey(insertion)} className="go">{texts[lang].ok}</button>                        
                        <button onClick={() => { setButtonSelection(false); }}>{texts[lang].back}</button>
                    </>
        }
    }

    return (
        <div className="key-wrapper">
            <h2>{texts[lang].spymasterKey}</h2>
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
