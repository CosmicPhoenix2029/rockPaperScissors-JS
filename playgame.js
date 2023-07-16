//function to generate the computers choice:
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)   //random number from 0 - 2
    switch (computerChoice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "rock";
    }
}

//fuction to get and validate the users choice
function getUserChoice(){
    let userChoice = "";
    do{
        userChoice = prompt("Enter rock, paper or scissors: ", "rock").toLowerCase();
    }
    while(!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"))
    
    return userChoice;
}

//function to play a single round and check who won
function playRound(computerChoice, userChoice){
    let results = {
        text: "",
        outcome: ""
    };
    switch(computerChoice){
        case "rock": 
            switch(userChoice){
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
            switch(userChoice){
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
            switch(userChoice){
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
function playGame(){

}
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let results = playRound(computerChoice, userChoice);
console.log (computerChoice);
console.log(userChoice);
console.log (results);