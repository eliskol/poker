const Card = require('./card.js')
let Deck = []

for (i = 1; i <= 52; i++) {
    newCard = new Card((i - 1) % 4, (i % 13) + 1);
    Deck.push(newCard);
}

module.exports = Deck;