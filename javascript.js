
function computerPlay(){
play = Math.floor(Math.random() * 4);
if (play === 1){
    return "Rock";
}
else if (play === 2){
    return "Paper";
}
else {
    return "Scissors";
}
}

// for (let i = 0; i < 20; i++){
// console.log(computerPlay());
// }

function playRound(playerSelection, computerSelection) {
    console.log(`Computer chose ${computerSelection}`)
    playerSelection = playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1).toLowerCase();
    // console.log(`formated player selection is: ${playerSelection}`);
    if (playerSelection === computerSelection){
        return "Draw!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    }
    

// playerSelection = prompt("Throw Rock, Paper, or Scissors");
// console.log(`Player chose ${playerSelection}`);
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));