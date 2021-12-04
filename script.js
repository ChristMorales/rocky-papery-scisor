function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    if (randomNumber == 0) {
        computerSelection = "Rock";
    } else if (randomNumber == 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scisors";
    }
    return computerSelection;
}

function playerPlay() {
    let playerSelectionCase = prompt ("Write 'Rock', 'Paper' or 'Scisors'");
    let playerSelectionLower = playerSelectionCase.toLowerCase();
    let playerSelectionUpper = playerSelectionLower.charAt(0);    
    playerSelectionUpper1 = playerSelectionUpper.toUpperCase();
    playerSelectionLower1 = playerSelectionLower.slice(1);
    let playerSelection = playerSelectionUpper1 + playerSelectionLower1;
    return playerSelection;
}





function playRound(playerSelection, computerSelection) {
    let resultText;
    let result;
    if ((computerSelection == "Rock" && playerSelection == "Paper") || (computerSelection == "Paper" && playerSelection == "Scisors")
        || (computerSelection == "Scisors" && playerSelection == "Rock")){
        resultText = `You Win!\n${playerSelection} beats ${computerSelection}`;
        result = "Win";
    } else if ((computerSelection == "Rock" && playerSelection == "Scisors") || (computerSelection == "Paper" && playerSelection == "Rock")
    || (computerSelection == "Scisors" && playerSelection == "Paper")){
        resultText = `You Loose!\n${playerSelection} beats ${computerSelection}`;
        result = "Loose";
    } else {
        resultText = `It's a Tie!\n${playerSelection} equals ${computerSelection}`;
        result = "Tie";
    }
    return  [resultText, result];
  }


function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        console.log(`player: ${playerSelection}, computer: ${computerSelection}`)
        let resultTextGame = playRound(playerSelection, computerSelection);
        console.log(resultTextGame[0]);
        if (resultTextGame[1] == "Win") {
            playerScore++;
        } else if (resultTextGame[1] == "Loose") {
            computerScore++;
        }
        console.log(`player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("player wins!");
    } else if (playerScore < computerScore) {
        console.log("computer wins");
    } else {
        console.log ("It's a Tie");
    }
}

game(); 



