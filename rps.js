function getComputerChoice() {
    let choices = ['rock', 'papers', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}

function playerChoice() {
    let playersChoice = prompt('choose on of theese: rock | paper | scissors');
    return playersChoice;
}

function computerChoice() {
    let computersChoice = getComputerChoice();
    return computersChoice;
}

let playerSelection = playerChoice().toUpperCase();
let computerSelection = computerChoice().toUpperCase();
console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    
}