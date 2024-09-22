const compPoints = document.getElementById("comppoints");
const playerPoints = document.getElementById("playerpoints");
const currentComputerPlay = document.getElementById("currentcomputerplay");
const currentPlayerPlay = document.getElementById("currentplayer");
const rock = document.getElementById("Rock");
const scissors = document.getElementById("Scissors");
const paper = document.getElementById("Paper");

let computerScore = 0;
let playerScore = 0;

function play() {
    const playerOptions = [rock, paper, scissors];
    const computerOptions = ["✊", "✌", "🖐"];

    playerOptions.forEach((option) => {
        option.addEventListener("click", function () {
            // Update player's emoji when clicked
            let player = option.textContent; // Get the player's selected emoji
            currentPlayerPlay.textContent = player; // Update the player's emoji display

            const choiceNumber = Math.floor(Math.random() * 3); // Randomly select computer's choice
            const computerValue = computerOptions[choiceNumber];

            currentComputerPlay.textContent = computerValue; // Update computer's emoji display
            results(player, computerValue); // Call the results function to decide winner
        });
    });
}

const results = (player, computer) => {
    const gameResults = document.getElementById("updates");

    if (player === computer) {
        gameResults.textContent = "Draw";
    } else if (player === "✌") {
        if (computer === "🖐") {
            gameResults.textContent = "Player wins";
            playerScore++;
            playerPoints.textContent = playerScore;
        } else {
            gameResults.textContent = "Computer wins";
            computerScore++;
            compPoints.textContent = computerScore;
        }
    } else if (player === "✊") {
        if (computer === "✌") {
            gameResults.textContent = "Player wins";
            playerScore++;
            playerPoints.textContent = playerScore;
        } else {
            gameResults.textContent = "Computer wins";
            computerScore++;
            compPoints.textContent = computerScore;
        }
    } else if (player === "🖐") {
        if (computer === "✊") {
            gameResults.textContent = "Player wins";
            playerScore++;
            playerPoints.textContent = playerScore;
        } else {
            gameResults.textContent = "Computer wins";
            computerScore++;
            compPoints.textContent = computerScore;
        }
    }
};

// Start the game
play();
