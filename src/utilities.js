// Needed for passing history object and create redirects within redux actions
import { cards } from './cards.js';
// import { createBrowserHistory } from 'history';
// export const history = createBrowserHistory();
import createHashHistory from 'history/createHashHistory';
export const history = createHashHistory();


export function decodeBase64(string) {
    const decodedString = window.atob(string);
    const parsedValue = JSON.parse(decodedString);
    return parsedValue;
}

// Randomly picks 25 cards
function pickCards(lang) {
    let gameCards = [];
    while (gameCards.length < 25) {
        const card = Math.floor(Math.random() * cards[lang].length);
        if (!gameCards.includes(card)) {
            gameCards.push(card);
        }
    }
    return gameCards;
}

// Encodes picked cards and starts a new game
export function encodeGame(lang) {
    const cards = pickCards(lang);

    var myJSON = JSON.stringify(cards);
    const encodedGame = window.btoa(myJSON);

    return encodedGame;
}
