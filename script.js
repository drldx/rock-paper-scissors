let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  
  let random = Math.floor(Math.random() * 10);
  let choice; 
  if (random >=0 && random <= 3) {
    choice = "Rock"; 
  } else if (random >=4 && random <=6) {
    choice = "Paper";
  } else if (random >= 7 && random <=9) {
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

function playRound(humanChoice, computerChoice) {
  const hC = humanChoice;
  const cC = computerChoice;

 // console.log(`hc: ${hC}, cc: ${cC}`);

  if (hC === cC) {
    return "It's a tie!"; 
  } else if ((hC === "Rock" && cC === "Paper")) {
    computerScore++;
    return `You lose! ${cC} beats ${hC}`; 

  } else  if ((hC === "Rock" && cC === "Scissors")) {
    humanScore++;
    return `You won! ${hC} beats ${cC}`; 

  } else if ((hC === "Paper" && cC === "Rock")) {
    humanScore++;
    return `You won! ${hC} beats ${cC}`; 
    
  } else if ((hC === "Paper" && cC === "Scissors")) {
    computerScore++;
    return  `You lose! ${cC} beats ${hC}`;

  }else if ((hC === "Scissors" && cC === "Rock")) {
    computerScore++;
    return  `You lose! ${cC} beats ${hC}`;

  } else if ((hC === "Scissors" && cC === "Paper")) {
    humanScore++;
    return  `You won! ${cC} beats ${hC}`;

  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
