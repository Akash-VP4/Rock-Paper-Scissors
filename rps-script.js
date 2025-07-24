function getComputerChoice() {
  let value = Math.random();
  value = parseInt(value * 10) % 3;
  const arr = ["rock", "paper", "scissor"];
  return arr[value];
}

// function getHumanChoice() {
//   let humenChoice = prompt("Enter your choice :\n Rock\n Paper\n Scissor");
//   humenChoice = humenChoice.toLowerCase();
//   return humenChoice;
// }

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

function playgame() {
  const choice = document.querySelectorAll("button");
  choice.forEach((button) => {
    button.addEventListener("click", () => {
      computerChoice = getComputerChoice();

      let result = document.querySelector("#results");
      let score = document.createElement("div");
      score.classList.add("score");

      const [humenScore, computerScore] = PlayRound(button.id, computerChoice);

      if (humenScore > computerScore) {
        score.textContent = "Congratulations you won the game!!";
        result.appendChild(score);
      } else if (computerScore > humenScore) {
        score.textContent = "You lost the game!";
        result.appendChild(score);
      } else {
        score.textContent = "It's a tie";
        result.appendChild(score);
        
      }
    });
  });
}

playgame();
