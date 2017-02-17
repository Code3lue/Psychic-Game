var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var computerLetters = null;
var wins = 0;
var losses = 0;
var totalGuesses = 9;
var guessesLeft = 9;


 
    var updateGuessesLeft = function(){
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    };
   var updateComputerLetters = function() {
     
     this.computerLetters = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
   };
   var updateGuessesSoFar = function() {
     
     document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
   };

var html = "<h1>The Psychic Game</h1>" + 
	"<p>Guess what letter I'm thinking of?</p>" + 
	"<p>Wins: " + wins + "</p>" + 
	"<p>Losses: " + losses + "</p>";

	document.querySelector(".container").innerHTML = html;


var reset = function() 
{
     totalGuesses = 9;
     guessesLeft = 9;
     guessedLetters = [];
     updateComputerLetters();
     updateGuessesLeft();
     updateGuessesSoFar();
};

  updateComputerLetters();
  updateGuessesLeft();    

document.onkeyup = function(event) {

	guessesLeft--;

	var computerChoices = String.fromCharCode(event.keyCode).toLowerCase();

	var userGuess = event.key;

	guessedLetters.push(userGuess);

	updateGuessesLeft();
     updateGuessesSoFar();

	//if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || 
	//	(userGuess === "d") || (userGuess === "e") || (userGuess === "f") || 
	//(userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
	//(userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
	//(userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
	//(userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
	//(userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
	//(userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
	//(userGuess === "y") || (userGuess === "z")) {

		if (userGuess === computerLetters) {
				wins++;
				reset();
			}

		if (guessesLeft === 0) {
			losses++;
			reset();
		}
		

	



}




