//Defines cards variables
var cards = ['queen', 'queen', 'king', 'king'];
//Defines cards in play
var cardsInPlay = [];

//Checks for equality between two cards
var isMatch = function(cards) {
	if (cards [0] === cards [1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}	

//Checks if two cards are in play
function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card')); 
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img src="king.jpg">';
		} else {
			this.innerHTML = '<img src="queen.jpg">';
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}

//Sets a variable to game-board 
var board = document.getElementById('game-board');

//Function that contains code for generating cards
var createCards = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

//Fires createCards function so it runs 
createCards();