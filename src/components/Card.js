import React, { useState } from 'react';
import '../styles/card.scss';
import { cards } from '../cards';
import word from '../assets/cards/word.jpg';
import blue_00 from '../assets/cards/coder-blue-00.jpg';
import blue_01 from '../assets/cards/coder-blue-01.jpg';
import blue_02 from '../assets/cards/coder-blue-02.jpg';
import blue_03 from '../assets/cards/coder-blue-03.jpg';
import red_00 from '../assets/cards/coder-red-00.jpg';
import red_01 from '../assets/cards/coder-red-01.jpg';
import red_02 from '../assets/cards/coder-red-02.jpg';
import red_03 from '../assets/cards/coder-red-03.jpg';
import civilian_00 from '../assets/cards/civilian-00.jpg';
import civilian_01 from '../assets/cards/civilian-01.jpg';
import hacker from '../assets/cards/hacker.jpg';

const Card = (props) => {

    const [card, setCard] = useState(0);

    const cardObject = {
        blue: [blue_00, blue_01, blue_02, blue_03],
        red: [red_00, red_01, red_02, red_03],
        civilian: [civilian_00, civilian_01]
    }

    const changeCard = () => {
        if (card !== 4) {
            const newValue = card + 1;
            setCard(newValue);
        }
        else setCard(0)
    }

    const showCard = () => {
        if (card === 0) {
            return word;
        }
        else if (card === 1) {
            // Randomly pick card
            const i = Math.floor(Math.random() * 4);
            return cardObject.blue[i]
        }
        else if (card === 2) {
            // Randomly pick card
            const i = Math.floor(Math.random() * 4);
            return cardObject.red[i]
        }
        else if (card === 3) {
            // Randomly pick card
            const i = Math.floor(Math.random() * 2);
            return cardObject.civilian[i]
        }
        else if (card === 4) {
            return hacker
        }
    }

    return (
        <div className="card" onClick={() => changeCard()}>
            <img src={showCard()} alt="card" />
            <span className="card__word">{(!card) ? cards[props.lang][props.index] : null}</span>
        </div>
    );
}

export default Card;
