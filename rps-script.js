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

      // let scoretable = document.querySelector(".match");
      // let humScore = document.createElement("div");
      // humScore.classList.add("humScore");
      const updateScore = document.querySelector(".humen");
      updateScore.innerHTML =
        "Your score: " +
        TotalHumenScore +
        " Computer Score: " +
        TotalComputerScore;

      if (count == 5) {
        let result = document.querySelector("#results");
        let score = document.createElement("div");
        score.classList.add("score");

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
        count = 0;
        result.removeChild;
      }
    });
  });
}

playgame();
