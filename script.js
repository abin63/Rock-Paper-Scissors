const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
let display = document.getElementById("display");
let scoreCard = document.getElementById("score-card");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    display.style.color = "Blue";
    display.textContent = "Match is tie!";
  }
  else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    display.style.color = "green";
    display.textContent = "You won!";
    humanScore++;
  }
  else {
    display.style.color = "red";
    display.textContent = "You Lost!";
    computerScore++;
  }

  scoreCard.textContent = `Your Score: ${humanScore} |  Computer Score: ${computerScore}`;

  if (humanScore === 5) {
    display.style.color = "green";
    display.textContent = "Congratulations! You won the game!";
    resetGame();
  }
  else if (computerScore === 5) {
    display.style.color = "red";
    display.textContent = "Sorry! Better luck next time.";
    resetGame();
  }

}

function resetGame() {
  scoreCard.textContent = `Your Final Score is ${humanScore} and Computer's final Score is ${computerScore}`;
  humanScore = 0;
  computerScore = 0;
}