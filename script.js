function getComputerChoice() {

  let random = Math.floor(Math.random() * 10);
  let choice;
  if (random >= 0 && random <= 3) {
    choice = "Rock";
  } else if (random >= 4 && random <= 6) {
    choice = "Paper";
  } else if (random >= 7 && random <= 9) {
    choice = "Scissors";
  }

  return choice;
}
//console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Input your choice: ", '').toLowerCase();
  let userChoice = (choice[0].toUpperCase() + choice.slice(1));
  return userChoice;
}


function playGame(times) {

  let round = 0;
  let humanScore = 0;
  let computerScore = 0;
  let ties = 0;
  //console.log(playRound(humanSelection, computerSelection));

  while (times !== round) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    times--;
  }

  function playRound(humanChoice, computerChoice) {
    const hC = humanChoice;
    const cC = computerChoice;

    console.log(`you: ${hC}, bot: ${cC}`);

    if (hC === cC) {
      ties++;
      return "It's a tie!";
    } else if ((hC === "Rock" && cC === "Paper")) {
      computerScore++;
      return //`You lose! ${cC} beats ${hC}`; 

    } else if ((hC === "Rock" && cC === "Scissors")) {
      humanScore++;
      return //`You won! ${hC} beats ${cC}`; 

    } else if ((hC === "Paper" && cC === "Rock")) {
      humanScore++;
      return //`You won! ${hC} beats ${cC}`; 

    } else if ((hC === "Paper" && cC === "Scissors")) {
      computerScore++;
      return  //`You lose! ${cC} beats ${hC}`;

    } else if ((hC === "Scissors" && cC === "Rock")) {
      computerScore++;
      return  //`You lose! ${cC} beats ${hC}`;

    } else if ((hC === "Scissors" && cC === "Paper")) {
      humanScore++;
      return  //`You won! ${cC} beats ${hC}`;

    }
  }

  if (humanScore === computerScore) return `It's a tie: Score: ${humanScore} : ${computerScore}, ties: ${ties}`;
  if (humanScore > computerScore) return `You won! Score: ${humanScore} : ${computerScore}, ties: ${ties}`;
  if (humanScore < computerScore) return `You lose! Score: ${humanScore} : ${computerScore}, ties: ${ties}`;

}

let result = playGame(5);
console.log(result);
