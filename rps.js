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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let message = "it's a tie";
        console.log(message);
        return message
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        let message = "player won";
        console.log(message);
        return message
    } else {
        let message = "player lost";
        console.log(message);
        return message
    }
}

function playGame(params) {
    let playerSelection = playerChoice().toUpperCase();
    let computerSelection = computerChoice().toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection)
}

playGame();