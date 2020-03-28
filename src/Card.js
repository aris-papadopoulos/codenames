import React, { useState } from 'react';
import './card.scss';
import { cards } from './cards';
import cardWord from './assets/cards/card.jpg';
import cardBlueWoman from './assets/cards/card-blue-woman.jpg';
import cardBlueMan from './assets/cards/card-blue-man.jpg';
import cardRedWoman from './assets/cards/card-red-woman.jpg';
import cardRedMan from './assets/cards/card-red-man.jpg';
import cardCivilianWoman from './assets/cards/card-civilian-woman.jpg';
import cardCivilianMan from './assets/cards/card-civilian-man.jpg';
import cardExecutor from './assets/cards/card-executor.jpg';

const Card = (props) => {

    const [card, setCard] = useState(0);

    const cardObject = {
        blue: [cardBlueWoman, cardBlueMan],
        red: [cardRedWoman, cardRedMan],
        civilian: [cardCivilianWoman, cardCivilianMan]
    }

    const changeCard = () => {
        if (card !== 4) {
            const newValue = card + 1;
            setCard(newValue);
        }
        else setCard(0)
    }

    const showCard = () => {
        // Randomly Pick Woman/Man card
        const i = Math.floor(Math.random() * 2);
        if (card === 0) {
            return cardWord;
        }
        else if (card === 1) {
            return cardObject.blue[i]
        }
        else if (card === 2) {
            return cardObject.red[i]
        }
        else if (card === 3) {
            return cardObject.civilian[i]
        }
        else if (card === 4) {
            return cardExecutor
        }
    }

    return (
        <div className="card" onClick={() => changeCard()}>
            <img src={showCard()} alt="card" />
            <span className="card__word">{(!card) ? cards[props.index] : null}</span>
        </div>
    );
}

export default Card;
