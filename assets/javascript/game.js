var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar ="";

document.onkeyup = function(event) {
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	var userGuess = event.key;

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || 
		(userGuess === "d") || (userGuess === "e") || (userGuess === "f") || 
	(userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
	(userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
	(userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
	(userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
	(userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
	(userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
	(userGuess === "y") || (userGuess === "z")) {

		if ((userGuess === computerGuess)) {
				wins++;
			}
			else if (userGuess !== computerGuess) {
				guessesLeft--;
		}

	var html = "<h1>The Psychic Game</h1>" + 
	"<p>Guess what letter I'm thinking of?</p>" + 
	"<p>Wins: " + wins + "</p>" + 
	"<p>Losses:" + losses + "</p>" +
	"<p>Guesses Left:" + guessesLeft + "</p>"
	"<p>Guesses So Far:" + guessesSoFar + "</p";

	document.querySelector(".container").innerHTML = html;

}
};




