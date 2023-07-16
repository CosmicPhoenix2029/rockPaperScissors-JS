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

//fuction to get the users choice
function getUserChoice(){

}

//function to play a single round and check who won
function playRound(computerChoice, userChoice){

}

//function to control the number of rounds played and displaying the results
function playGame(){

}

console.log (getComputerChoice());
console.log