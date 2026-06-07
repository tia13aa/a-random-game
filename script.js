const choices = ["✊","✋","✌️"];
const buttons = document.querySelectorAll(".choices button");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.textContent;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer's choice ${computerChoice}`;
        
        const result = determineWinner(userChoice, computerChoice);
        resultText.textContent = result;

        resultText.style.animation = "none";
        setTimeout(() => {
            resultText.style.animation = "glow 1.5s infinite alternate";
        }, 10);
    });
});

function determineWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
      (user === "✊" && computer === "✌️") ||
      (user === "✋" && computer === "✊") ||
      (user === "✌️" && computer === "✋")
    ) {
        return "You win! 🎉";
    }
    return "You lose! 😥"
}