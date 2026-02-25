'use strict';
import { game } from './data/data.js';

// UI
const currentRound = document.getElementById('current-round');
const playerChoice = document.getElementById('player-choice');
const playerScore = document.getElementById('player-score');
const computerChoice = document.getElementById('computer-choice');
const computerScore = document.getElementById('computer-score');
const overlay = document.querySelector('.overlay');

const comment = document.getElementById('comment');
const endComment = document.getElementById('end-comment');

const restartBtn = document.getElementById('restart-btn');

const playGame = () => {
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const humanChoice = btn.dataset.choice;
      let round = game.playRound(humanChoice);

      playerScore.textContent = round.humanScore;
      computerScore.textContent = round.computerScore;

      playerChoice.textContent = round.playerIcon;
      computerChoice.textContent = round.computerIcon;

      currentRound.textContent = round.currentRound;
      comment.textContent = round.message;

      if (round.currentRound === game.rounds) {
        endComment.textContent = game.getFinalResult();
        overlay.classList.remove('hide');
        game.resettGame();
        resettUI();
        restartBtn.addEventListener('click', () => {
          overlay.classList.add('hide');
        });
      }
    });
  });
};

const resettUI = () => {
  playerScore.textContent = 0;
  computerScore.textContent = 0;

  playerChoice.textContent = game.rules['default-icon'];
  computerChoice.textContent = game.rules['default-icon'];

  currentRound.textContent = 0;
  comment.textContent = comment.dataset.original;
};

playGame();
