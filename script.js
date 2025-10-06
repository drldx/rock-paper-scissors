const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultsDiv = document.getElementById("resultsP");
const scoresDiv = document.querySelector("#scoresDiv");

let round = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

function correction(){

   const reset = document.createElement("button");

   reset.textContent = "Reset";
   scoresDiv.appendChild(reset);
   reset.style.fontSize = "medium";
   reset.style.color = "white";
   reset.style.background = "green";
   rockBtn.disabled = true;
   paperBtn.disabled = true;
   scissorsBtn.disabled = true;
   reset.addEventListener("click", ()=> {
    
    round = 0;
    humanScore = 0;
    computerScore = 0;
    ties = 0;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    roundP.textContent = `` ;
    scoresP.textContent = ``;
    resultsDiv.textContent = ``;
    reset.remove();
   })


}

function checkScore() {
  
  if (humanScore === 5) {
   correction();
   resultsDiv.textContent = "You beat the Bot! Cheers!";
   return;  

  } else if(computerScore === 5){

   correction();
   resultsDiv.textContent = "Game Over! You lost to Bot!";
   return ;
  }
  
}

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


function playRound(humanChoice, computerChoice) {

  ++round;

  const hC = humanChoice;
  const cC = computerChoice;

  if (hC === cC) {
    ties++;
    return "It's a tie!";
  }
  if((hC === "Rock" && cC === "Paper") || (hC === "Paper" && cC === "Scissors") || (hC === "Scissors" && cC === "Rock")){
    ++computerScore;
    return `You lose!  ${hC} to ${cC}`;
  } else {
    ++humanScore ;
    return `You won!  ${hC} to ${cC}`;
  }
}

function renderResult(round, hScore, cScore){
  roundP.textContent = `Round = ${round}` ;
  scoresP.textContent = `You: ${hScore} Bot: ${cScore} Ties: ${ties}`;
};

const roundP = document.createElement("p");
const scoresP = document.createElement("p");
  
scoresDiv.appendChild(roundP);
scoresDiv.appendChild(scoresP);

rockBtn.addEventListener("click", () => {

  resultsDiv.textContent = playRound("Rock", getComputerChoice());
  renderResult(round, humanScore, computerScore);
  checkScore();
});

paperBtn.addEventListener("click", ()=> {
  resultsDiv.textContent = playRound("Paper", getComputerChoice());
  renderResult(round, humanScore, computerScore);
  checkScore();
});

scissorsBtn.addEventListener("click", ()=> {

  resultsDiv.textContent = playRound("Scissors", getComputerChoice());
  renderResult(round, humanScore, computerScore);
  checkScore();
});

