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

// const activePlayer = [true, false];

// can use a varibale to store 0 & 1 to represent which player is active
let activePlayer = 0;

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

  // if not present, remove does nothing
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  // Set Player0 as Starting player
  // activePlayer[0] = true;
  // activePlayer[1] = false;
  activePlayer = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
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
  // if (activePlayer[0]) {
  //   player0.classList.remove('player--active');
  //   player1.classList.add('player--active');
  //   activePlayer[0] = false;
  //   activePlayer[1] = true;
  // } else {
  //   player1.classList.remove('player--active');
  //   player0.classList.add('player--active');
  //   activePlayer[1] = false;
  //   activePlayer[0] = true;
  // }

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function resetCurrentScore() {
  if (activePlayer === 0) {
    player0CurrentScore.textContent = 0;
  } else {
    player1CurrentScore.textContent = 0;
  }
}

function updateCurrentScore(num) {
  if (activePlayer === 0) {
    player0CurrentScore.textContent =
      Number(player0CurrentScore.textContent) + num;
  } else {
    player1CurrentScore.textContent =
      Number(player1CurrentScore.textContent) + num;
  }
}

function updateTotalScore() {
  if (activePlayer === 0) {
    player0TotalScore.textContent =
      Number(player0TotalScore.textContent) +
      Number(player0CurrentScore.textContent);
  } else {
    player1TotalScore.textContent =
      Number(player1TotalScore.textContent) +
      Number(player1CurrentScore.textContent);
  }
  if (isGameCompleted()) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    rollDiceBtn.removeEventListener('click', rollDice);
    holdBtn.removeEventListener('click', updateTotalScore);
    diceImage.src = '';
  } else {
    resetCurrentScore();
    switchActivePlayerToInactive();
  }
}

function isGameCompleted() {
  const totalScore =
    activePlayer === 0
      ? Number(player0TotalScore.textContent)
      : Number(player1TotalScore.textContent);
  return totalScore >= 20 ? true : false;
}
