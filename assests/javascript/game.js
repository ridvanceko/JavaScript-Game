


var lettersGuessed = [];
var guessesLeft = 9;
var wins = 0;

// Math.random 
var computerGuess =
  String.fromCharCode(
    Math.round(Math.random() * 26) + 97
  );

console.log(computerGuess);
document.onkeydown = function (event) {
  var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

  addLetter(keyPress);

}

function addLetter(usersKeypress) {


  var repeatGuess = lettersGuessed.some(function (item) {
    return item === usersKeypress;
  })

//  Condition Rule
  if (repeatGuess) {
    alert(usersKeypress + " already guessed. Try again!");

    
  } else {
    lettersGuessed.push(usersKeypress);
    console.log(lettersGuessed);

   
    showLettersGuessed();
    guessMatch(usersKeypress);
  }

}

//Show letters guessed in browser
function showLettersGuessed() {
  var tempStr = lettersGuessed.join(", ");
  document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character) {

  console.log(character);
  console.log(computerGuess);

  if (character === computerGuess) {

    alert("You win!");
    wins = wins + 1;
    showWins();
    

  } else if (guessesLeft === 0) {
    alert("Lets start over.");
    resetVariables();

  } else {
    guessesLeft = guessesLeft - 1;
    showGuessesRemaining();
  }
}

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = wins;
}

//function to show guesses remaining
function showGuessesRemaining() {
  document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables() {
  lettersGuessed = [];
  guessesLeft = 10;
}

function startGame() {
  console.log("Game Start")
  showGuessesRemaining();
  showWins();
}



startGame();








