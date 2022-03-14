
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

function formatStrings(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1).toLowerCase();

    user.textContent = `Player chose: ${playerSelection}`;
    body.appendChild(user);
    comp.textContent = `Computer chose: ${computerSelection}`;
    body.appendChild(comp);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatStrings(playerSelection, computerSelection);
    // console.log(`Player chose: ${playerSelection}`);
    // console.log(`Computer chose: ${computerSelection}`)
    
    if (playerSelection === computerSelection){
        return "Draw!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || playerSelection === "Scissors" && computerSelection === "Rock") {
            compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        userScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    }

// Original code for displaying game in console    
// function game(){
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt(`Round ${i+1}: Throw Rock, Paper, or Scissors`);
//         // console.log(`Player chose: ${playerSelection}`);
//         const computerSelection = computerPlay();
//         console.log(`Round ${i+1}: ${playRound(playerSelection, computerSelection)}`);
//      }
// }

// game();

// playerSelection = prompt("Throw Rock, Paper, or Scissors");
// console.log(`Player chose ${playerSelection}`);
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


// Displaying results on html page

const body = document.querySelector('body');
const user = document.createElement('div');
const comp = document.createElement('div');
const results = document.createElement('div');
let userScore = 0;
let compScore = 0;
const scoreDisplay = document.createElement('div');
const winner = document.createElement('div');
//Adding event listeners to html buttons

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

// and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        results.textContent = `${playRound(playerSelection,computerSelection)}`;
        body.appendChild(results);
        scoreDisplay.textContent = `${userScore} ${compScore}`;
        body.appendChild(scoreDisplay);
        if (userScore === 5){
            winner.textContent = "User Wins!! New Game";
            resetScore();
        }
        else if (compScore === 5){
            winner.textContent = "Computer Wins!! New Game";
            resetScore()
        }
        else{
            winner.textContent = "";
        }
        body.appendChild(winner);
    });
});

function resetScore(){
    userScore = 0;
    compScore = 0;
}
