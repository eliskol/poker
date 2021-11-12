const Card = require('./card.js')
let card_list = []

for (i = 1; i <= 52; i++) {
    newCard = new Card((i - 1) % 4, (i % 13) + 1);
    card_list.push(newCard);
    // console.log(newCard.symbolicValue, newCard.suit);
}

console.log(card_list.filter((card) => card.suit == "heart"));
console.log(card_list.filter((card) => card.suit == "club").length);
