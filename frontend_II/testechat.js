function playGame() {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 2 && computerWins < 2) {
    // Get player choice
    const playerChoice = prompt("Enter your choice: rock, paper, or scissors");

    // Validate player choice
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
      alert("Invalid choice!");
      continue;
    }

    // Generate computer choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerWins++;
      result = "You win!";
    } else {
      computerWins++;
      result = "Computer wins!";
    }

    // Show result to the user
    alert(`You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`);
  }

  // Determine overall winner and show final message
  if (playerWins > computerWins) {
    alert("You win the game!");
  } else {
    alert("Computer wins the game!");
  }
}

// Call the function to start the game
playGame();
  