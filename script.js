document.getElementById("startButton").addEventListener("click", function() {
    const max = prompt("Enter the max number:");
    const random = Math.floor(Math.random() * max) + 1;
    let guess = prompt("Guess the number:");

    while (true) {
        if (guess === "quit") {
            document.getElementById("message").textContent = "You quit the game!";
            break;
        }

        if (guess == random) {
            document.getElementById("message").textContent = `You are right! The number was ${random}.`;
            break;
        } else if (guess < random) {
            guess = prompt("Hint: Your guess was too small. Try again or type 'quit' to stop:");
        } else {
            guess = prompt("Hint: Your guess was too large. Try again or type 'quit' to stop:");
        }
    }
});
