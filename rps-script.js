function getComputerChoice() {
  let value = Math.random();
  value = parseInt(value * 10) % 3;
  const arr = ["rock", "paper", "scissor"];
  return arr[value];
}

function PlayRound(humenChoice, computerChoice) {
  let humenScore = 0;
  let computerScore = 0;

  if (
    (humenChoice == "paper" && computerChoice == "rock") ||
    (humenChoice == "scissor" && computerChoice == "paper") ||
    (humenChoice == "rock" && computerChoice == "scissor")
  ) {
    humenScore++;
  } else if (
    (computerChoice == "paper" && humenChoice == "rock") ||
    (computerChoice == "scissor" && humenChoice == "paper") ||
    (computerChoice == "rock" && humenChoice == "scissor")
  ) {
    computerScore++;
  } else {
    humenScore++;
    computerScore++;
  }

  return [humenScore, computerScore];
}

let count = 0;
let TotalHumenScore = 0;
let TotalComputerScore = 0;

function playgame() {
  const choice = document.querySelectorAll("button");
  choice.forEach((button) => {
    button.addEventListener("click", () => {
      computerChoice = getComputerChoice();

      let [humenScore, computerScore] = PlayRound(button.id, computerChoice);
      count++;

      TotalComputerScore += computerScore;
      TotalHumenScore += humenScore;

      const updateChoice = document.querySelector(".choices");
      updateChoice.innerHTML =
        "Your choice: " + button.id + " Computer choice: " + computerChoice;

      const updateScore = document.querySelector(".scores");
      updateScore.innerHTML =
        "Your score: " +
        TotalHumenScore +
        " Computer Score: " +
        TotalComputerScore;

      const result = document.querySelector("#results");
      let text = "";

      if (count == 5) {
        if (humenScore > computerScore) {
          text = "Congratulations you won the game!!";
        } else if (computerScore > humenScore) {
          text = "You lost the game!";
        } else {
          text = "It's a tie";
        }
        count = 0;
        TotalComputerScore=0
        TotalHumenScore=0
      }
      result.textContent = text;
    });
  });
}

playgame();
