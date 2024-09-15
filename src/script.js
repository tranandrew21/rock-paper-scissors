var computerScore = 0;
var playerScore = 0;
const btn = document.querySelectorAll("button");
const humScore = document.querySelector("#humanScore");
const botScore = document.querySelector("#botScore");


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

// break point 

const playRound = (humanInput, compChoice) => {
    console.log(humanInput, compChoice);

    if(playerScore < 5 && computerScore < 5)
    {
        if(compChoice == "rock" && humanInput == "rock" || compChoice == "paper" && humanInput == "paper" || compChoice == "scissors" && humanInput == "scissors")
        {
            console.log("Its a tie, try again. Computer chose: " + compChoice + " You chose: " + humanInput);
            computerScore += 0;
            playerScore += 0;
        } else if(compChoice == "rock" && humanInput == "scissors" || 
                  compChoice == "scissors" && humanInput == "paper" || 
                  compChoice == "paper" && humanInput == "rock") {
                    
            console.log("Computer wins. You lose..." + compChoice + " You chose: " + humanInput);
            computerScore++;
        }
        else if(compChoice == "scissors" && humanInput == "rock" || 
                compChoice == "paper" && humanInput == "scissors" || 
                compChoice == "rock" && humanInput == "paper"){
    
            console.log("You win. Computer loses. Computer chose: " + compChoice + " you chose: " + humanInput);
            playerScore++;
        }
        humScore.textContent = playerScore;
        botScore.textContent = computerScore;
    }

    if(playerScore === 5)
    {
        console.log("win");
        endGame();
            
    }
    else if (computerScore === 5) {
        console.log("lose");
        endGame();
    }

};

const endGame = () => {
    btn.forEach(btn => btn.style.display = "none");
    document.getElementById("restart").style.display = "block";
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    humScore.textContent = playerScore;
    botScore.textContent = computerScore;

    btn.forEach(btn => btn.style.display = "");
    document.getElementById("restart").style.display = "none";
    document.getElementById("start").style.display = "none";
};




const play = () => {
    // logic to disable headers and buttons before start game pressed
    btn.forEach(btn => btn.style.display = "none");
    document.getElementById("head").style.display = "none";
    document.getElementById("start").style.display = "flex";

    // Once startgame clicked disable button and unhide other buttons for game to start
    document.getElementById("start").addEventListener("click", () => {
        btn.forEach(btn => btn.style.display = "");
        document.getElementById("start").style.display = "none";
        document.getElementById("head").style.display = "";
        document.getElementById("restart").style.display = "none";
    })

    btn.forEach(btn => {
        btn.addEventListener("click", () => { // wait for user to press selection to call round function
            playRound(btn.id, compChoiceHelper()); // use btn.id to grab id of buttons to compare to answers
        })
    });
};

document.getElementById("restart").addEventListener("click", resetGame);
play();