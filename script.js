
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Options for the game
  const options = ["rock", "paper", "scissors"];
  
  // Function to generate the computer's move randomly
  function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Function to determine the winner
  function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  // Main game function
  function playGame() {
    readline.question("Choose rock, paper, or scissors: ", (playerSelection) => {
      playerSelection = playerSelection.toLowerCase();
  
      // Check if the player's choice is valid
      if (!options.includes(playerSelection)) {
        console.log("Invalid choice! Try again.");
        return playGame(); // Restart the game if input is invalid
      }
  
      // Generate the computer's move
      const computerSelection = computerPlay();
      console.log(`Computer chose: ${computerSelection}`);
  
      // Determine and display the result
      const result = determineWinner(playerSelection, computerSelection);
      console.log(result);
  
      // Close the input interface
      readline.close();
    });
  }
  
  // Start the game
  playGame();
  