function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Enter either rock, paper or scissor");
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Match is tie!");
  } 
  else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissor" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissor")
  ) {
    console.log("You won");
    humanScore++;
    console.log("Your Score: " + humanScore);
  } 
  else {
    console.log("Computer won");
    computerScore++;
    console.log("Computer Score: " + computerScore);
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game is a tie overall!");
    }
}

playGame();