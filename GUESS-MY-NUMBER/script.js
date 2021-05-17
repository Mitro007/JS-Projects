'use strict';

// Emoji Shortcut : Windows + .
const successMessage = '🎉 Correct Number!';
const failureMessageForHighGuess = '📈 Too High!';
const failureMessageForLowGuess = '📉 Too Low!';

const messageNode = document.querySelector('.message');
const inputNode = document.querySelector('.guess');
const scoreNode = document.querySelector('.score');
const highScoreNode = document.querySelector('.highscore');

const gameStartMessage = messageNode.textContent;
// console.log(messageNode.textContent);
// console.log(typeof scoreNode.textContent);
// console.log(highScoreNode.textContent);

let number = Math.floor(Math.random() * 21);
console.log(number);

let input;

inputNode.addEventListener('input', () => {
  input = inputNode.value;
});

const checkButtonNode = document.querySelector('.btn.check');

checkButtonNode.addEventListener('click', checkForEquality);

function checkForEquality() {
  // console.log(`${typeof input} :: ${input}`);
  const guessedNumber = Number(input);
  if (guessedNumber === number) {
    messageNode.textContent = successMessage;
    highScoreNode.textContent = scoreNode.textContent;
    // to indicate game has ended
    checkButtonNode.removeEventListener('click', checkForEquality);
  } else if (guessedNumber > number) {
    messageNode.textContent = failureMessageForHighGuess;
    // automatic type coercion
    scoreNode.textContent--;
  } else {
    messageNode.textContent = failureMessageForLowGuess;
    scoreNode.textContent--;
  }
}

document.querySelector('.btn.again').addEventListener('click', initializeGame);

function initializeGame() {
  messageNode.textContent = gameStartMessage;
  scoreNode.textContent = 20;
  // we need to add because we are removing it in case of correct guess
  checkButtonNode.addEventListener('click', checkForEquality);
  number = Math.floor(Math.random() * 21);
  console.log(number);
}
