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
console.log(getComputerChoice());


