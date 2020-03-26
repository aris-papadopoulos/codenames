import React from 'react';
import './card.scss';
import { cards } from './cards';
import card from './card.jpg';

const Card = (props) => {
  return (
    <div className="card">
        <img src={card} alt="card" />
        <span className="card__word">{cards[props.index]}</span>
    </div>
  );
}

export default Card;
