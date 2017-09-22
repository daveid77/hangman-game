// 
// Hiphop Game
//

var hiddenWords = ['graffiti', 'breakdance', 'emcee', 'scratch', 'rap', 
                    'battle', 'capoeira', 'zulu', 'culture', 'art', 
                    'music', 'rhythm', 'turntable', 'beatbox', 'elements'];

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var remainingNum = 0;
var extraChancesNum = 5;
var winsNum = 0;

var currentWordText = document.getElementById("current-word");
var alreadyGuessedText = document.getElementById("already-guessed");
var remainingText = document.getElementById("guesses");
var winsText = document.getElementById("wins");
var winningWordText = document.getElementById("winning-word");
var errorText = document.getElementById("error");

var winningWords = [];
var alreadyGuessed = [];

winsText.textContent = winsNum;


// wrapping function here

var audio = new Audio('assets/music/ThePassionHiFi-SpanishWinter.mp3');
audio.volume = 0.1;
audio.loop = true;

// Kicks off game
document.onkeyup = function(event) {
  document.getElementById('pressanykey').style.display = 'none';
  document.getElementById('game-wrapper').style.display = 'block';
  reset();
  // audio.play();
}

// Choosing new word and removes it from hiddenWords[] array.
// Also, replaces computerChoice letters with underscores in page.
function reset() {

  var computerChoice = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
    console.log(computerChoice);
  var computerChoiceLength = computerChoice.length;
  var computerChoiceNum = hiddenWords.indexOf(computerChoice);
  var computerChoiceMasked = computerChoice.replace(/[a-z]/gi, '_');

  currentWordText.textContent = computerChoiceMasked;

  remainingNum = computerChoiceLength + extraChancesNum;
  remainingText.textContent = remainingNum;

  alreadyGuessed = [];

  alreadyGuessedText.textContent = '';
  errorText.textContent = '';

  playGame(computerChoice,computerChoiceNum,computerChoiceMasked);

}
//reset();

// Main game interaction.
function playGame(computerChoice,computerChoiceNum,computerChoiceMasked) {

  // Function runs when user presses a key.
  document.onkeyup = function(event) {

    // Determines which key pressed.
    var userGuess = event.key;
    var userremainingText = document.createTextNode(userGuess);
    var charNum = computerChoice.indexOf(userGuess);
    var alphabetNum = alphabet.indexOf(userGuess);
    var alreadyGuessedNum = alreadyGuessed.indexOf(userGuess);

    // Condition checkes whether character in alreadyGuessed[] array
    if (alreadyGuessedNum !== -1) {

      errorText.textContent = "Wise up. You already tried the letter \"" 
        + userGuess + "\".";

    } else {

      // Condition checks whether userGuess is a letter.
      if (alphabetNum !== -1) {
        
        // Clears error message.
        errorText.innerHTML = "";

        // Condition checks whether userGuess is in computerChoice.
        if (charNum !== -1) {

          var charArray = computerChoiceMasked.split('');
          for(var i = 0; i < computerChoice.length; i++){
            if(computerChoice[i] === userGuess){
              charArray[i] = userGuess;
            }
          }
          computerChoiceMasked = charArray.join('');

          currentWordText.textContent = computerChoiceMasked.toUpperCase();

          if (computerChoiceMasked === computerChoice) {

            winsNum++;
            winsText.textContent = winsNum;

            winningWords.push(computerChoiceMasked);
            winningWordsUp = winningWords.join(', ');
            winningWordText.textContent = winningWordsUp.toUpperCase();

            // removes word from hiddenWords[] array if guessed correctly
            hiddenWords.splice(computerChoiceNum, 1);

            alreadyGuessedText.textContent = '';

            // delays reset so user can see full word before it clears
            setTimeout(function(){ reset(); }, 4000);

          }

        } else {

          alreadyGuessed.push(userGuess);
          
          alreadyGuessedStr = alreadyGuessed.join(', ').toUpperCase();
          alreadyGuessedText.textContent = alreadyGuessedStr;
          remainingNum--;
          remainingText.textContent = remainingNum;

          if (remainingNum === 0) {

            errorText.textContent = "Mic check. You ran out of chances for that word.";

            // delays reset so user can see message before it clears
            setTimeout(function(){ reset(); }, 4000);

          }

        }

      } else {

        errorText.textContent = "Don't be a simp. Words are spelled with letters.";

      }

    }

  }

}
// playGame();


