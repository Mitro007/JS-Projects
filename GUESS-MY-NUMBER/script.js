'use strict';

// Emoji Shortcut : Windows + .
const successMessage = '🎉 Correct Number!';
const failureMessageForHighGuess = '📈 Too High!';
const failureMessageForLowGuess = '📉 Too Low!';

const messageNode = document.querySelector('.message');
const scoreNode = document.querySelector('.score');
const highScoreNode = document.querySelector('.highscore');
const questionMarkNode = document.querySelector('.number');

const gameStartMessage = messageNode.textContent;
const questionMarkSymbol = questionMarkNode.textContent;

let number = Math.floor(Math.random() * 21);

const checkButtonNode = document.querySelector('.btn.check');

checkButtonNode.addEventListener('click', checkForEquality);

function checkForEquality() {
  // console.log(`${typeof input} :: ${input}`);
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    messageNode.textContent = '⛔ No Number!';
  } else if (guessedNumber === number) {
    messageNode.textContent = successMessage;
    highScoreNode.textContent = scoreNode.textContent;
    questionMarkNode.textContent = guessedNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // to indicate game has ended
    checkButtonNode.removeEventListener('click', checkForEquality);
  } else {
    // Wrong Guess
    if (scoreNode.textContent > 1) {
      messageNode.textContent =
        guessedNumber > number
          ? failureMessageForHighGuess
          : failureMessageForLowGuess;
      // automatic type coercion
      scoreNode.textContent--;
    } else {
      messageNode.textContent = '💥 You lost the game!';
      scoreNode.textContent = 0;
    }
  }
}

document.querySelector('.btn.again').addEventListener('click', initializeGame);

function initializeGame() {
  number = Math.floor(Math.random() * 21);
  messageNode.textContent = gameStartMessage;
  scoreNode.textContent = 20;
  // clearing/resetting the input field
  document.querySelector('.guess').value = '';
  questionMarkNode.textContent = questionMarkSymbol;
  // we need to add because we are removing it in case of correct guess
  checkButtonNode.addEventListener('click', checkForEquality);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
