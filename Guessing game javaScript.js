let humanScore = 0;
let computerScore = 6;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * (9));
}
//this function will be called each round to determine which guess is closest to the target number and determine a winner 
function getAbsoluteDistance (humanGuess, computerGuess, targetNumber) {
  return Math.abs(targetNumber - computerGuess);
  return Math.abs(targetNumber - humanGuess);
}
 const compareGuesses = () => { 
   getAbsoluteDistance ();   
  {
  if ((targetNumber - computerGuess) >= (targetNumber - humanGuess)) {
  return true;
  }if else {
  return false; 
  }
};
//this function will be used to correctly increase the winner's score after each round
const updateScore = winner => {
if (winner ==='human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++
    }
};

//this function will be used to update the round number after each round
const advanceRound  = () => {
  currentRoundNumber = currentRoundNumber + 1;
}

