let playerScore = 0;
    let computerScore = 0;
    
    function computerPlay() {
      const options = ["rock", "paper", "scissors"];
      return options[Math.floor(Math.random() * options.length)];
    }
    
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
    }
    
    function updateScore() {
      const playerScoreElement = document.querySelector("#player-score");
      const computerScoreElement = document.querySelector("#computer-score");
      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
    }
    
    function displayResult(result) {
      const resultElement = document.querySelector("#result");
      resultElement.textContent = result;
    }
    
    function checkWinner() {
      if (playerScore === 5) {
        displayResult("You win the game!");
        resetGame();
      } else if (computerScore === 5) {
        displayResult("You lose the game!");
        resetGame();
      }
    }
    
    function resetGame() {
      playerScore = 0;
      computerScore = 0;
      updateScore();
    }
    
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () => {
      const computerSelection = computerPlay();
      const result = playRound("rock", computerSelection);
      displayResult(result);
      updateScore();
      checkWinner();
    });
    
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () => {
      const computerSelection = computerPlay();
      const result = playRound("paper", computerSelection);
      displayResult(result);
      updateScore();
      checkWinner();
    });
    
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", () => {
      const computerSelection = computerPlay();
      const result = playRound("scissors", computerSelection);
      displayResult(result);
      updateScore();
      checkWinner();
    });
    
