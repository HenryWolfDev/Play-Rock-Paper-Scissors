'use strict';

const game = {
  rules: {
    Rock: { beat: 'Scissors' },
    Scissors: { beat: 'Paper' },
    Paper: { beat: 'Rock' },
  },

  rounds: 5,
  humanScore: 0,
  computerScore: 0,
  currentRound: 0,

  getHumanChoice() {
    const choice = prompt('Scissors, Rock or Paper? ');

    const format = text => {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };
    return format(choice);
  },

  getComputerChoice() {
    const choices = ['Rock', 'Scissors', 'Paper'];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  },

  playRound() {
    const humanChoice = this.getHumanChoice();
    const computerChoice = this.getComputerChoice();
    this.currentRound++;

    let resultMessage = this.getCurrentRoundResult(humanChoice, computerChoice);

    return {
      message: resultMessage,
      score: `Score: ${this.humanScore} - ${this.computerScore}`,
      round: `Round: ${this.currentRound} / ${this.rounds}`,
      isGameOver: this.currentRound === this.rounds,
    };
  },

  getCurrentRoundResult(humanChoice, computerChoice) {
    if (this.rules[humanChoice].beat === computerChoice) {
      this.humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (this.rules[computerChoice].beat === humanChoice) {
      this.computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
      return `Draw .`;
    }
  },

  getFinalResult(humanScore, computerScore) {
    return humanScore > computerScore
      ? `You won the game!`
      : humanScore < computerScore
        ? `Computer won the game.`
        : 'Draw.';
  },
};

while (game.currentRound < game.rounds) {
  const status = game.playRound();

  console.log(status.message);
  console.log(status.round);
  console.log(status.score);
  console.log('-------------------');

  if (status.isGameOver) {
    console.log(game.getFinalResult());
  }
}
