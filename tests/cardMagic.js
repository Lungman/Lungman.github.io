function initDeck(noDecks){
let suitNames = ["Clubs","Diamonds","Hearts","Spades"];
let cardRanks = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
let cardValues = [11,2,3,4,5,6,7,8,9,10,10,10,10];
let cards = [];

// Declare however many decks you want, i = deck number, j = suit, k = face value

// Loop however many decks you want
for (let i=0; i<noDecks; i++){
	// Loop through each suit
	for (let j=0; j<4; j++){
		// Loop through each face card
		for (let k=0; k<13; k++){
			let card = {
			"suit":suitNames[j],
			"suitNo":j,
			"rank":cardRanks[k],
			"rankNo":k,
			"value":cardValues[k]
			}
			cards.push(card);
		}
	}	
}
return cards;
}

function shuffle(deck){
	for (let i = 0; i<deck.length; i++){
		let randomCard=Math.floor(Math.random()*deck.length);
		[deck[i],deck[randomCard]]=[deck[randomCard],deck[i]];
	}
	return deck
};