export const game = {
  rules: {
    Rock: { icon: '🪨', beat: 'Scissors' },
    Scissors: { icon: '✂️', beat: 'Paper' },
    Paper: { icon: '📃', beat: 'Rock' },
    'default-icon': '❓',
  },

  rounds: 5,
  humanScore: 0,
  computerScore: 0,
  currentRound: 0,

  getIcon(dataset) {
    return game.rules[dataset].icon;
  },

  getComputerChoice() {
    const choices = ['Rock', 'Scissors', 'Paper'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  },

  playRound(humanChoice) {
    const humanSelection = humanChoice;
    const computerSelection = this.getComputerChoice();
    this.currentRound++;

    let resultMessage = this.getCurrentRoundResult(
      humanSelection,
      computerSelection,
    );

    return {
      playerIcon: this.getIcon(humanSelection),
      computerIcon: this.getIcon(computerSelection),
      message: resultMessage,
      humanScore: this.humanScore,
      computerScore: this.computerScore,
      currentRound: this.currentRound,
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
      return `Draw.`;
    }
  },

  getFinalResult() {
    return this.humanScore > this.computerScore
      ? `You won the game!`
      : this.humanScore < this.computerScore
        ? `Computer won the game.`
        : 'Draw.';
  },

  resettGame() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.currentRound = 0;
  },
};
