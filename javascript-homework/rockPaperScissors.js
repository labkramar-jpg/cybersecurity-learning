
function rockPaperScissors(playerChoice) {
    const choices = ["rock", "paper", "scissors"];

    if (!choices.includes(playerChoice)) {
        return "Invalid choice";
    }

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        return "Draw";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win";
    }

    return "You lose";
}

console.log(rockPaperScissors("rock"));
console.log(rockPaperScissors("paper"));
console.log(rockPaperScissors("scissors"));
console.log(rockPaperScissors("hello"));
