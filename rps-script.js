function getComputerChoice() {
  value = Math.random();
  return parseInt(value * 10) % 3;
}
// console.log(getComputerChoice())

function getHumanChoice() {
  let humenChoice = prompt(
    "Select your choice from below:\n 1. for Rock\n 2. for Paper\n 3. for Scissors "
  );
  return humenChoice;
}

function PlayRound() {
  let humenScore = 0;
  let computerScore = 0;


  for (let i = 0; i < 2; i++) {
    let humenChoice = getHumanChoice();
    let computerChoice = getComputerChoice() + 1;

    let diff = humenChoice - computerChoice;
    console.log(diff)
    if (diff === 1) {
      humenScore++;
    } else if (diff === -1) {
      computerScore++;
    } else if (diff === 2) {
      computerScore++;
    } else if (diff === -2) {
      humenScore++;
    } else {
      humenScore++;
      computerScore++;
    }

    alert(
      "1->Rock\n2->Paper\n3->Scissors\nHuman choice: " +
        humenChoice +
        "\n Computer choice: " +
        computerChoice
    );

  }

  alert("Computer score: " + computerScore + "\n Humen Score: " + humenScore);
  
  return [humenScore,computerScore];

}


function playgame(){

  const [humenScore,computerScore] = PlayRound();
  if(humenScore>computerScore){
    alert("Congratulations you won the game!!")
  }else if(computerScore>humenScore){
    alert("You lost the game!")
  }else{
    alert("It's a tie")
  }


}

playgame()

