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
    if ((computerSelection == "Rock" && playerSelection == "Paper") || (computerSelection == "Paper" && playerSelection == "Scisors")
        || (computerSelection == "Scisors" && playerSelection == "Rock")){
        resultText = `You Win!\n${playerSelection} beats ${computerSelection}`;
        console.log(resultText);
    } else if ((computerSelection == "Rock" && playerSelection == "Scisors") || (computerSelection == "Paper" && playerSelection == "Rock")
    || (computerSelection == "Scisors" && playerSelection == "Paper")){
        resultText = `You Loose!\n${playerSelection} beats ${computerSelection}`;
        console.log(resultText);
    } else {
        resultText = `It's a Tie!\n${playerSelection} equals ${computerSelection}`;
        console.log(resultText);
    }
    return resultText;
  }
  
//  const playerSelection = "rock";
//  computerSelection = computerPlay();
//  console.log(playRound(playerSelection, computerSelection));

function game() {
        computerSelection = computerPlay();
        console.log(`computer ${computerSelection}`)
        playerSelection = playerPlay();
        console.log(`player ${playerSelection}`)
        let resultText = playRound(playerSelection, computerSelection);
        console.log(resultText);
}

console.log(game()); 

