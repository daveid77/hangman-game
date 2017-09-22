# Hangman Game

Week Two Homework Part 1: [JavaScript Assignment](http://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/09-11-2017-UCB-Class-Repository-FSF-FT/blob/master/02-week/homework/part-1/Instructions/homework-instructions.md).

### No Prerequisites, Installation, or Testing Instructions required

## Misc Notes

* Javascript doesn't look clean (and may even seem scary).  Ran out of time to refactor and polish what's there.  Spent too much time troubleshooting one particular area of functionality. The scripting was not organized into object, as suggested for bonus.  But the game works, with enhancements:
  * Winning words appear under score.
  * Short pause built in after word guessed correctly, so user can see full word, as opposed to correct word disappearing immediately as next word to guess loads.
  * Repeating correct words would be good maybe for small children learning to spell, but not adults. To avoid repeated words during full game play, words guessed correctly are removed from array. A better solution if time allowed would probably be to compare words, correct words with array.  Also, there is currently no final behavior for when array of 15 words runs out, so this aspect could use more work.  
  * Error messages for repeated letters, non-letters. 
  * Other subtle enhancements to make game more unbreakable or "idiot proof."
  * Wanted to include song for each win and made progress toward that, but time prevented full implementation.  Background audio was included, which can be annoying, so mute control included in red. 

## Author

* **David Morse** ([dbmarshall.github.io](https://dbmarshall.github.io))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

