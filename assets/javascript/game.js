// 
// Hiphop Game
//

var hiddenWords = ['graffiti', 'breakdance', 'emcee', 'scratch', 'rap', 
                    'battle', 'capoeira', 'zulu', 'culture', 'art', 
                    'music', 'rhythm', 'turntable', 'beatbox'];

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var remainingNum = 0;
var extraChancesNum = 5;
var winsNum = 0;

var currentWordText = document.getElementById("current-word");
var alreadyGuessedText = document.getElementById("already-guessed");
var remainingText = document.getElementById("guesses");
var winsText = document.getElementById("wins");
var winningWordText = document.getElementById("winning-word");
var winningWords = [];
var errorText = document.getElementById("error");

var alreadyGuessed = [];

winsText.textContent = winsNum;


// wrapping function here

var audio = new Audio('assets/music/ThePassionHiFi-SpanishWinter.mp3');
audio.volume = 0.1;
audio.loop = true;

// Kicks off game
// document.onkeyup = function(event) {
//   document.getElementById('pressanykey').style.display = 'none';
//   document.getElementById('game-wrapper').style.display = 'block';
//   reset();
//   //audio.play();
// }

// Choosing new word and removes it from hiddenWords[] array.
// Also, replaces computerChoice letters with underscores in page.
function reset() {

    //console.log(hiddenWords);
  var computerChoice = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
    console.log(computerChoice);
  var computerChoiceLength = computerChoice.length;
    //console.log('computerChoiceLength: ' + computerChoiceLength);
  var computerChoiceNum = hiddenWords.indexOf(computerChoice);
    //console.log('reset computerChoiceNum: ' + computerChoiceNum);
  var computerChoiceMasked = computerChoice.replace(/[a-z]/gi, '_');
    //console.log(computerChoiceMasked); 

  currentWordText.textContent = computerChoiceMasked;

  remainingNum = computerChoiceLength + extraChancesNum;
  remainingText.textContent = remainingNum;

  alreadyGuessed = [];
  alreadyGuessedText.textContent = '';

  playGame(computerChoice,computerChoiceNum,computerChoiceMasked);

}
reset();

// Main game interaction.
function playGame(computerChoice,computerChoiceNum,computerChoiceMasked) {

  // Function runs when user presses a key.
  document.onkeyup = function(event) {

    // Determines which key pressed.
    var userGuess = event.key;
      // console.log('userGuess: ' + userGuess);
    var userremainingText = document.createTextNode(userGuess);
      // console.log('userremainingText: ' + userremainingText);
    var charNum = computerChoice.indexOf(userGuess); 
      // console.log('charNum: ' + charNum);

    var alphabetNum = alphabet.indexOf(userGuess);
      // console.log('alphabetNum: ' + alphabetNum);
    var alreadyGuessedNum = alreadyGuessed.indexOf(userGuess);
      // console.log('alreadyGuessedNum: ' + alreadyGuessedNum);

    // Condition checkes whether character in alreadyGuessed[] array
    if (alreadyGuessedNum !== -1) {

      errorText.textContent = "Wise up. You already tried the letter \"" 
        + userGuess + "\".";

    } else {

      alreadyGuessed.push(userGuess);

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
            //console.log('computerChoiceMasked: ' + computerChoiceMasked);

          currentWordText.textContent = computerChoiceMasked.toUpperCase();

          if (computerChoiceMasked === computerChoice) {

            winsNum++;
            winsText.textContent = winsNum;

            winningWords.push(computerChoiceMasked);
              //console.log('winningWords: ' + winningWords);
            winningWordsUp = winningWords.join(', ');
            winningWordText.textContent = winningWordsUp.toUpperCase();

              //console.log('win computerChoiceNum: ' + computerChoiceNum);
            hiddenWords.splice(computerChoiceNum, 1);
              //console.log(' new hiddenWords: ' + hiddenWords);

            reset();

          }

        } else {

            //console.log('alreadyGuessed: ' + alreadyGuessed);
          alreadyGuessedStr = alreadyGuessed.join(', ').toUpperCase();
            //console.log('alreadyGuessedStr: ' + alreadyGuessedStr);
          alreadyGuessedText.textContent = alreadyGuessedStr;
          remainingNum--;
          remainingText.textContent = remainingNum;

          if (remainingNum === 0) {

            reset();

          }

        }

      } else {

        errorText.textContent = "Don't be a simp. Words are spelled with letters.";

      }

    }

  }

}
// playGame();


