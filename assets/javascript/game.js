// 
// Hiphop Game
//

var hiddenWords = ['graffiti', 'breakdancing', 'emceeing', 'scratching', 'rapping', 
                    'battles', 'capoeira', 'zulu', 'culture', 'art', 
                    'music', 'rhythm', 'turntablism', 'beatboxing'];

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var guessNum = 15;
var winsNum = 0;

var currentWordText = document.getElementById("current-word");
var alreadyGuessedText = document.getElementById("already-guessed");
var guessText = document.getElementById("guesses");
var winsText = document.getElementById("wins");
var winningWordText = document.getElementById("winning-word");
var errorText = document.getElementById("error");

var alreadyGuessed = [];

guessText.textContent = guessNum;


// wrapping function here

var audio = new Audio('assets/music/ThePassionHiFi-SpanishWinter.mp3');
audio.volume = 0.1;
audio.loop = true;

// Kicks off game
document.onkeyup = function(event) {
  document.getElementById('pressanykey').style.display = 'none';
  document.getElementById('game-wrapper').style.display = 'block';
  newWord();
  //audio.play();
}

// Choosing new word and removes it from hiddenWords[] array.
// Also, places chosen work as underscores in page.
function newWord() {

  var computerChoice = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
  var computerChoiceMasked = computerChoice.replace(/[a-z]/gi, '_');

    console.log(computerChoice); 

  currentWordText.textContent = computerChoiceMasked;

  playGame(computerChoice,computerChoiceMasked);

}

// Main game interaction.
function playGame(computerChoice,computerChoiceMasked) {

  // Function runs when user presses a key.
  document.onkeyup = function(event) {

    // Determines which key pressed.
    var userGuess = event.key;
    var userGuessText = document.createTextNode(userGuess);
    var charNum = computerChoice.indexOf(userGuess); 

    // --> reate an array with all the indexes

    var alphabetNum = alphabet.indexOf(userGuess);
    var alreadyGuessedNum = alreadyGuessed.indexOf(userGuess);

    // Condition checkes whether character in alreadyGuessed[] array
    if (alreadyGuessedNum !== -1) {

      errorText.textContent = "Wise up. You already tried the letter \"" + userGuess + "\".";

    } else {

      alreadyGuessed.push(userGuess);

      // Condition checks whether userGuess is a letter.
      if (alphabetNum !== -1) {
        
        // Clears error message.
        errorText.innerHTML = "&nbsp;";

        // Condition checks whether userGuess is in computerChoice.
        if (charNum !== -1) {

          // --> wrap in FOR LOOP with NEW INDEXES ARRAY 

          // --> can create array instead of re-creating string variable
          var unMaskedLetter = computerChoiceMasked.substring(0, charNum) + userGuess + 
              computerChoiceMasked.substring(charNum + 1);
          currentWordText.textContent = unMaskedLetter;

        } else {

          alreadyGuessedText.appendChild(userGuessText);
          guessNum--;
          guessText.textContent = guessNum;

        }

      } else {

        errorText.textContent = "Don't be a simp. Words are spelled with letters.";

      }

    }

  }

}
// playGame();


