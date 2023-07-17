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
    const resultsDiv = document.querySelector('#displayResults');  
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
    
    return results;
}

//function to control the number of rounds played and displaying the results
function playGame() {
    const numberOfGames = parseInt(prompt("Enter the number of games you would like to play: ", 5));
    
    let computerChoice;
    let userChoice;
    let results;
    let userScore = 0;

    for(games = 0; games <= numberOfGames; games++) {
        computerChoice = getComputerChoice();
        userChoice = getUserChoice();
        results = playRound(computerChoice, userChoice);

        console.log(results.text);

        if(results.outcome === "Win"){
            userScore++;
        }
    }
    let computerScore = numberOfGames - userScore;
    if(userScore > computerScore) {console.log(`you are the overall winner!\n You scored: ${userScore}\n The computer scored: ${computerScore}`)}
    else if(userScore === computerScore) {console.log(`The game is a Tie!\n You and the computer both scored: ${userScore}`)}
    else(console.log(`The computer is the overall Winner!\n You scored: ${userScore}\n The computer scored: ${computerScore}`))
}
playGame();


//the DOM manipulation part
//event listeners for the buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener(
    'click', () => {
        const computerChoice = getComputerChoice();
        const userChoice = 'rock';
        playRound(computerChoice, userChoice);
    }
);
paperBtn.addEventListener(
    'click', () => {
        const computerChoice = getComputerChoice();
        const userChoice = 'paper';
        playRound(computerChoice, userChoice);
    }
);
scissorsBtn.addEventListener(
    'click', () => {
        const computerChoice = getComputerChoice();
        const userChoice = 'scissors';
        playRound(computerChoice, userChoice);
    }
);