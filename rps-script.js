function getComputerChoice() {
  let value = Math.random();
  value = parseInt(value * 10) % 3;
  const arr = ["rock", "paper", "scissor"];
  return arr[value];
}

function getHumanChoice() {
  let humenChoice = prompt("Enter your choice :\n Rock\n Paper\n Scissor");
  humenChoice = humenChoice.toLowerCase();
  return humenChoice;
}

function PlayRound() {
  let humenScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    humenChoice = getHumanChoice();
    computerChoice = getComputerChoice();
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
    } else if (computerChoice == humenChoice) {
      humenScore++;
      computerScore++;
    } else {
      alert("Incorrect option!!");
      computerScore++;
      break;
    }

    alert(
      "Human choice: " + humenChoice + "\n Computer choice: " + computerChoice
    );
  }

  alert("Computer score: " + computerScore + "\n Humen Score: " + humenScore);

  return [humenScore, computerScore];
}

function playgame() {
  const [humenScore, computerScore] = PlayRound();
  if (humenScore > computerScore) {
    alert("Congratulations you won the game!!");
  } else if (computerScore > humenScore) {
    alert("You lost the game!");
  } else {
    alert("It's a tie");
  }
}

playgame();
