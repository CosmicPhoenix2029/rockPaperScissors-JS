//function to generate the computers choice:
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)   //random number from 0 - 2
    switch (computerChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "rock";
    }
}

//fuction to get and validate the users choice
function getUserChoice() {
    let userChoice = "";
    do {
        userChoice = prompt("Enter rock, paper or scissors: ", "rock").toLowerCase();
    }
    while(!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"))
    
    return userChoice;
}

//function to play a single round and check who won
function playRound(computerChoice, userChoice) {
    let results = {
        text: "",
        outcome: ""
    };
    switch(computerChoice) {
        case "rock": 
            switch(userChoice) {
                case "rock": 
                    results.text = `Draw! You both chose ${computerChoice}`;
                    results.outcome = "Draw";
                    break;
                case "paper":
                    results.text = `You Win! ${userChoice} beats ${computerChoice}`;
                    results.outcome = "Win";
                    break;
                case "scissors":
                    results.text = `You Lose! ${computerChoice} beats ${userChoice}`;
                    results.outcome = "Lose";
                    break;
            }
            break;
        case "paper":
            switch(userChoice) {
                case "rock":
                    results.text = `You Lose! ${computerChoice} beats ${userChoice}`;
                    results.outcome = "Lose";
                    break;
                case "paper":
                    results.text = `Draw! You both chose ${computerChoice}`;
                    results.outcome = "Draw";
                    break;
                case "scissors": 
                    results.text = `Draw! You both chose ${computerChoice}`;
                    results.outcome = "Draw";
                    break;
            }
            break;
        case "scissors":
            switch(userChoice) {
                case "rock":
                    results.text = `You Win! ${userChoice} beats ${computerChoice}`;
                    results.outcome = "Win";
                    break;
                case "paper":
                    results.text = `You Lose! ${computerChoice} beats ${userChoice}`;
                    results.outcome = "Lose";
                    break;
                case "scissors": 
                    results.text = `Draw! You both chose ${computerChoice}`;
                    results.outcome = "Draw";
                    break;
            }
            break;
    }

        if(results.outcome === "Win") {
            userScore++;
        }
        else if(results.outcome === "Lose") {
            computerScore++;
        }
        else { 
            drawCount++;
        }
    return results;
}

//the DOM manipulation part
//event listeners for the buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let gameCount = 0;
let userScore = 0;
let drawCount = 0;
let computerScore = 0;

rockBtn.addEventListener(
    "click", function() {
        const computerChoice = getComputerChoice();
        const userChoice = 'rock';
        addResult(playRound(computerChoice, userChoice));
    }
)

paperBtn.addEventListener(
    "click", function() {
        const computerChoice = getComputerChoice();
        const userChoice = 'paper';
        addResult(playRound(computerChoice, userChoice));
    }
)

scissorsBtn.addEventListener(
    "click", function() {
        const computerChoice = getComputerChoice();
        const userChoice = 'scissors';
        addResult(playRound(computerChoice, userChoice));
    }
)

//function to update results
function addResult(results) {
    const resultsDiv = document.querySelector('#displayResults');
    const resultsP = document.createElement('p');
    resultsP.textContent = `Round ${gameCount + 1}: ${results.text}`;
    resultsDiv.appendChild(resultsP);  
    gameCount++;

    if (gameCount > 4) {
        if(userScore > computerScore) { 
            alert(`you are the overall winner!\n You scored: ${userScore}\n The computer scored: ${computerScore}\n You drew ${drawCount} times`)
        }
        else if(userScore === computerScore) {
            alert(`The game is a Tie!\n You and the computer both scored: ${userScore}\n You drew ${drawCount} times`)
        }
        else{ 
            alert(`The computer is the overall Winner!\n You scored: ${userScore}\n The computer scored: ${computerScore}\n You drew ${drawCount} times`)
        }

        //remove previous results
        while(resultsDiv.lastElementChild) {
            resultsDiv.removeChild(resultsDiv.lastElementChild);
        }
        gameCount = 0;
    }
}