var computerScore = 0;
var playerScore = 0;

function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1);
};

const compChoiceHelper = () => {
    var compChoice = getComputerChoice();
    var choiceString = "";
    if(compChoice == 1) {   
        choiceString = 'rock';
    } else if (compChoice == 2) {
        choiceString = 'paper';
    } else if (compChoice == 3) {
        choiceString = 'scissors';
    }
    return choiceString;
};
// Breakpoint for helper function 
// console.log(compChoiceHelper(getComputerChoice()));

const humanInput = () => {
    let input = prompt("Enter your choice: (rock, paper, or scissors)");
    let lowerCase = input.toLowerCase();
    return lowerCase;
};

// breakpoint for humanInput
//console.log(humanInput());


// break point 
//console.log(playRound(humanInput(), compChoiceHelper()));
const playRound = (humanInput, compChoice) => {
    if(compChoice == "rock" && humanInput == "rock" || compChoice == "paper" && humanInput == "paper" || compChoice == "scissors" && humanInput == "scissors")
    {
        console.log("Its a tie, try again. Computer chose: " + compChoice + " You chose: " + humanInput);
        computerScore += 0;
        playerScore += 0;
    } else if(compChoice == "rock" && humanInput == "scissors" || compChoice == "scissors" && humanInput == "paper" || compChoice == "paper" && humanInput == "rock") {
        console.log("Computer wins. You lose..." + compChoice + " You chose: " + humanInput);
        computerScore++;
    }
    else if(compChoice == "scissors" && humanInput == "rock" || compChoice == "paper" && humanInput == "scissors" || compChoice == "rock" && humanInput == "paper"){
        console.log("You win. Computer loses. Computer chose: " + compChoice + " you chose: " + humanInput);
        playerScore++;
    }
};

const playGame = () => {
    var roundCounter = 0;
    while(roundCounter != 5)
    {
        playRound(humanInput(), compChoiceHelper());
        // breakpoint 
        // console.log(roundCounter);
        // console.log("Computer score: " + computerScore + " Your score: " + playerScore);
        ++roundCounter;
    }
    if(playerScore > computerScore)
    {
        console.log("You won the game!");
        console.log("Score: \nComputer: " + computerScore + " Player: " + playerScore)
    } else if(computerScore > playerScore) {
        console.log("Computer won the game!");
        console.log("Score: \nComputer: " + computerScore + " Player: " + playerScore)
    }
    else {
        console.log("Its a tie game!");
        console.log("Score: \nComputer: " + computerScore + " Player: " + playerScore)
    }
};

playGame();