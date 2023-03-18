const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultDiv = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();

  let resultText = `You choose ${playerSelection}, and computer chose ${computerSelectionLowerCase}. `;

  if (playerSelection === computerSelectionLowerCase) {
    resultText += "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelectionLowerCase === "scissors") ||
    (playerSelection === "paper" && computerSelectionLowerCase === "rock") ||
    (playerSelection === "scissors" && computerSelectionLowerCase === "paper")
  ) {
    resultText += "You win!";
    playerScore++;
  } else {
    resultText += "You lose!";
    computerScore++;
  }

  resultText += ` Score: You: ${playerScore} Computer: ${computerScore}`;
  
  resultDiv.textContent = resultText;

  if (playerScore === 5) {
    resultDiv.textContent = "You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "You lose the game!";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

rockBtn.addEventListener("click", () => playRound("rock", computerPlay()));
paperBtn.addEventListener("click", () => playRound("paper", computerPlay()));
scissorsBtn.addEventListener("click", () => playRound("scissors", computerPlay()));
