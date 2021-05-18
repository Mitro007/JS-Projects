'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');

// Player 0
const player0 = document.querySelector('.player--0');
const player0TotalScore = document.getElementById('score--0');
const player0CurrentScore = document.getElementById('current--0');

// Player 1
const player1 = document.querySelector('.player--1');
const player1TotalScore = document.getElementById('score--1');
const player1CurrentScore = document.getElementById('current--1');

const activePlayer = [true, false];

rollDiceBtn.addEventListener('click', rollDice);

holdBtn.addEventListener('click', updateTotalScore);

newGameBtn.onclick = () => {
  resetCurrentScore();
  player0TotalScore.textContent = 0;
  player1TotalScore.textContent = 0;
  // remove dice image
  diceImage.src = '';
  rollDiceBtn.onclick = rollDice;
  holdBtn.onclick = updateTotalScore;
};

function rollDice() {
  const num = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${num}.png`;
  if (num === 1) {
    switchPlayer();
  } else {
    updateCurrentScore(num);
  }
}

function switchPlayer() {
  resetCurrentScore();
  switchActivePlayerToInactive();
}

function switchActivePlayerToInactive() {
  if (activePlayer[0]) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer[0] = false;
    activePlayer[1] = true;
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    activePlayer[1] = false;
    activePlayer[0] = true;
  }
}

function resetCurrentScore() {
  if (activePlayer[0]) {
    player0CurrentScore.textContent = 0;
  } else {
    player1CurrentScore.textContent = 0;
  }
}

function updateCurrentScore(num) {
  if (activePlayer[0]) {
    player0CurrentScore.textContent =
      Number(player0CurrentScore.textContent) + num;
  } else {
    player1CurrentScore.textContent =
      Number(player1CurrentScore.textContent) + num;
  }
}

function updateTotalScore() {
  if (activePlayer[0]) {
    player0TotalScore.textContent =
      Number(player0TotalScore.textContent) +
      Number(player0CurrentScore.textContent);
  } else {
    player1TotalScore.textContent =
      Number(player1TotalScore.textContent) +
      Number(player1CurrentScore.textContent);
  }
  if (isGameCompleted()) {
    const playerName = activePlayer[0] ? 'Player 1' : 'Player 2';
    alert(`${playerName} has won!!`);
    rollDiceBtn.removeEventListener('click', rollDice);
    holdBtn.removeEventListener('click', updateTotalScore);
  } else {
    resetCurrentScore();
    switchActivePlayerToInactive();
  }
}

function isGameCompleted() {
  const totalScore = activePlayer[0]
    ? Number(player0TotalScore.textContent)
    : Number(player1TotalScore.textContent);
  return totalScore >= 100 ? true : false;
}
