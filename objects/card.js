suits = ["spade", "heart", "club", "diamond"]

class Card {
    constructor(suitNumber, numericalValue) {
        this.suit = suits[suitNumber];
        this.numericalValue = numericalValue;
        
        if (numericalValue > 10) {
            this.symbolicValue = ['J', 'Q', "K"][numericalValue - 10 - 1];
        }

        else if (numericalValue == 1) {
            this.symbolicValue = "A";
        }

        else {
            this.symbolicValue = numericalValue;
        }


    }
}

module.exports = Card;