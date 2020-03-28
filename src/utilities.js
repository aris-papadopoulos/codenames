// Needed for passing history object and create redirects within redux actions
import { cards } from './cards.js';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();


export function decodeBase64(string) {
    const decodedString = window.atob(string);
    const parsedValue = JSON.parse(decodedString);
    return parsedValue;
}

// Randomly picks 25 cards
function pickCards() {
    let gameCards = [];
    while (gameCards.length < 25) {
        const card = Math.floor(Math.random() * cards.length);
        if (!gameCards.includes(card)) {
            gameCards.push(card);
        }
    }
    return gameCards;
}

// Encodes picked cards and starts a new game
export function encodeGame() {
    const cards = pickCards();

    var myJSON = JSON.stringify(cards);
    const encodedGame = window.btoa(myJSON);

    return encodedGame;
}
